import { useState, useCallback, useEffect } from "react";
import CalendarPopup from "../components/CalendarPopup";
import { getDocs,collection,addDoc, deleteDoc,doc, updateDoc,query,where,getDoc } from "firebase/firestore";
import { db } from "../config/config";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AppointmentScheduling.css";

const AppointmentScheduling = () => {

  const doctorcollectionref=collection(db,"Doctors");
  const [DoctorData, setDoctorData] = useState([]);

  const [isCalendarPopupOpen, setCalendarPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onHealthcareLowResolutionLogoImageClick = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  const onRectangle12Click = useCallback(() => {
    navigate("/video-schedule");
  }, [navigate]);

  const openCalendarPopup = useCallback(() => {
    setCalendarPopupOpen(true);
  }, []);

  const closeCalendarPopup = useCallback(() => {
    setCalendarPopupOpen(false);
  }, []);

  const fetchdoctordata = async () => {
      const q = query(doctorcollectionref);
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setDoctorData(data);
  };

  useEffect(() => {
    getDocs(query(doctorcollectionref)).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setDoctorData(data);
      });
    },[]);


    console.log(DoctorData.length);

  return (
    <>
      <div className="appointment-scheduling">
        <img
          className="appointment-scheduling-child"
          alt=""
          src="/rectangle-83.svg"
        />
        <div className="chatbot6">
          <div className="chatbot-child5" />
          <img className="image-13-icon7" alt="" src="/image-13@2x.png" />
        </div>
        <div className="navbar14">
          <div className="navbar-child32" />
          <div className="navbar-child33" />
          <b className="community-forum14">
            <p className="book-appointments-with">Community</p>
            <p className="book-appointments-with">Forum</p>
          </b>
          <img className="image-11-icon14" alt="" src="/image-11@2x.png" />
          <img className="image-10-icon15" alt="" src="/image-10@2x.png" />
          <b className="schedule-appointment14">
            <p className="book-appointments-with">Schedule</p>
            <p className="book-appointments-with">Appointment</p>
          </b>
          <b className="support-ngos14">
            <p className="book-appointments-with">Support</p>
            <p className="book-appointments-with">NGO’s</p>
          </b>
          <img className="image-12-icon16" alt="" src="/image-12@2x.png" />
          <b className="personal-health-tracker-container14">
            <p className="book-appointments-with">Personal</p>
            <p className="book-appointments-with">{`Health Tracker `}</p>
          </b>
          <img className="image-15-icon15" alt="" src="/image-15@2x.png" />
          <b className="your-health-record-container14">
            <p className="book-appointments-with">Your Health</p>
            <p className="book-appointments-with">Record</p>
          </b>
          <img className="image-16-icon15" alt="" src="/image-16@2x.png" />
          <b className="health-cart14">Health cart</b>
          <img className="image-17-icon15" alt="" src="/image-17@2x.png" />
          <b className="wellness-reward-prgram14">Wellness Reward Prgram</b>
          <img className="image-20-icon17" alt="" src="/image-20@2x.png" />
          <b className="loginsignup14">Login/Signup</b>
          <img className="image-18-icon16" alt="" src="/image-18@2x.png" />
          <b className="rewards14">Rewards</b>
          <b className="experience15">Experience</b>
          <img className="image-19-icon16" alt="" src="/image-19@2x.png" />
          <img
            className="healthcare-low-resolution-logo-icon14"
            alt=""
            src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
            onClick={onHealthcareLowResolutionLogoImageClick}
          />
        </div>
        <img className="image-9-icon14" alt="" src="/image-9@2x.png" />
        <div className="appointment-scheduling-item" />
        <div className="appointment-scheduling-inner" />
        <div className="appointment-scheduling-child1" />
        <div className="appointment-scheduling-child2" />
        <div className="appointment-scheduling-child3" />
        <div className="video-consult">Video Consult</div>
        <div className="availability">Availability</div>
        <div className="relevance">Relevance</div>
        <div className="all-filters">All Filters</div>
        <div className="sort-by">Sort By</div>
        <div className="appointment-scheduling-child4" />
        <div className="doctors-available-in">
          <span>{DoctorData.length}</span> doctors available in Coimbatore
        </div>
        <div className="book-appointments-with-container">
          <p className="book-appointments-with">{`Book appointments with minimum wait time and &  verified doctor details`}</p>
        </div>
              <div className="doctors-container">
        {DoctorData.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-details">
              <div className="dentist">{doctor.designation}</div>
              <div className="consultation-fee-at">
                ₹{doctor.consultationFee} Consultation fee at clinic
              </div>
              <div className="patient-stories">{doctor.patientStories} patient stories</div>
              <div className="race-coursecoimbatore-container">
                <span className="race-coursecoimbatore">{doctor.location}</span>
                <span className="kongu-nadu-hospitals"> - {doctor.hospitals}</span>
              </div>
              <div className="years-of-overall">{doctor.experience} years of overall experience</div>
            </div>
            <div className="doctor-image">
              <img className="image-22-icon2" alt="" src={doctor.img_src} />
              <div className="dr-t-sivasankari">{doctor.name}</div>
            </div>
            <div className="calendar-section">
              <img className="calendar-icon" alt="" src="/calendar.svg" />
              <div className="available-today">Available Today</div>
            </div>
            <div className="actions">
              <div className="appointment-scheduling-child11" onClick={onRectangle12Click} />
              <div className="rectangle-parent23" onClick={openCalendarPopup}>
                <div className="component-child1" />
                <div className="book-appointment">Book Appointment</div>
                <div className="no-booking-fee">No Booking Fee</div>
              </div>
              <div className="video-consult1">Video Consult</div>
              <div className="rectangle-parent24">
                <div className="group-child20" />
                <div className="div1">100%</div>
                <img className="vector-icon8" alt="" src="/vector8.svg" />
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
      {isCalendarPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendarPopup}
        >
          <CalendarPopup onClose={closeCalendarPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AppointmentScheduling;