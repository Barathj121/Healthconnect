import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalHealthTracker.css";
const PersonalHealthTracker = () => {
  const navigate = useNavigate();

  const onHealthcareLowResolutionLogoImageClick = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  return (
    <div className="personal-health-tracker1">
      <div className="navbar9">
        <div className="navbar-child20" />
        <div className="navbar-child21" />
        <b className="community-forum9">
          <p className="community11">Community</p>
          <p className="community11">Forum</p>
        </b>
        <img className="image-11-icon9" alt="" src="/image-11@2x.png" />
        <img className="image-10-icon10" alt="" src="/image-10@2x.png" />
        <b className="schedule-appointment9">
          <p className="community11">Schedule</p>
          <p className="community11">Appointment</p>
        </b>
        <b className="support-ngos9">
          <p className="community11">Support</p>
          <p className="community11">NGO’s</p>
        </b>
        <img className="image-12-icon11" alt="" src="/image-12@2x.png" />
        <b className="personal-health-tracker-container9">
          <p className="community11">Personal</p>
          <p className="community11">{`Health Tracker `}</p>
        </b>
        <img className="image-15-icon10" alt="" src="/image-15@2x.png" />
        <b className="your-health-record-container9">
          <p className="community11">Your Health</p>
          <p className="community11">Record</p>
        </b>
        <img className="image-16-icon10" alt="" src="/image-16@2x.png" />
        <b className="health-cart9">Health cart</b>
        <img className="image-17-icon10" alt="" src="/image-17@2x.png" />
        <b className="wellness-reward-prgram9">Wellness Reward Prgram</b>
        <img className="image-20-icon11" alt="" src="/image-20@2x.png" />
        <b className="loginsignup9">Login/Signup</b>
        <img className="image-18-icon10" alt="" src="/image-18@2x.png" />
        <b className="rewards9">Rewards</b>
        <b className="experience9">Experience</b>
        <img className="image-19-icon10" alt="" src="/image-19@2x.png" />
        <img
          className="healthcare-low-resolution-logo-icon9"
          alt=""
          src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          onClick={onHealthcareLowResolutionLogoImageClick}
        />
      </div>
      <img className="image-9-icon9" alt="" src="/image-9@2x.png" />
      <div className="footer24">
        <div className="footer25" />
        <div className="footer-9-dark8">
          <div className="background8" />
          <div className="footer-ui8">
            <div className="poltica-de-privacidad-parent5">
              <div className="poltica-de-privacidad8">
                Política de Privacidad
              </div>
              <div className="poltica-de-privacidad8">
                Términos y Condiciones
              </div>
              <div className="poltica-de-privacidad8">Código de Conducta</div>
            </div>
            <div className="footer26">
              <div className="icontwitter-parent6">
                <img className="icontwitter8" alt="" src="/icontwitter2.svg" />
                <img className="iconlink8" alt="" src="/iconlink6.svg" />
                <img className="icontwitter8" alt="" src="/iconlinkedin7.svg" />
                <img className="icontwitter8" alt="" src="/iconfacebook4.svg" />
              </div>
            </div>
            <div className="divider8" />
            <div className="empresa16">
              <b className="empresa17">Empresa</b>
              <div className="sobre-nosotros8">Sobre Nosotros</div>
              <div className="soluciones8">Soluciones</div>
              <div className="insights8">Insights</div>
            </div>
            <div className="categoras16">
              <b className="categoras17">Categorías</b>
              <div className="poltica-de-privacidad8">Contratar Talento</div>
              <div className="poltica-de-privacidad8">Desarrollar Talento</div>
              <div className="poltica-de-privacidad8">
                Herramientas de Gamificación
              </div>
            </div>
            <div className="competencias-digitales-parent6">
              <div className="poltica-de-privacidad8">{`Competencias Digitales `}</div>
              <div className="poltica-de-privacidad8">
                Competencias Comerciales
              </div>
              <div className="poltica-de-privacidad8">Liderazgo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="personal-health-tracker-inner">
        <div className="group-child16" />
      </div>
      <img className="image-28-icon1" alt="" src="/image-28@2x.png" />
      <div className="set">{`Set `}</div>
      <div className="goal">Goal</div>
      <div className="personal-health-tracker-child">
        <div className="rectangle-parent18">
          <div className="group-child17" />
          <div className="time">Time</div>
          <div className="m">56m</div>
          <img className="watch-icon" alt="" src="/watch.svg" />
        </div>
      </div>
      <div className="personal-health-tracker-inner1">
        <div className="rectangle-parent18">
          <div className="group-child17" />
          <div className="distance">Distance</div>
          <div className="km">3KM</div>
          <img className="zap-icon" alt="" src="/zap.svg" />
        </div>
      </div>
      <div className="personal-health-tracker-inner2">
        <div className="rectangle-parent18">
          <div className="group-child17" />
          <div className="energy-burnt">Energy Burnt</div>
          <div className="kcal">200Kcal</div>
          <img className="zap-icon" alt="" src="/zap.svg" />
        </div>
      </div>
      <div className="daily-fitness-tracking">Daily Fitness Tracking</div>
      <img className="image-27-icon1" alt="" src="/image-271@2x.png" />
      <img className="image-29-icon1" alt="" src="/image-29@2x.png" />
    </div>
  );
};

export default PersonalHealthTracker;
