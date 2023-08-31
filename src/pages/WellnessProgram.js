import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WellnessProgram.css";
const WellnessProgram = () => {
  const navigate = useNavigate();

  const onImage20IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  return (
    <div className="wellness-program">
      <div className="search-bar4">
        <div className="search-bar-child6" />
        <img className="search-icon5" alt="" src="/search.svg" />
        <div className="search-bar-child7" />
        <img className="pin-icon4" alt="" src="/pin.svg" />
        <i className="cbe4">CBE</i>
      </div>
      <div className="navbar12">
        <div className="navbar-child27" />
        <div className="navbar-child28" />
        <b className="community-forum12">
          <p className="community14">Community</p>
          <p className="community14">Forum</p>
        </b>
        <img className="image-11-icon12" alt="" src="/image-11@2x.png" />
        <img className="image-10-icon13" alt="" src="/image-10@2x.png" />
        <b className="schedule-appointment12">
          <p className="community14">Schedule</p>
          <p className="community14">Appointment</p>
        </b>
        <b className="support-ngos12">
          <p className="community14">Support</p>
          <p className="community14">NGO’s</p>
        </b>
        <img className="image-12-icon14" alt="" src="/image-12@2x.png" />
        <b className="personal-health-tracker-container12">
          <p className="community14">Personal</p>
          <p className="community14">{`Health Tracker `}</p>
        </b>
        <img className="image-15-icon13" alt="" src="/image-15@2x.png" />
        <b className="your-health-record-container12">
          <p className="community14">Your Health</p>
          <p className="community14">Record</p>
        </b>
        <img className="image-16-icon13" alt="" src="/image-16@2x.png" />
        <b className="health-cart12">Health cart</b>
        <img className="image-17-icon13" alt="" src="/image-17@2x.png" />
        <b className="wellness-reward-prgram12">Wellness Reward Prgram</b>
        <img
          className="image-20-icon14"
          alt=""
          src="/image-20@2x.png"
          onClick={onImage20IconClick}
        />
        <b className="loginsignup12">Login/Signup</b>
        <img className="image-18-icon13" alt="" src="/image-18@2x.png" />
        <b className="rewards12">Rewards</b>
        <b className="experience12">Experience</b>
        <img className="image-19-icon13" alt="" src="/image-19@2x.png" />
        <div className="navbar-child29" onClick={onRectangle4Click} />
        <img
          className="healthcare-low-resolution-logo-icon12"
          alt=""
          src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
        />
        <img className="image-9-icon12" alt="" src="/image-9@2x.png" />
      </div>
      <div className="wellness-program-child" />
      <div className="challneges1">
        <img className="challneges-item" alt="" src="/rectangle-82.svg" />
        <div className="challeng14">
          <div className="challeng1-child6" />
          <img className="image-8-icon15" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon12" alt="" src="/image-7@2x.png" />
          <div className="challeng1-child7" />
          <b className="online-consulting16">Run 10 miles</b>
          <i className="connect-with-doctor7">Earn 10 reward points</i>
        </div>
        <img className="image-130-icon1" alt="" src="/image-130@2x.png" />
        <div className="challeng15">
          <div className="challeng1-child6" />
          <img className="image-8-icon15" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon12" alt="" src="/image-7@2x.png" />
          <div className="challeng1-child7" />
          <b className="online-consulting16">Run 10 miles</b>
          <i className="connect-with-doctor7">Earn 10 reward points</i>
        </div>
        <img className="image-131-icon1" alt="" src="/image-130@2x.png" />
        <div className="challeng16">
          <div className="challeng1-child6" />
          <img className="image-8-icon15" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon12" alt="" src="/image-7@2x.png" />
          <div className="challeng1-child7" />
          <b className="online-consulting16">Run 10 miles</b>
          <i className="connect-with-doctor7">Earn 10 reward points</i>
        </div>
        <div className="challeng17">
          <div className="challeng1-child6" />
          <img className="image-8-icon15" alt="" src="/image-8@2x.png" />
          <img className="image-7-icon12" alt="" src="/image-7@2x.png" />
          <div className="challeng1-child7" />
          <b className="online-consulting16">Run 10 miles</b>
          <i className="connect-with-doctor7">Earn 10 reward points</i>
        </div>
        <i className="show-more-1">{`Show more ->`}</i>
        <i className="challenges1">Challenges</i>
        <img className="image-132-icon1" alt="" src="/image-130@2x.png" />
        <img className="image-133-icon1" alt="" src="/image-130@2x.png" />
      </div>
      <div className="today">Today</div>
      <div className="wellness-program-item" />
      <div className="wellness-program-inner" />
      <div className="wellness-program-child1" />
      <div className="prescription-manager">Prescription manager</div>
      <b className="activity">Activity</b>
      <img className="image-18-icon14" alt="" src="/image-182@2x.png" />
      <div className="pts">2 pts</div>
      <img className="image-19-icon14" alt="" src="/image-192@2x.png" />
      <div className="pts1">
        <p className="community14">5 pts</p>
      </div>
      <div className="today1">Today</div>
      <div className="wellness-program-child2" />
      <div className="wellness-program-child3" />
      <div className="wellness-program-child4" />
      <div className="appointment-scheduled">Appointment Scheduled</div>
      <img className="image-20-icon15" alt="" src="/image-182@2x.png" />
      <div className="pts3">2 pts</div>
      <img className="image-21-icon1" alt="" src="/image-192@2x.png" />
      <div className="pts4">
        <p className="community14">5 pts</p>
      </div>
      <div className="today2">Today</div>
      <div className="wellness-program-child5" />
      <div className="wellness-program-child6" />
      <div className="wellness-program-child7" />
      <div className="health-tracker13">Health Tracker</div>
      <img className="image-22-icon1" alt="" src="/image-182@2x.png" />
      <div className="pts6">2 pts</div>
      <img className="image-23-icon1" alt="" src="/image-192@2x.png" />
      <div className="pts7">
        <p className="community14">5 pts</p>
      </div>
      <div className="today3">Today</div>
      <div className="wellness-program-child8" />
      <div className="wellness-program-child9" />
      <div className="wellness-program-child10" />
      <div className="run-challenge">Run challenge</div>
      <img className="image-24-icon1" alt="" src="/image-182@2x.png" />
      <div className="pts9">2 pts</div>
      <img className="image-25-icon" alt="" src="/image-192@2x.png" />
      <div className="pts10">
        <p className="community14">5 pts</p>
      </div>
      <div className="show-full-history">Show Full history</div>
      <b className="shadox1">Shadox</b>
      <img className="image-26-icon2" alt="" src="/image-262@2x.png" />
      <img className="image-27-icon2" alt="" src="/image-272@2x.png" />
      <b className="points2">200 Points</b>
      <img className="image-28-icon2" alt="" src="/image-281@2x.png" />
      <b className="points3">500 Points</b>
      <div className="chatbot5">
        <div className="chatbot-child4" />
        <img className="image-13-icon6" alt="" src="/image-13@2x.png" />
      </div>
      <div className="footer33">
        <div className="footer34" />
        <div className="footer-9-dark11">
          <div className="background11" />
          <div className="footer-ui11">
            <div className="poltica-de-privacidad-parent8">
              <div className="poltica-de-privacidad11">
                Política de Privacidad
              </div>
              <div className="poltica-de-privacidad11">
                Términos y Condiciones
              </div>
              <div className="poltica-de-privacidad11">Código de Conducta</div>
            </div>
            <div className="footer35">
              <div className="icontwitter-parent9">
                <img className="icontwitter11" alt="" src="/icontwitter1.svg" />
                <img className="iconlink11" alt="" src="/iconlink2.svg" />
                <img
                  className="icontwitter11"
                  alt=""
                  src="/iconlinkedin10.svg"
                />
                <img
                  className="icontwitter11"
                  alt=""
                  src="/iconfacebook7.svg"
                />
              </div>
            </div>
            <div className="divider11" />
            <div className="empresa22">
              <b className="empresa23">Empresa</b>
              <div className="sobre-nosotros11">Sobre Nosotros</div>
              <div className="soluciones11">Soluciones</div>
              <div className="insights11">Insights</div>
            </div>
            <div className="categoras22">
              <b className="categoras23">Categorías</b>
              <div className="poltica-de-privacidad11">Contratar Talento</div>
              <div className="poltica-de-privacidad11">Desarrollar Talento</div>
              <div className="poltica-de-privacidad11">
                Herramientas de Gamificación
              </div>
            </div>
            <div className="competencias-digitales-parent9">
              <div className="poltica-de-privacidad11">{`Competencias Digitales `}</div>
              <div className="poltica-de-privacidad11">
                Competencias Comerciales
              </div>
              <div className="poltica-de-privacidad11">Liderazgo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessProgram;
