import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OnlinceChatInterface.css";
const OnlinceChatInterface = () => {
  const navigate = useNavigate();

  const onHealthcareLowResolutionLogoImageClick = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  return (
    <div className="onlince-chat-interface">
      <div className="navbar3">
        <div className="navbar-child6" />
        <div className="navbar-child7" />
        <b className="community-forum3">
          <p className="after-the-call">Community</p>
          <p className="after-the-call">Forum</p>
        </b>
        <img className="image-11-icon3" alt="" src="/image-11@2x.png" />
        <img className="image-10-icon3" alt="" src="/image-10@2x.png" />
        <b className="schedule-appointment3">
          <p className="after-the-call">Schedule</p>
          <p className="after-the-call">Appointment</p>
        </b>
        <b className="support-ngos3">
          <p className="after-the-call">Support</p>
          <p className="after-the-call">NGO’s</p>
        </b>
        <img className="image-12-icon4" alt="" src="/image-12@2x.png" />
        <b className="personal-health-tracker-container3">
          <p className="after-the-call">Personal</p>
          <p className="after-the-call">{`Health Tracker `}</p>
        </b>
        <img className="image-15-icon4" alt="" src="/image-15@2x.png" />
        <b className="your-health-record-container3">
          <p className="after-the-call">Your Health</p>
          <p className="after-the-call">Record</p>
        </b>
        <img className="image-16-icon3" alt="" src="/image-16@2x.png" />
        <b className="health-cart3">Health cart</b>
        <img className="image-17-icon4" alt="" src="/image-17@2x.png" />
        <b className="wellness-reward-prgram3">Wellness Reward Prgram</b>
        <img className="image-20-icon4" alt="" src="/image-20@2x.png" />
        <b className="loginsignup3">Login/Signup</b>
        <img className="image-18-icon4" alt="" src="/image-18@2x.png" />
        <b className="rewards3">Rewards</b>
        <b className="experience3">Experience</b>
        <img className="image-19-icon4" alt="" src="/image-19@2x.png" />
        <img
          className="healthcare-low-resolution-logo-icon3"
          alt=""
          src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          onClick={onHealthcareLowResolutionLogoImageClick}
        />
      </div>
      <img className="image-9-icon3" alt="" src="/image-9@2x.png" />
      <div className="onlince-chat-interface-child" />
      <img
        className="portrait-doctor-video-call-vir-icon"
        alt=""
        src="/portraitdoctorvideocallvirtualappointmentwithpatient-5846615764-1@2x.png"
      />
      <div className="onlince-chat-interface-item" />
      <img
        className="onlince-chat-interface-inner"
        alt=""
        src="/vector-1.svg"
      />
      <div className="onlince-chat-interface-child1" />
      <img className="image-102-icon" alt="" src="/image-102@2x.png" />
      <img className="image-104-icon" alt="" src="/image-104@2x.png" />
      <img className="image-105-icon" alt="" src="/image-105@2x.png" />
      <div className="onlince-chat-interface-child2" />
      <b className="chat-window">CHAT WINDOW</b>
      <img className="image-106-icon" alt="" src="/image-106@2x.png" />
      <img className="image-107-icon" alt="" src="/image-107@2x.png" />
      <img className="image-108-icon" alt="" src="/image-108@2x.png" />
      <b className="in-call-with">IN CALL WITH DR.ROBERT</b>
      <img className="image-109-icon" alt="" src="/image-109@2x.png" />
      <div className="onlince-chat-interface-child3" />
      <div className="onlince-chat-interface-child4" />
      <img className="rectangle-icon" alt="" src="/rectangle-10380.svg" />
      <div className="mr-sajith-pls">{`Mr. Sajith pls do share your reports `}</div>
      <div className="after-the-call-container">
        <p className="after-the-call">{`After the call ends  i will be sending the prescription and buy the medicines `}</p>
        <p className="after-the-call">according to it</p>
      </div>
      <div className="ok-sir">Ok sir</div>
      <div className="onlince-chat-interface-child5" />
      <div className="please-type-here">{`Please type here `}</div>
      <img
        className="onlince-chat-interface-child6"
        alt=""
        src="/rectangle-103801.svg"
      />
      <div className="ok-sir1">Ok sir</div>
      <img className="image-110-icon" alt="" src="/image-110@2x.png" />
      <div className="onlince-chat-interface-child7" />
      <div className="upload">UPLOAD</div>
      <img className="image-111-icon" alt="" src="/image-111@2x.png" />
      <img className="image-112-icon" alt="" src="/image-112@2x.png" />
      <img className="image-113-icon" alt="" src="/image-113@2x.png" />
      <img className="image-114-icon" alt="" src="/image-114@2x.png" />
      <img className="image-115-icon" alt="" src="/image-115@2x.png" />
      <div className="footer6">
        <div className="footer7" />
        <div className="footer-9-dark2">
          <div className="background2" />
          <div className="footer-ui2">
            <div className="poltica-de-privacidad-container">
              <div className="poltica-de-privacidad2">
                Política de Privacidad
              </div>
              <div className="poltica-de-privacidad2">
                Términos y Condiciones
              </div>
              <div className="poltica-de-privacidad2">Código de Conducta</div>
            </div>
            <div className="footer8">
              <div className="icontwitter-container">
                <img className="icontwitter2" alt="" src="/icontwitter2.svg" />
                <img className="iconlink2" alt="" src="/iconlink2.svg" />
                <img className="icontwitter2" alt="" src="/iconlinkedin2.svg" />
                <img className="icontwitter2" alt="" src="/iconfacebook2.svg" />
              </div>
            </div>
            <div className="divider2" />
            <div className="empresa4">
              <b className="empresa5">Empresa</b>
              <div className="sobre-nosotros2">Sobre Nosotros</div>
              <div className="soluciones2">Soluciones</div>
              <div className="insights2">Insights</div>
            </div>
            <div className="categoras4">
              <b className="categoras5">Categorías</b>
              <div className="poltica-de-privacidad2">Contratar Talento</div>
              <div className="poltica-de-privacidad2">Desarrollar Talento</div>
              <div className="poltica-de-privacidad2">
                Herramientas de Gamificación
              </div>
            </div>
            <div className="competencias-digitales-container">
              <div className="poltica-de-privacidad2">{`Competencias Digitales `}</div>
              <div className="poltica-de-privacidad2">
                Competencias Comerciales
              </div>
              <div className="poltica-de-privacidad2">Liderazgo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinceChatInterface;
