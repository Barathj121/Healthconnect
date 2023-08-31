import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoSchedule.css";
const VideoSchedule = () => {
  const navigate = useNavigate();

  const onDivbuttonsContainer1Click = useCallback(() => {
    navigate("/onlince-chat-interface");
  }, [navigate]);

  return (
    <div className="video-schedule">
      <div className="navbar6">
        <div className="navbar-child14" />
        <div className="navbar-child15" />
        <b className="community-forum6">
          <p className="community7">Community</p>
          <p className="community7">Forum</p>
        </b>
        <img className="image-11-icon6" alt="" src="/image-11@2x.png" />
        <img className="image-10-icon6" alt="" src="/image-10@2x.png" />
        <b className="schedule-appointment6">
          <p className="community7">Schedule</p>
          <p className="community7">Appointment</p>
        </b>
        <b className="support-ngos6">
          <p className="community7">Support</p>
          <p className="community7">NGO’s</p>
        </b>
        <img className="image-12-icon7" alt="" src="/image-12@2x.png" />
        <b className="personal-health-tracker-container6">
          <p className="community7">Personal</p>
          <p className="community7">{`Health Tracker `}</p>
        </b>
        <img className="image-15-icon7" alt="" src="/image-15@2x.png" />
        <b className="your-health-record-container6">
          <p className="community7">Your Health</p>
          <p className="community7">Record</p>
        </b>
        <img className="image-16-icon6" alt="" src="/image-16@2x.png" />
        <b className="health-cart6">Health cart</b>
        <img className="image-17-icon7" alt="" src="/image-17@2x.png" />
        <b className="wellness-reward-prgram6">Wellness Reward Prgram</b>
        <img className="image-20-icon7" alt="" src="/image-20@2x.png" />
        <b className="loginsignup6">Login/Signup</b>
        <img className="image-18-icon7" alt="" src="/image-18@2x.png" />
        <b className="rewards6">Rewards</b>
        <b className="experience6">Experience</b>
        <img className="image-19-icon7" alt="" src="/image-19@2x.png" />
        <img
          className="healthcare-low-resolution-logo-icon6"
          alt=""
          src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
        />
      </div>
      <img className="image-9-icon6" alt="" src="/image-9@2x.png" />
      <div className="video-schedule-child" />
      <div className="divcontainer">
        <div className="divrow">
          <div className="divcol-6">
            <div className="heading-1">
              <div className="consult-specialist-doctors">
                Consult Specialist Doctors Online
              </div>
            </div>
            <div className="spanblue-col">
              <div className="on-videoaudio-call">{`on Video/Audio Call & and Chat`}</div>
            </div>
            <div className="pblue-col">
              <div className="on-videoaudio-call">
                Consult Doctors from Top Hospitals within 30 minutes
              </div>
            </div>
            <div className="divbuttons" onClick={onDivbuttonsContainer1Click}>
              <div className="divbuttons1">
                <div className="link-button">
                  <div className="strong">
                    <div className="spanm-r-10">
                      <b className="talk-to-doctor">Talk to doctor</b>
                    </div>
                    <div className="svg">
                      <img className="vector-icon5" alt="" src="/vector5.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-button1">
              <b className="drrobert">Dr.Robert</b>
              <b className="drrobert">5.30 P.M</b>
              <b className="drrobert">28/07/2023</b>
            </div>
            <b className="your-appointments">Your Appointments</b>
          </div>
          <div className="divcol-61">
            <img
              className="talk-to-docpng-icon"
              alt=""
              src="/talktodocpng@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="video-schedule-item" />
      <img className="image-92-icon" alt="" src="/image-92@2x.png" />
      <img className="image-93-icon" alt="" src="/image-93@2x.png" />
      <img className="image-94-icon" alt="" src="/image-94@2x.png" />
      <div className="popular-doctors-available">Popular Doctors Available</div>
      <img className="image-95-icon" alt="" src="/image-95@2x.png" />
      <img className="image-101-icon" alt="" src="/image-95@2x.png" />
      <img className="image-100-icon" alt="" src="/image-100@2x.png" />
      <img className="image-96-icon" alt="" src="/image-96@2x.png" />
      <img className="image-97-icon" alt="" src="/image-97@2x.png" />
      <img className="image-98-icon" alt="" src="/image-98@2x.png" />
      <img className="image-99-icon" alt="" src="/image-99@2x.png" />
      <div className="frequently-asked-questions">
        Frequently Asked Questions
      </div>
      <div className="footer15">
        <div className="footer16" />
        <div className="footer-9-dark5">
          <div className="background5" />
          <div className="footer-ui5">
            <div className="poltica-de-privacidad-parent2">
              <div className="poltica-de-privacidad5">
                Política de Privacidad
              </div>
              <div className="poltica-de-privacidad5">
                Términos y Condiciones
              </div>
              <div className="poltica-de-privacidad5">Código de Conducta</div>
            </div>
            <div className="footer17">
              <div className="icontwitter-parent3">
                <img className="icontwitter5" alt="" src="/icontwitter2.svg" />
                <img className="iconlink5" alt="" src="/iconlink2.svg" />
                <img className="icontwitter5" alt="" src="/iconlinkedin2.svg" />
                <img className="icontwitter5" alt="" src="/iconfacebook2.svg" />
              </div>
            </div>
            <div className="divider5" />
            <div className="empresa10">
              <b className="empresa11">Empresa</b>
              <div className="sobre-nosotros5">Sobre Nosotros</div>
              <div className="soluciones5">Soluciones</div>
              <div className="insights5">Insights</div>
            </div>
            <div className="categoras10">
              <b className="categoras11">Categorías</b>
              <div className="poltica-de-privacidad5">Contratar Talento</div>
              <div className="poltica-de-privacidad5">Desarrollar Talento</div>
              <div className="poltica-de-privacidad5">
                Herramientas de Gamificación
              </div>
            </div>
            <div className="competencias-digitales-parent3">
              <div className="poltica-de-privacidad5">{`Competencias Digitales `}</div>
              <div className="poltica-de-privacidad5">
                Competencias Comerciales
              </div>
              <div className="poltica-de-privacidad5">Liderazgo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="chatbot4">
        <div className="chatbot-child3" />
        <img className="image-13-icon4" alt="" src="/image-13@2x.png" />
      </div>
    </div>
  );
};

export default VideoSchedule;
