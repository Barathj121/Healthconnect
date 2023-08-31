import { useState, useCallback,useEffect } from "react";
import NGOForm from "../components/NGOForm";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./NGOs.css";
import { db } from "../config/config";
import { collection,doc,getDocs } from "firebase/firestore";
const NGOs = () => {
  const [isNGOFormOpen, setNGOFormOpen] = useState(false);
  const [isNGOForm1Open, setNGOForm1Open] = useState(false);
  const [isNGOForm2Open, setNGOForm2Open] = useState(false);
  const [isNGOForm3Open, setNGOForm3Open] = useState(false);
  const navigate = useNavigate();
  const ngoref=collection(db,"NGOs");
  const [NGOItems, setNGOItems] = useState([]);

  useEffect(() => {
    const fetchNGOItems = async () => {
      try {
        const querySnapshot = await getDocs(ngoref);
        const items = querySnapshot.docs.map((doc) => doc.data());
        setNGOItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchNGOItems();
  }, []);
  console.log(NGOItems);

  const img=NGOItems.Image;
  const username=NGOItems.Title  ;


  const onImage20IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  const openNGOForm = useCallback(() => {
    setNGOFormOpen(true);
  }, []);

  const closeNGOForm = useCallback(() => {
    setNGOFormOpen(false);
  }, []);

  const openNGOForm1 = useCallback(() => {
    setNGOForm1Open(true);
  }, []);

  const closeNGOForm1 = useCallback(() => {
    setNGOForm1Open(false);
  }, []);

  const openNGOForm2 = useCallback(() => {
    setNGOForm2Open(true);
  }, []);

  const closeNGOForm2 = useCallback(() => {
    setNGOForm2Open(false);
  }, []);

  const openNGOForm3 = useCallback(() => {
    setNGOForm3Open(true);
  }, []);

  const closeNGOForm3 = useCallback(() => {
    setNGOForm3Open(false);
  }, []);

  return (
    <>
      <div className="ngos11">
        <div className="navbar11">
          <div className="navbar-child24" />
          <div className="navbar-child25" />
          <b className="community-forum11">
            <p className="community13">Community</p>
            <p className="community13">Forum</p>
          </b>
          <img className="image-11-icon11" alt="" src="/image-11@2x.png" />
          <img className="image-10-icon12" alt="" src="/image-10@2x.png" />
          <b className="schedule-appointment11">
            <p className="community13">Schedule</p>
            <p className="community13">Appointment</p>
          </b>
          <b className="support-ngos11">
            <p className="community13">Support</p>
            <p className="community13">NGO’s</p>
          </b>
          <img className="image-12-icon13" alt="" src="/image-12@2x.png" />
          <b className="personal-health-tracker-container11">
            <p className="community13">Personal</p>
            <p className="community13">{`Health Tracker `}</p>
          </b>
          <img className="image-15-icon12" alt="" src="/image-15@2x.png" />
          <b className="your-health-record-container11">
            <p className="community13">Your Health</p>
            <p className="community13">Record</p>
          </b>
          <img className="image-16-icon12" alt="" src="/image-16@2x.png" />
          <b className="health-cart11">Health cart</b>
          <img className="image-17-icon12" alt="" src="/image-17@2x.png" />
          <b className="wellness-reward-prgram11">Wellness Reward Prgram</b>
          <img
            className="image-20-icon13"
            alt=""
            src="/image-20@2x.png"
            onClick={onImage20IconClick}
          />
          <b className="loginsignup11">Login/Signup</b>
          <img className="image-18-icon12" alt="" src="/image-18@2x.png" />
          <b className="rewards11">Rewards</b>
          <b className="experience11">Experience</b>
          <img className="image-19-icon12" alt="" src="/image-19@2x.png" />
          <div className="navbar-child26" onClick={onRectangle2Click} />
          <img
            className="healthcare-low-resolution-logo-icon11"
            alt=""
            src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          />
          <img className="image-9-icon11" alt="" src="/image-9@2x.png" />
        </div>
        <div className="footer30">
          <div className="footer31" />
          <div className="footer-9-dark10">
            <div className="background10" />
            <div className="footer-ui10">
              <div className="poltica-de-privacidad-parent7">
                <div className="poltica-de-privacidad10">
                  Política de Privacidad
                </div>
                <div className="poltica-de-privacidad10">
                  Términos y Condiciones
                </div>
                <div className="poltica-de-privacidad10">
                  Código de Conducta
                </div>
              </div>
              <div className="footer32">
                <div className="icontwitter-parent8">
                  <img
                    className="icontwitter10"
                    alt=""
                    src="/icontwitter5.svg"
                  />
                  <img className="iconlink10" alt="" src="/iconlink7.svg" />
                  <img
                    className="icontwitter10"
                    alt=""
                    src="/iconlinkedin9.svg"
                  />
                  <img
                    className="icontwitter10"
                    alt=""
                    src="/iconfacebook5.svg"
                  />
                </div>
              </div>
              <div className="divider10" />
              <div className="empresa20">
                <b className="empresa21">Empresa</b>
                <div className="sobre-nosotros10">Sobre Nosotros</div>
                <div className="soluciones10">Soluciones</div>
                <div className="insights10">Insights</div>
              </div>
              <div className="categoras20">
                <b className="categoras21">Categorías</b>
                <div className="poltica-de-privacidad10">Contratar Talento</div>
                <div className="poltica-de-privacidad10">
                  Desarrollar Talento
                </div>
                <div className="poltica-de-privacidad10">
                  Herramientas de Gamificación
                </div>
              </div>
              <div className="competencias-digitales-parent8">
                <div className="poltica-de-privacidad10">{`Competencias Digitales `}</div>
                <div className="poltica-de-privacidad10">
                  Competencias Comerciales
                </div>
                <div className="poltica-de-privacidad10">Liderazgo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="challneges">
          <img className="challneges-child" alt="" src="/rectangle-82.svg" />
          <div className="challeng1" onClick={openNGOForm}>
            <div className="challeng1-child" />
            <img className="image-8-icon11" alt="" src={img||"/image-8@2x.png"} />
            <img className="image-7-icon8" alt="" src="/image-7@2x.png" />
            <div className="challeng1-item" />
            <b className="online-consulting12">{username||"CBE NGO"}</b>
            <i className="connect-with-doctor3">Donate/Ask for help</i>
          </div>
          <img className="image-130-icon" alt="" src="/image-130@2x.png" />
          <div className="challeng11" onClick={openNGOForm1}>
            <div className="challeng1-child" />
            <img className="image-8-icon11" alt="" src="/image-8@2x.png" />
            <img className="image-7-icon8" alt="" src="/image-7@2x.png" />
            <div className="challeng1-item" />
            <b className="online-consulting12">Nagercoil NGO</b>
            <i className="connect-with-doctor3">Donate/Ask for help</i>
          </div>
          <img className="image-131-icon" alt="" src="/image-130@2x.png" />
          <div className="challeng12" onClick={openNGOForm2}>
            <div className="challeng1-child" />
            <img className="image-8-icon11" alt="" src="/image-8@2x.png" />
            <img className="image-7-icon8" alt="" src="/image-7@2x.png" />
            <div className="challeng1-item" />
            <b className="online-consulting12">Chennai NGO</b>
            <i className="connect-with-doctor3">Donate/Ask for help</i>
          </div>
          <div className="challeng13" onClick={openNGOForm3}>
            <div className="challeng1-child" />
            <img className="image-8-icon11" alt="" src="/image-8@2x.png" />
            <img className="image-7-icon8" alt="" src="/image-7@2x.png" />
            <div className="challeng1-item" />
            <b className="online-consulting12">Bangalore NGO</b>
            <i className="connect-with-doctor3">Donate/Ask for help</i>
          </div>
          <i className="show-more-">{`Show more ->`}</i>
          <i className="challenges"> NGO</i>
          <img className="image-132-icon" alt="" src="/image-130@2x.png" />
          <img className="image-133-icon" alt="" src="/image-130@2x.png" />
        </div>
        <img
          className="image-removebg-preview-1-icon1"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
        />
        <img
          className="image-removebg-preview-2-icon"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
        />
        <img
          className="image-removebg-preview-3-icon"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
        />
        <img
          className="image-removebg-preview-4-icon"
          alt=""
          src="/imageremovebgpreview-1@2x.png"
        />
      </div>
      {isNGOFormOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNGOForm}
        >
          <NGOForm onClose={closeNGOForm} />
        </PortalPopup>
      )}
      {isNGOForm1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNGOForm1}
        >
          <NGOForm onClose={closeNGOForm1} />
        </PortalPopup>
      )}
      {isNGOForm2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNGOForm2}
        >
          <NGOForm onClose={closeNGOForm2} />
        </PortalPopup>
      )}
      {isNGOForm3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNGOForm3}
        >
          <NGOForm onClose={closeNGOForm3} />
        </PortalPopup>
      )}
    </>
  );
};

export default NGOs;
