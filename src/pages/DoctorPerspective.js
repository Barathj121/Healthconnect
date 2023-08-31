import { useState, useCallback } from "react";
import Chatbot from "../components/Chatbot";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DoctorPerspective.css";
const DoctorPerspective = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const navigate = useNavigate();

  const onImage20IconClick = useCallback(() => {
    navigate("/doctor-profile-page");
  }, [navigate]);

  const openChatbot = useCallback(() => {
    setChatbotOpen(true);
  }, []);

  const closeChatbot = useCallback(() => {
    setChatbotOpen(false);
  }, []);

  const onHealthcartContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <>
      <div className="doctor-perspective">
        <div className="footer39">
          <div className="footer40" />
          <div className="footer-9-dark13">
            <div className="background13" />
            <div className="footer-ui13">
              <div className="poltica-de-privacidad-parent10">
                <div className="poltica-de-privacidad13">
                  Política de Privacidad
                </div>
                <div className="poltica-de-privacidad13">
                  Términos y Condiciones
                </div>
                <div className="poltica-de-privacidad13">
                  Código de Conducta
                </div>
              </div>
              <div className="footer41">
                <div className="icontwitter-parent11">
                  <img
                    className="icontwitter13"
                    alt=""
                    src="/icontwitter.svg"
                  />
                  <img className="iconlink13" alt="" src="/iconlink8.svg" />
                  <img
                    className="icontwitter13"
                    alt=""
                    src="/iconlinkedin12.svg"
                  />
                  <img
                    className="icontwitter13"
                    alt=""
                    src="/iconfacebook4.svg"
                  />
                </div>
              </div>
              <div className="divider13" />
              <div className="empresa26">
                <b className="empresa27">Empresa</b>
                <div className="sobre-nosotros13">Sobre Nosotros</div>
                <div className="soluciones13">Soluciones</div>
                <div className="insights13">Insights</div>
              </div>
              <div className="categoras26">
                <b className="categoras27">Categorías</b>
                <div className="poltica-de-privacidad13">Contratar Talento</div>
                <div className="poltica-de-privacidad13">
                  Desarrollar Talento
                </div>
                <div className="poltica-de-privacidad13">
                  Herramientas de Gamificación
                </div>
              </div>
              <div className="competencias-digitales-parent11">
                <div className="poltica-de-privacidad13">{`Competencias Digitales `}</div>
                <div className="poltica-de-privacidad13">
                  Competencias Comerciales
                </div>
                <div className="poltica-de-privacidad13">Liderazgo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-bar6">
          <div className="search-bar-child10" />
          <img className="search-icon7" alt="" src="/search.svg" />
          <div className="search-bar-child11" />
          <img className="pin-icon6" alt="" src="/pin.svg" />
          <i className="cbe6">CBE</i>
        </div>
        <div className="navbar15">
          <div className="navbar-child34" />
          <div className="navbar-child35" />
          <b className="community-forum15">
            <p className="patient-health-record">Community</p>
            <p className="patient-health-record">Forum</p>
          </b>
          <img className="image-11-icon15" alt="" src="/image-11@2x.png" />
          <img className="image-10-icon16" alt="" src="/image-10@2x.png" />
          <b className="schedule-appointment15">
            <p className="patient-health-record">Schedule</p>
            <p className="patient-health-record">Appointment</p>
          </b>
          <b className="support-ngos15">
            <p className="patient-health-record">Support</p>
            <p className="patient-health-record">NGO’s</p>
          </b>
          <img className="image-12-icon17" alt="" src="/image-12@2x.png" />
          <b className="personal-health-tracker-container15">
            <p className="patient-health-record">Personal</p>
            <p className="patient-health-record">{`Health Tracker `}</p>
          </b>
          <img className="image-15-icon16" alt="" src="/image-15@2x.png" />
          <b className="your-health-record-container15">
            <p className="patient-health-record">Your Health</p>
            <p className="patient-health-record">Record</p>
          </b>
          <img className="image-16-icon16" alt="" src="/image-16@2x.png" />
          <b className="health-cart15">Health cart</b>
          <img className="image-17-icon16" alt="" src="/image-17@2x.png" />
          <b className="wellness-reward-prgram15">Wellness Reward Prgram</b>
          <img
            className="image-20-icon18"
            alt=""
            src="/image-20@2x.png"
            onClick={onImage20IconClick}
          />
          <b className="loginsignup15">Login/Signup</b>
          <img className="image-18-icon17" alt="" src="/image-18@2x.png" />
          <b className="rewards15">Rewards</b>
          <b className="experience16">Experience</b>
          <img className="image-19-icon17" alt="" src="/image-19@2x.png" />
          <div className="navbar-child36" />
          <img
            className="healthcare-low-resolution-logo-icon15"
            alt=""
            src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          />
          <img className="image-9-icon15" alt="" src="/image-9@2x.png" />
        </div>
        <img className="image-9-icon16" alt="" src="/image-9@2x.png" />
        <img
          className="doctor-perspective-child"
          alt=""
          src="/rectangle-84.svg"
        />
        <div className="doctor-perspective-item" />
        <div className="chatbot7" onClick={openChatbot}>
          <div className="chatbot-child6" />
          <img className="image-13-icon8" alt="" src="/image-13@2x.png" />
        </div>
        <div className="forum17">
          <div className="forum-inner" />
          <img className="image-8-icon19" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon16" alt="" src="/image-7@2x.png" />
          <div className="forum-child1" />
          <b className="online-consulting20">Healthconnect Community</b>
          <i className="connect-with-doctor-container7">
            <p className="patient-health-record">&nbsp;</p>
            <p className="patient-health-record">{`Connect with the forum `}</p>
          </i>
        </div>
        <div className="health-record2">
          <div className="forum-inner" />
          <img className="image-8-icon19" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon16" alt="" src="/image-7@2x.png" />
          <div className="forum-child1" />
          <b className="online-consulting20">
            <p className="patient-health-record">Patient Health Record</p>
          </b>
          <i className="connect-with-doctor-container7">
            <p className="patient-health-record">&nbsp;</p>
            <p className="patient-health-record">Check your patients’ record</p>
          </i>
        </div>
        <div className="prescription-mangae1">
          <div className="forum-inner" />
          <img className="image-8-icon19" alt="" src="/image-8@2x.png" />
          <div className="image-72" />
          <div className="forum-child1" />
          <b className="online-consulting20">Prescription Manager</b>
          <i className="connect-with-doctor-container7">
            <p className="patient-health-record">&nbsp;</p>
            <p className="patient-health-record">Check patients’ dosages</p>
          </i>
        </div>
        <div className="tracker1">
          <div className="forum-inner" />
          <img className="image-8-icon19" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon16" alt="" src="/image-7@2x.png" />
          <div className="forum-child1" />
          <b className="online-consulting20">Personal Health Tracker</b>
          <i className="connect-with-doctor-container7">
            <p className="patient-health-record">&nbsp;</p>
            <p className="patient-health-record">
              Your personal Health program
            </p>
            <p className="patient-health-record">&nbsp;</p>
          </i>
        </div>
        <div className="reward1">
          <div className="forum-inner" />
          <img className="image-8-icon19" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon16" alt="" src="/image-7@2x.png" />
          <div className="forum-child1" />
          <b className="online-consulting20">Wellness Reward Program</b>
          <i className="connect-with-doctor-container7">
            <p className="patient-health-record">&nbsp;</p>
            <p className="patient-health-record">{`Grant points/badges `}</p>
          </i>
        </div>
        <div className="ngo1">
          <div className="forum-inner" />
          <img className="image-8-icon19" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon16" alt="" src="/image-7@2x.png" />
          <div className="forum-child1" />
          <b className="online-consulting20">NGO</b>
          <i className="connect-with-doctor-container7">Need NGO’s help ?</i>
        </div>
        <div className="healthcart1" onClick={onHealthcartContainerClick}>
          <div className="forum-inner" />
          <img className="image-8-icon19" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon16" alt="" src="/image-7@2x.png" />
          <div className="forum-child1" />
          <b className="online-consulting20">Healthcart</b>
          <i className="connect-with-doctor-container7">
            Buy your fav health products
          </i>
        </div>
        <img className="image-129-icon1" alt="" src="/image-129@2x.png" />
        <div className="appointment17">
          <div className="forum-inner" />
          <img className="image-8-icon19" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon16" alt="" src="/image-7@2x.png" />
          <div className="forum-child1" />
          <b className="online-consulting20">Appointments</b>
          <i className="connect-with-doctor-container7">{`See your appointments `}</i>
        </div>
        <div className="online-consulting28">
          <div className="forum-inner" />
          <img className="image-8-icon27" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon23" alt="" src="/image-7@2x.png" />
          <div className="forum-child1" />
          <b className="online-consulting20">
            <p className="patient-health-record">Online Consulting</p>
          </b>
          <i className="connect-with-doctor14">See your patients’ request</i>
        </div>
        <img className="image-123-icon" alt="" src="/image-1231@2x.png" />
        <img className="image-117-icon1" alt="" src="/image-117@2x.png" />
        <img className="image-118-icon1" alt="" src="/image-118@2x.png" />
        <img className="image-116-icon1" alt="" src="/image-116@2x.png" />
        <img className="image-120-icon1" alt="" src="/image-120@2x.png" />
        <img className="image-122-icon1" alt="" src="/image-1221@2x.png" />
        <img className="image-124-icon1" alt="" src="/image-1241@2x.png" />
        <img
          className="image-removebg-preview-1-icon2"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
        />
      </div>
      {isChatbotOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChatbot}
        >
          <Chatbot onClose={closeChatbot} />
        </PortalPopup>
      )}
    </>
  );
};

export default DoctorPerspective;
