import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalHealthTracker1.css";
const PersonalHealthTracker1 = () => {
  const navigate = useNavigate();

  const onRectangleContainerClick = useCallback(() => {
    navigate("/personal-health-tracker1");
  }, [navigate]);

  return (
    <div className="personal-health-tracker2">
      <div className="navbar10">
        <div className="navbar-child22" />
        <div className="navbar-child23" />
        <b className="community-forum10">
          <p className="community12">Community</p>
          <p className="community12">Forum</p>
        </b>
        <img className="image-11-icon10" alt="" src="/image-11@2x.png" />
        <img className="image-10-icon11" alt="" src="/image-10@2x.png" />
        <b className="schedule-appointment10">
          <p className="community12">Schedule</p>
          <p className="community12">Appointment</p>
        </b>
        <b className="support-ngos10">
          <p className="community12">Support</p>
          <p className="community12">NGO’s</p>
        </b>
        <img className="image-12-icon12" alt="" src="/image-12@2x.png" />
        <b className="personal-health-tracker-container10">
          <p className="community12">Personal</p>
          <p className="community12">{`Health Tracker `}</p>
        </b>
        <img className="image-15-icon11" alt="" src="/image-15@2x.png" />
        <b className="your-health-record-container10">
          <p className="community12">Your Health</p>
          <p className="community12">Record</p>
        </b>
        <img className="image-16-icon11" alt="" src="/image-16@2x.png" />
        <b className="health-cart10">Health cart</b>
        <img className="image-17-icon11" alt="" src="/image-17@2x.png" />
        <b className="wellness-reward-prgram10">Wellness Reward Prgram</b>
        <img className="image-20-icon12" alt="" src="/image-20@2x.png" />
        <b className="loginsignup10">Login/Signup</b>
        <img className="image-18-icon11" alt="" src="/image-18@2x.png" />
        <b className="rewards10">Rewards</b>
        <b className="experience10">Experience</b>
        <img className="image-19-icon11" alt="" src="/image-19@2x.png" />
        <img
          className="healthcare-low-resolution-logo-icon10"
          alt=""
          src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
        />
      </div>
      <img className="image-9-icon10" alt="" src="/image-9@2x.png" />
      <div className="footer27">
        <div className="footer28" />
        <div className="footer-9-dark9">
          <div className="background9" />
          <div className="footer-ui9">
            <div className="poltica-de-privacidad-parent6">
              <div className="poltica-de-privacidad9">
                Política de Privacidad
              </div>
              <div className="poltica-de-privacidad9">
                Términos y Condiciones
              </div>
              <div className="poltica-de-privacidad9">Código de Conducta</div>
            </div>
            <div className="footer29">
              <div className="icontwitter-parent7">
                <img className="icontwitter9" alt="" src="/icontwitter2.svg" />
                <img className="iconlink9" alt="" src="/iconlink1.svg" />
                <img className="icontwitter9" alt="" src="/iconlinkedin8.svg" />
                <img className="icontwitter9" alt="" src="/iconfacebook.svg" />
              </div>
            </div>
            <div className="divider9" />
            <div className="empresa18">
              <b className="empresa19">Empresa</b>
              <div className="sobre-nosotros9">Sobre Nosotros</div>
              <div className="soluciones9">Soluciones</div>
              <div className="insights9">Insights</div>
            </div>
            <div className="categoras18">
              <b className="categoras19">Categorías</b>
              <div className="poltica-de-privacidad9">Contratar Talento</div>
              <div className="poltica-de-privacidad9">Desarrollar Talento</div>
              <div className="poltica-de-privacidad9">
                Herramientas de Gamificación
              </div>
            </div>
            <div className="competencias-digitales-parent7">
              <div className="poltica-de-privacidad9">{`Competencias Digitales `}</div>
              <div className="poltica-de-privacidad9">
                Competencias Comerciales
              </div>
              <div className="poltica-de-privacidad9">Liderazgo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent21" onClick={onRectangleContainerClick}>
        <div className="instance-child4" />
        <img
          className="icon-icofont-web-bank"
          alt=""
          src="/icon--icofont--web--bank--bank.svg"
        />
        <i className="k">
          <p className="community12">$166.3K</p>
        </i>
        <i className="income">Income</i>
      </div>
      <i className="sync-your-device">{`SYNC YOUR DEVICE `}</i>
    </div>
  );
};

export default PersonalHealthTracker1;
