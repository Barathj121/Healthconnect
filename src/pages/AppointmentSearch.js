import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentSearch.css";
const AppointmentSearch = () => {
  const navigate = useNavigate();

  const onSearchBarContainerClick = useCallback(() => {
    navigate("/appointment-scheduling");
  }, [navigate]);

  return (
    <div className="appointment-search">
      <div className="navbar13">
        <div className="navbar-child30" />
        <div className="navbar-child31" />
        <b className="community-forum13">
          <p className="community15">Community</p>
          <p className="community15">Forum</p>
        </b>
        <img className="image-11-icon13" alt="" src="/image-11@2x.png" />
        <img className="image-10-icon14" alt="" src="/image-10@2x.png" />
        <b className="schedule-appointment13">
          <p className="community15">Schedule</p>
          <p className="community15">Appointment</p>
        </b>
        <b className="support-ngos13">
          <p className="community15">Support</p>
          <p className="community15">NGO’s</p>
        </b>
        <img className="image-12-icon15" alt="" src="/image-12@2x.png" />
        <b className="personal-health-tracker-container13">
          <p className="community15">Personal</p>
          <p className="community15">{`Health Tracker `}</p>
        </b>
        <img className="image-15-icon14" alt="" src="/image-15@2x.png" />
        <b className="your-health-record-container13">
          <p className="community15">Your Health</p>
          <p className="community15">Record</p>
        </b>
        <img className="image-16-icon14" alt="" src="/image-16@2x.png" />
        <b className="health-cart13">Health cart</b>
        <img className="image-17-icon14" alt="" src="/image-17@2x.png" />
        <b className="wellness-reward-prgram13">Wellness Reward Prgram</b>
        <img className="image-20-icon16" alt="" src="/image-20@2x.png" />
        <b className="loginsignup13">Login/Signup</b>
        <img className="image-18-icon15" alt="" src="/image-18@2x.png" />
        <b className="rewards13">Rewards</b>
        <b className="experience13">Experience</b>
        <img className="image-19-icon15" alt="" src="/image-19@2x.png" />
        <img
          className="healthcare-low-resolution-logo-icon13"
          alt=""
          src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
        />
      </div>
      <img className="image-9-icon13" alt="" src="/image-9@2x.png" />
      <div className="search-bar5" onClick={onSearchBarContainerClick}>
        <div className="search-bar-child8" />
        <img className="search-icon6" alt="" src="/search.svg" />
        <div className="search-bar-child9" />
        <img className="pin-icon5" alt="" src="/pin.svg" />
        <i className="cbe5">CBE</i>
      </div>
      <div className="appointments">
        <div className="appointments-child" />
        <i className="appointments1">Appointments</i>
        <i className="k2">21.4K</i>
        <img
          className="icon-icofont-medical-cro"
          alt=""
          src="/icon--icofont--medical--cross--first-aid.svg"
        />
      </div>
      <div className="appointment-search-child" />
      <div className="appointment-search-item" />
      <div className="rectangle-parent22">
        <div className="instance-child5" />
        <img
          className="icon-icofont-web-bank1"
          alt=""
          src="/icon--icofont--web--bank--bank1.svg"
        />
        <i className="k3">
          <p className="community15">$166.3K</p>
        </i>
        <i className="income1">Income</i>
      </div>
      <div className="appointment-search-inner" />
      <div className="footer36">
        <div className="footer37" />
        <div className="footer-9-dark12">
          <div className="background12" />
          <div className="footer-ui12">
            <div className="poltica-de-privacidad-parent9">
              <div className="poltica-de-privacidad12">
                Política de Privacidad
              </div>
              <div className="poltica-de-privacidad12">
                Términos y Condiciones
              </div>
              <div className="poltica-de-privacidad12">Código de Conducta</div>
            </div>
            <div className="footer38">
              <div className="icontwitter-parent10">
                <img className="icontwitter12" alt="" src="/icontwitter1.svg" />
                <img className="iconlink12" alt="" src="/iconlink6.svg" />
                <img
                  className="icontwitter12"
                  alt=""
                  src="/iconlinkedin11.svg"
                />
                <img
                  className="icontwitter12"
                  alt=""
                  src="/iconfacebook8.svg"
                />
              </div>
            </div>
            <div className="divider12" />
            <div className="empresa24">
              <b className="empresa25">Empresa</b>
              <div className="sobre-nosotros12">Sobre Nosotros</div>
              <div className="soluciones12">Soluciones</div>
              <div className="insights12">Insights</div>
            </div>
            <div className="categoras24">
              <b className="categoras25">Categorías</b>
              <div className="poltica-de-privacidad12">Contratar Talento</div>
              <div className="poltica-de-privacidad12">Desarrollar Talento</div>
              <div className="poltica-de-privacidad12">
                Herramientas de Gamificación
              </div>
            </div>
            <div className="competencias-digitales-parent10">
              <div className="poltica-de-privacidad12">{`Competencias Digitales `}</div>
              <div className="poltica-de-privacidad12">
                Competencias Comerciales
              </div>
              <div className="poltica-de-privacidad12">Liderazgo</div>
            </div>
          </div>
        </div>
      </div>
      <i className="time-slot">Time Slot</i>
      <i className="rating">{`Rating `}</i>
      <i className="price">Price</i>
      <i className="experience14">Experience</i>
      <i className="video-conslt">Video Conslt</i>
    </div>
  );
};

export default AppointmentSearch;
