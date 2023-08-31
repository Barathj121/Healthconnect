import { useState, useCallback, useEffect } from "react";
import Visits from "../components/Visits";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./HealthRecordManagement.css";
import { collection,getDocs ,query,where} from "firebase/firestore";
import { db } from "../config/config";
import { auth } from "../config/config";
const HealthRecordManagement = () => {
  const [isVisitsOpen, setVisitsOpen] = useState(false);
  const navigate = useNavigate();

  const onImage20IconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  const openVisits = useCallback(() => {
    setVisitsOpen(true);
  }, []);

  const closeVisits = useCallback(() => {
    setVisitsOpen(false);
  }, []);

  const usercollectionref=collection(db,"Users");
  const [userData, setUserData] = useState(null);
  const fetchuserdata = async () => {
    if (auth?.currentUser?.uid) {
      const q = query(usercollectionref, where("UserId", "==", auth?.currentUser?.uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setUserData(data);
    }
  };
  
  useEffect(() => {
    if (auth?.currentUser?.uid) {
      fetchuserdata();
    }
  }, [auth?.currentUser?.uid]);
  
  // Assuming you have another useEffect to listen for changes in usercollectionref
  useEffect(() => {
    // Handle changes in usercollectionref here
  }, [usercollectionref]);

  const userName=userData?.[0]?.Name || "";
  const userprofile=userData?.[0]?.dp || "";
  const userage=userData?.[0]?.Age || "";
  const userLoc=userData?.[0]?.City;
  const epts=userData?.[0]?.Diagnoses ;
  const rpts=userData?.[0]?.DOB;
  const cid=userData?.[0]?.CommunityUser;
  const med=userData?.[0]?.no_of_prescriptions;
  const usersex=userData?.[0]?.sex;


  return (
    <>
      <div className="health-record-management">
        <div className="navbar1">
          <div className="rectangle-div" />
          <div className="navbar-child1" />
          <b className="community-forum1">
            <p className="community1">Community</p>
            <p className="community1">Forum</p>
          </b>
          <img className="image-11-icon1" alt="" src="/image-11@2x.png" />
          <img className="image-10-icon1" alt="" src="/image-10@2x.png" />
          <b className="schedule-appointment1">
            <p className="community1">Schedule</p>
            <p className="community1">Appointment</p>
          </b>
          <b className="support-ngos1">
            <p className="community1">Support</p>
            <p className="community1">NGO’s</p>
          </b>
          <img className="image-12-icon1" alt="" src="/image-12@2x.png" />
          <b className="personal-health-tracker-container1">
            <p className="community1">Personal</p>
            <p className="community1">{`Health Tracker `}</p>
          </b>
          <img className="image-15-icon1" alt="" src="/image-15@2x.png" />
          <b className="your-health-record-container1">
            <p className="community1">Your Health</p>
            <p className="community1">Record</p>
          </b>
          <img className="image-16-icon1" alt="" src="/image-16@2x.png" />
          <b className="health-cart1">Health cart</b>
          <img className="image-17-icon1" alt="" src="/image-17@2x.png" />
          <b className="wellness-reward-prgram1">Wellness Reward Prgram</b>
          <img
            className="image-20-icon1"
            alt=""
            src="/image-20@2x.png"
            onClick={onImage20IconClick}
          />
          <b className="loginsignup1">Login/Signup</b>
          <img className="image-18-icon1" alt="" src="/image-18@2x.png" />
          <b className="rewards1">Rewards</b>
          <b className="experience1">Experience</b>
          <img className="image-19-icon1" alt="" src="/image-19@2x.png" />
          <div className="navbar-child2" onClick={onRectangle2Click} />
          <img
            className="healthcare-low-resolution-logo-icon1"
            alt=""
            src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          />
          <img className="image-9-icon1" alt="" src="/image-9@2x.png" />
        </div>
        <div className="footer3">
          <div className="footer4" />
          <div className="footer-9-dark1">
            <div className="background1" />
            <div className="footer-ui1">
              <div className="poltica-de-privacidad-group">
                <div className="poltica-de-privacidad1">
                  Política de Privacidad
                </div>
                <div className="poltica-de-privacidad1">
                  Términos y Condiciones
                </div>
                <div className="poltica-de-privacidad1">Código de Conducta</div>
              </div>
              <div className="footer5">
                <div className="icontwitter-group">
                  <img
                    className="icontwitter1"
                    alt=""
                    src="/icontwitter2.svg"
                  />
                  <img className="iconlink1" alt="" src="/iconlink4.svg" />
                  <img
                    className="icontwitter1"
                    alt=""
                    src="/iconlinkedin4.svg"
                  />
                  <img
                    className="icontwitter1"
                    alt=""
                    src="/iconfacebook4.svg"
                  />
                </div>
              </div>
              <div className="divider1" />
              <div className="empresa2">
                <b className="empresa3">Empresa</b>
                <div className="sobre-nosotros1">Sobre Nosotros</div>
                <div className="soluciones1">Soluciones</div>
                <div className="insights1">Insights</div>
              </div>
              <div className="categoras2">
                <b className="categoras3">Categorías</b>
                <div className="poltica-de-privacidad1">Contratar Talento</div>
                <div className="poltica-de-privacidad1">
                  Desarrollar Talento
                </div>
                <div className="poltica-de-privacidad1">
                  Herramientas de Gamificación
                </div>
              </div>
              <div className="competencias-digitales-group">
                <div className="poltica-de-privacidad1">{`Competencias Digitales `}</div>
                <div className="poltica-de-privacidad1">
                  Competencias Comerciales
                </div>
                <div className="poltica-de-privacidad1">Liderazgo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="health-record-management-child" />
        <div className="health-record-management-item" />
        <div className="health-record-management-inner" />
        <b className="overview">Overview</b>
        <b className="progress-plan">{`Progress & Plan`}</b>
        <div className="health-record-management-child1" onClick={openVisits} />
        <b className="visits1">Visits</b>
        <b className="documents">Documents</b>
        <img className="image-144-icon" alt="" src="/image-144@2x.png" />
        <img className="image-146-icon" alt="" src="/image-146@2x.png" />
        <img className="image-147-icon" alt="" src="/image-147@2x.png" />
        <img className="image-148-icon" alt="" src="/image-148@2x.png" />
        <img className="image-149-icon" alt="" src="/image-149@2x.png" />
        <div className="health-record-management-child2" />
        <input type="file" className="upload-record" />
        <b className="download-record">upload Record</b>
        <div className="health-record-management-child3" />
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <b className="jennifer-parkins">{userName||"None"}</b>
        <div className="female">{usersex||"None"}</div>
        <b className="general-info">General info</b>
        <div className="date-of-birth">Date of birth {rpts||"None"} ({userage||"null"} y.o.)</div>
        <div className="location-budapest-hungary">
          Location {userLoc||"None"}
        </div>
        <div className="id">Id</div>
        <b className="disorders">Disorders</b>
        <div className="speech-dysarthria-apraxia">
          Speech Dysarthria Apraxia
        </div>
        <div className="cognitive-dementia-alzheimer">
          Cognitive Dementia Alzheimer
        </div>
        <div className="physical-arthritis">Physical Arthritis</div>
        <div className="neurological-wrapper">
          <div className="neurological">Neurological</div>
        </div>
        <div className="parent">
          <div className="div">3260-96304953</div>
          <img className="copy-icon" alt="" src="/copy.svg" />
        </div>
        <b className="recent-diagnoses">Recent Diagnoses</b>
        <img className="image-160-icon" alt="" src="/image-160@2x.png" />
        <b className="stroke">Stroke</b>
        <div className="month-ago">1 month ago</div>
        <img className="image-161-icon" alt="" src="/image-161@2x.png" />
        <img className="image-162-icon" alt="" src="/image-162@2x.png" />
        <b className="pneumonia">Pneumonia</b>
        <b className="covid-19">Covid 19</b>
        <div className="months-ago">3 months ago</div>
        <div className="months-ago1">3.5 months ago</div>
      </div>
      {isVisitsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeVisits}
        >
          <Visits onClose={closeVisits} />
        </PortalPopup>
      )}
    </>
  );
};

export default HealthRecordManagement;
