import { useState, useCallback } from "react";
import Chatbot from "../components/Chatbot";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./UserPerspective.css";
const UserPerspective = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const navigate = useNavigate();

  const openChatbot = useCallback(() => {
    setChatbotOpen(true);
  }, []);

  const closeChatbot = useCallback(() => {
    setChatbotOpen(false);
  }, []);

  const onForumContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onRecommendContainerClick = useCallback(() => {
    navigate("/appointment-search");
  }, [navigate]);

  const onHEalthRecordContainerClick = useCallback(() => {
    navigate("/health-record-management");
  }, [navigate]);

  const onTrackerContainerClick = useCallback(() => {
    navigate("/personal-health-tracker");
  }, [navigate]);

  const onRewardContainerClick = useCallback(() => {
    navigate("/wellness-program");
  }, [navigate]);

  const onImageRemovebgPreview1Click = useCallback(() => {
    navigate("/ngos");
  }, [navigate]);

  const onHealthcartContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onImage116Click = useCallback(() => {
    navigate("/appointment-search");
  }, [navigate]);

  const onOnlineConsultingContainerClick = useCallback(() => {
    navigate("/video-schedule");
  }, [navigate]);

  const onImage20IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="user-perspective">
        <div className="user-perspective-child" />
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
                  <img className="icontwitter1" alt="" src="/icontwitter.svg" />
                  <img className="iconlink1" alt="" src="/iconlink.svg" />
                  <img
                    className="icontwitter1"
                    alt=""
                    src="/iconlinkedin.svg"
                  />
                  <img
                    className="icontwitter1"
                    alt=""
                    src="/iconfacebook.svg"
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
        <div className="search-bar">
          <div className="search-bar-child" />
          <img className="search-icon" alt="" src="/search.svg" />
          <div className="search-bar-item" />
          <img className="pin-icon" alt="" src="/pin.svg" />
          <i className="cbe">CBE</i>
        </div>
        <img className="user-perspective-item" alt="" src="/rectangle-81.svg" />
        <div className="chatbot2" onClick={openChatbot}>
          <div className="chatbot-child1" />
          <img className="image-13-icon2" alt="" src="/image-13@2x.png" />
        </div>
        <div className="forum1" onClick={onForumContainerClick}>
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <div className="forum-item" />
          <b className="online-consulting">Healthconnect Community</b>
          <i className="connect-with-doctor-container">
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">{`Connect with the forum `}</p>
          </i>
        </div>
        <div className="recommend" onClick={onRecommendContainerClick}>
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <div className="image-7" />
          <div className="forum-item" />
          <b className="online-consulting">Doctor Recommend</b>
          <i className="connect-with-doctor-container">
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">Get personalized recommendation</p>
          </i>
        </div>
        <img className="image-119-icon" alt="" src="/image-119@2x.png" />
        <div className="health-record" onClick={onHEalthRecordContainerClick}>
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <div className="forum-item" />
          <b className="online-consulting">
            <p className="blank-line">Health Record</p>
          </b>
          <i className="connect-with-doctor-container">
            <p className="blank-line">
              Maintain all you medical history details here
            </p>
          </i>
        </div>
        <img className="image-122-icon" alt="" src="/image-122@2x.png" />
        <img className="image-117-icon" alt="" src="/image-117@2x.png" />
        <div className="prescription-mangae">
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <div className="image-7" />
          <div className="forum-item" />
          <b className="online-consulting">Prescription Manager</b>
          <i className="connect-with-doctor-container">
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">{`Manage your reg medical doses `}</p>
          </i>
        </div>
        <img className="image-118-icon" alt="" src="/image-118@2x.png" />
        <div className="tracker" onClick={onTrackerContainerClick}>
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <div className="forum-item" />
          <b className="online-consulting">Personal Health Tracker</b>
          <i className="connect-with-doctor-container">
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">Your personal Health program</p>
            <p className="blank-line">&nbsp;</p>
          </i>
        </div>
        <img className="image-120-icon" alt="" src="/image-120@2x.png" />
        <div className="reward" onClick={onRewardContainerClick}>
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <div className="forum-item" />
          <b className="online-consulting">Wellness Reward Program</b>
          <i className="connect-with-doctor-container">
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">{`Earn reward points `}</p>
          </i>
        </div>
        <img className="image-124-icon" alt="" src="/image-124@2x.png" />
        <div className="ngo">
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <div className="forum-item" />
          <b className="online-consulting">NGO</b>
          <i className="connect-with-doctor-container">Need NGO’s help ?</i>
        </div>
        <img
          className="image-removebg-preview-1-icon"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
          onClick={onImageRemovebgPreview1Click}
        />
        <div className="healthcart" onClick={onHealthcartContainerClick}>
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <div className="forum-item" />
          <b className="online-consulting">Healthcart</b>
          <i className="connect-with-doctor-container">
            Buy your fav health products
          </i>
        </div>
        <img className="image-129-icon" alt="" src="/image-129@2x.png" />
        <div className="appointment1">
          <div className="forum-child" />
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <div className="forum-item" />
          <b className="online-consulting">Book Appointment</b>
          <i className="connect-with-doctor-container">
            <p className="blank-line">Book your desired slot for the doctor</p>
          </i>
        </div>
        <img
          className="image-116-icon"
          alt=""
          src="/image-116@2x.png"
          onClick={onImage116Click}
        />
        <div
          className="online-consulting9"
          onClick={onOnlineConsultingContainerClick}
        >
          <div className="forum-child" />
          <img className="image-8-icon9" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon7" alt="" src="/image-7@2x.png" />
          <div className="forum-item" />
          <b className="online-consulting">
            <p className="blank-line">Online Consulting</p>
          </b>
          <i className="connect-with-doctor2">Connect with doctor instantly</i>
        </div>
        <div className="navbar1">
          <div className="navbar-child1" />
          <div className="navbar-child2" />
          <b className="community-forum1">
            <p className="blank-line">Community</p>
            <p className="blank-line">Forum</p>
          </b>
          <img className="image-11-icon1" alt="" src="/image-11@2x.png" />
          <img className="image-10-icon1" alt="" src="/image-10@2x.png" />
          <b className="schedule-appointment1">
            <p className="blank-line">Schedule</p>
            <p className="blank-line">Appointment</p>
          </b>
          <b className="support-ngos1">
            <p className="blank-line">Support</p>
            <p className="blank-line">NGO’s</p>
          </b>
          <img className="image-12-icon2" alt="" src="/image-12@2x.png" />
          <b className="personal-health-tracker-container1">
            <p className="blank-line">Personal</p>
            <p className="blank-line">{`Health Tracker `}</p>
          </b>
          <img className="image-15-icon2" alt="" src="/image-15@2x.png" />
          <b className="your-health-record-container1">
            <p className="blank-line">Your Health</p>
            <p className="blank-line">Record</p>
          </b>
          <img className="image-16-icon1" alt="" src="/image-16@2x.png" />
          <b className="health-cart1">Health cart</b>
          <img className="image-17-icon2" alt="" src="/image-17@2x.png" />
          <b className="wellness-reward-prgram1">Wellness Reward Prgram</b>
          <img
            className="image-20-icon2"
            alt=""
            src="/image-20@2x.png"
            onClick={onImage20IconClick}
          />
          <b className="loginsignup1">Login/Signup</b>
          <img className="image-18-icon2" alt="" src="/image-18@2x.png" />
          <b className="rewards1">Rewards</b>
          <b className="experience1">Experience</b>
          <img className="image-19-icon2" alt="" src="/image-19@2x.png" />
          <div className="navbar-child3" />
          <img
            className="healthcare-low-resolution-logo-icon1"
            alt=""
            src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          />
          <img className="image-9-icon2" alt="" src="/image-9@2x.png" />
        </div>
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

export default UserPerspective;
