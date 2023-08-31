import { useState, useCallback } from "react";
import CautionMessage from "../components/CautionMessage";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./EPrescriptionManagement.css";
const EPrescriptionManagement = () => {
  const [isCautionMessageOpen, setCautionMessageOpen] = useState(false);
  const navigate = useNavigate();

  const onImage20IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  const openCautionMessage = useCallback(() => {
    setCautionMessageOpen(true);
  }, []);

  const closeCautionMessage = useCallback(() => {
    setCautionMessageOpen(false);
  }, []);

  return (
    <>
      <div className="e-prescription-management">
        <div className="navbar4">
          <div className="navbar-child8" />
          <div className="navbar-child9" />
          <b className="community-forum4">
            <p className="community5">Community</p>
            <p className="community5">Forum</p>
          </b>
          <img className="image-11-icon4" alt="" src="/image-11@2x.png" />
          <img className="image-10-icon4" alt="" src="/image-10@2x.png" />
          <b className="schedule-appointment4">
            <p className="community5">Schedule</p>
            <p className="community5">Appointment</p>
          </b>
          <b className="support-ngos4">
            <p className="community5">Support</p>
            <p className="community5">NGO’s</p>
          </b>
          <img className="image-12-icon5" alt="" src="/image-12@2x.png" />
          <b className="personal-health-tracker-container4">
            <p className="community5">Personal</p>
            <p className="community5">{`Health Tracker `}</p>
          </b>
          <img className="image-15-icon5" alt="" src="/image-15@2x.png" />
          <b className="your-health-record-container4">
            <p className="community5">Your Health</p>
            <p className="community5">Record</p>
          </b>
          <img className="image-16-icon4" alt="" src="/image-16@2x.png" />
          <b className="health-cart4">Health cart</b>
          <img className="image-17-icon5" alt="" src="/image-17@2x.png" />
          <b className="wellness-reward-prgram4">Wellness Reward Prgram</b>
          <img
            className="image-20-icon5"
            alt=""
            src="/image-20@2x.png"
            onClick={onImage20IconClick}
          />
          <b className="loginsignup4">Login/Signup</b>
          <img className="image-18-icon5" alt="" src="/image-18@2x.png" />
          <b className="rewards4">Rewards</b>
          <b className="experience4">Experience</b>
          <img className="image-19-icon5" alt="" src="/image-19@2x.png" />
          <div className="navbar-child10" onClick={onRectangle2Click} />
          <img
            className="healthcare-low-resolution-logo-icon4"
            alt=""
            src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          />
          <img className="image-9-icon4" alt="" src="/image-9@2x.png" />
        </div>
        <div className="footer9">
          <div className="footer10" />
          <div className="footer-9-dark3">
            <div className="background3" />
            <div className="footer-ui3">
              <div className="frame-div">
                <div className="poltica-de-privacidad3">
                  Política de Privacidad
                </div>
                <div className="poltica-de-privacidad3">
                  Términos y Condiciones
                </div>
                <div className="poltica-de-privacidad3">Código de Conducta</div>
              </div>
              <div className="footer11">
                <div className="icontwitter-parent1">
                  <img
                    className="icontwitter3"
                    alt=""
                    src="/icontwitter2.svg"
                  />
                  <img className="iconlink3" alt="" src="/iconlink3.svg" />
                  <img
                    className="icontwitter3"
                    alt=""
                    src="/iconlinkedin3.svg"
                  />
                  <img
                    className="icontwitter3"
                    alt=""
                    src="/iconfacebook3.svg"
                  />
                </div>
              </div>
              <div className="divider3" />
              <div className="empresa6">
                <b className="empresa7">Empresa</b>
                <div className="sobre-nosotros3">Sobre Nosotros</div>
                <div className="soluciones3">Soluciones</div>
                <div className="insights3">Insights</div>
              </div>
              <div className="categoras6">
                <b className="categoras7">Categorías</b>
                <div className="poltica-de-privacidad3">Contratar Talento</div>
                <div className="poltica-de-privacidad3">
                  Desarrollar Talento
                </div>
                <div className="poltica-de-privacidad3">
                  Herramientas de Gamificación
                </div>
              </div>
              <div className="competencias-digitales-parent1">
                <div className="poltica-de-privacidad3">{`Competencias Digitales `}</div>
                <div className="poltica-de-privacidad3">
                  Competencias Comerciales
                </div>
                <div className="poltica-de-privacidad3">Liderazgo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="e-prescription-management-child" />
        <div className="e-prescription-management-item" />
        <b className="profile">Profile</b>
        <b className="clinical-record">Clinical Record</b>
        <b className="medications">Medications</b>
        <b className="medications1">Medications</b>
        <b className="documents">Documents</b>
        <b className="insurance">Insurance</b>
        <img
          className="e-prescription-management-inner"
          alt=""
          src="/rectangle-10385@2x.png"
        />
        <img
          className="e-prescription-management-child1"
          alt=""
          src="/rectangle-10387@2x.png"
        />
        <img
          className="e-prescription-management-child2"
          alt=""
          src="/rectangle-10388@2x.png"
        />
        <img
          className="e-prescription-management-child3"
          alt=""
          src="/rectangle-10389@2x.png"
        />
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <b className="duration">Duration</b>
        <b className="progress">Progress</b>
        <img
          className="e-prescription-management-child4"
          alt=""
          src="/rectangle-10394.svg"
        />
        <img
          className="e-prescription-management-child5"
          alt=""
          src="/rectangle-10391.svg"
        />
        <img
          className="e-prescription-management-child6"
          alt=""
          src="/rectangle-10395.svg"
        />
        <img
          className="e-prescription-management-child7"
          alt=""
          src="/rectangle-10391.svg"
        />
        <img
          className="e-prescription-management-child8"
          alt=""
          src="/rectangle-10396.svg"
        />
        <img
          className="e-prescription-management-child9"
          alt=""
          src="/rectangle-10391.svg"
        />
        <img
          className="e-prescription-management-child10"
          alt=""
          src="/rectangle-10397.svg"
        />
        <img
          className="e-prescription-management-child11"
          alt=""
          src="/rectangle-10398@2x.png"
        />
        <div className="days">Days</div>
        <div className="e-prescription-management-child12" />
        <img className="image-134-icon" alt="" src="/image-134@2x.png" />
        <img className="image-135-icon" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon" alt="" src="/image-137@2x.png" />
        <img className="image-138-icon" alt="" src="/image-138@2x.png" />
        <img className="image-139-icon" alt="" src="/image-139@2x.png" />
        <img className="image-140-icon" alt="" src="/image-140@2x.png" />
        <b className="start-date-18092022">Start Date: 18/09/2022</b>
        <div className="days1">Days</div>
        <div className="days2">Days</div>
        <div className="days3">Days</div>
        <b className="start-date-2102022">Start Date: 2/10/2022</b>
        <b className="start-date-25102022">Start Date: 25/10/2022</b>
        <b className="start-date-30092022">Start date: 30/09/2022</b>
        <img className="vector-icon3" alt="" src="/vector3.svg" />
        <img className="vector-icon4" alt="" src="/vector4.svg" />
        <div className="search-bar2">
          <div className="search-bar-child2" />
          <img className="search-icon2" alt="" src="/search.svg" />
          <div className="search-bar-child3" />
          <img className="pin-icon2" alt="" src="/pin.svg" />
          <i className="cbe2">CBE</i>
        </div>
        <img
          className="alert-octagon-icon"
          alt=""
          src="/alertoctagon.svg"
          onClick={openCautionMessage}
        />
      </div>
      {isCautionMessageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCautionMessage}
        >
          <CautionMessage onClose={closeCautionMessage} />
        </PortalPopup>
      )}
    </>
  );
};

export default EPrescriptionManagement;
