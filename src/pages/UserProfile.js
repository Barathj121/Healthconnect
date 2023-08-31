import { useState, useCallback,useEffect } from "react";
import Chatbot from "../components/Chatbot";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import { db } from "../config/config";
import { getDocs,collection,addDoc, deleteDoc,doc, updateDoc,query,where,getDoc } from "firebase/firestore";
import { Auth } from "../components/auth";
import { auth } from "../config/config";
import { onAuthStateChanged } from "firebase/auth";

const UserProfile = () => {
  const usercollectionref=collection(db,"Users");
  const [userData, setUserData] = useState(null); // State to hold user data
  
 
//fetch data only one time when signed in not infinite times

  

  
const fetchuserdata = async () => {
  if (auth?.currentUser?.uid) {
    const q = query(usercollectionref, where("UserId", "==", auth?.currentUser?.uid));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setUserData(data);
  }
};

useEffect(() => {
  if (auth?.currentUser?.uid) {
    fetchuserdata();
  }
}, [auth?.currentUser?.uid]);

// Assuming you have another useEffect to listen for changes in usercollectionref
useEffect(() => {
  // Handle changes in usercollectionref here
}, [usercollectionref]);



  
  console.log(userData);
 
   
 const userName=userData?.[0]?.Name || "";
 const userprofile=userData?.[0]?.dp || "";
 const userage=userData?.[0]?.Age || "";
 const userLoc=userData?.[0]?.City;
 const epts=userData?.[0]?.Exppts ;
 const rpts=userData?.[0]?.Rewardpts ;
 const cid=userData?.[0]?.CommunityUser;
 const med=userData?.[0]?.no_of_prescriptions;




 

  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const navigate = useNavigate();

  const openChatbot = useCallback(() => {
    setChatbotOpen(true);
  }, []);

  const closeChatbot = useCallback(() => {
    setChatbotOpen(false);
  }, []);

  const onImage20IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  return (
    <>
      <div className="user-profile">
        <img className="user-profile-child" alt="" src="/rectangle-8.svg" />
        <div className="footer">
          <div className="footer1" />
          <div className="footer-9-dark">
            <div className="background" />
            <div className="footer-ui">
              <div className="poltica-de-privacidad-parent">
                <div className="poltica-de-privacidad">
                  Política de Privacidad
                </div>
                <div className="poltica-de-privacidad">
                  Términos y Condiciones
                </div>
                <div className="poltica-de-privacidad">Código de Conducta</div>
              </div>
              <div className="footer2">
                <div className="icontwitter-parent">
                  <img className="icontwitter" alt="" src="/icontwitter1.svg" />
                  <img className="iconlink" alt="" src="/iconlink1.svg" />
                  <img
                    className="icontwitter"
                    alt=""
                    src="/iconlinkedin1.svg"
                  />
                  <img
                    className="icontwitter"
                    alt=""
                    src="/iconfacebook1.svg"
                  />
                </div>
              </div>
              <div className="divider" />
              <div className="empresa">
                <b className="empresa1">Empresa</b>
                <div className="sobre-nosotros">Sobre Nosotros</div>
                <div className="soluciones">Soluciones</div>
                <div className="insights">Insights</div>
              </div>
              <div className="categoras">
                <b className="categoras1">Categorías</b>
                <div className="poltica-de-privacidad">Contratar Talento</div>
                <div className="poltica-de-privacidad">Desarrollar Talento</div>
                <div className="poltica-de-privacidad">
                  Herramientas de Gamificación
                </div>
              </div>
              <div className="competencias-digitales-parent">
                <div className="poltica-de-privacidad">{`Competencias Digitales `}</div>
                <div className="poltica-de-privacidad">
                  Competencias Comerciales
                </div>
                <div className="poltica-de-privacidad">Liderazgo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatbot1" onClick={openChatbot}>
          <div className="ellipse-div" />
          <img className="image-13-icon" alt="" src="/image-13@2x.png" />
        </div>
        <div className="navbar">
          <div className="navbar-child" />
          <div className="navbar-item" />
          <b className="community-forum">
            <p className="community">Community</p>
            <p className="community">Forum</p>
          </b>
          <img className="image-11-icon" alt="" src="/image-11@2x.png" />
          <img className="image-10-icon" alt="" src="/image-10@2x.png" />
          <b className="schedule-appointment">
            <p className="community">Schedule</p>
            <p className="community">Appointment</p>
          </b>
          <b className="support-ngos">
            <p className="community">Support</p>
            <p className="community">NGO’s</p>
          </b>
          <img className="image-12-icon" alt="" src="/image-12@2x.png" />
          <b className="personal-health-tracker-container">
            <p className="community">Personal</p>
            <p className="community">{`Health Tracker `}</p>
          </b>
          <img className="image-15-icon" alt="" src="/image-15@2x.png" />
          <b className="your-health-record-container">
            <p className="community">Your Health</p>
            <p className="community">Record</p>
          </b>
          <img className="image-16-icon" alt="" src="/image-16@2x.png" />
          <b className="health-cart">Health cart</b>
          <img className="image-17-icon" alt="" src="/image-17@2x.png" />
          <b className="wellness-reward-prgram">Wellness Reward Prgram</b>
          <img
            className="image-20-icon1"
            alt=""
            src={userprofile || "./image-20@2x.png"}
            onClick={onImage20IconClick}
          />
          <b className="loginsignup">Login/Signup</b>
          <img className="image-18-icon" alt="" src="/image-18@2x.png" />
          <b className="rewards">Rewards</b>
          <b className="experience">Experience</b>
          <img className="image-19-icon" alt="" src="/image-19@2x.png"  />
          <div className="navbar-inner" onClick={onRectangle3Click} />
          <img
            className="healthcare-low-resolution-logo-icon"
            alt=""
            src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          />
          <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        </div>
        <img className="image-9-icon1" alt="" src="/image-9@2x.png" />
        <div className="loginform">
            <Auth/>
        </div>
        <div className="prescirption">
          <div className="prescirption-child" />
          <b className="welcome-username">Welcome Username</b>
          <b className="edit-profile">Prescriptions</b>
          <b className="name-shadox">
            <span>{`Today:                 `}</span>
            <span className="span">!</span>
            <span> {med||"None"} doses pending</span>
          </b>
          <b className="age-20">Yesterday: {med||"None"} doses pending</b>
          <b className="location-coimbatore">Location Coimbatore</b>
          <div className="rectangle-parent">
            <div className="instance-child" />
            <b className="show-more">Edit</b>
          </div>
        </div>
        <div className="rectangle-group">
          <div className="instance-item" />
          <b className="show-more1">Show More Detail</b>
        </div>
        <div className="edit">
          <div className="prescirption-child" />
          <b className="welcome-username1">Welcome  {userName}</b>
          <b className="edit-profile">{`Edit Profile `}</b>
          <b className="name-shadox1">Name: {userName ||`Name                               Shadox        `}</b>
          <b className="age-20">Age: {userage||"None"}</b>
          <b className="location-coimbatore1">Location: {userLoc||"None"}</b>
          <div className="rectangle-container">
            <div className="instance-item" />
            <b className="show-more">Edit</b>
          </div>
        </div>
        <img className="edit-01-icon" alt="" src="/edit01.svg" />
        <div className="rectangle-parent1">
          <div className="component-child" />
          <b className="your-health-record">Your Health Record</b>
          <img className="image-15-icon1" alt="" src="/image-151@2x.png" />
          <b className="dr-ravindar-has">
            Dr. Ravindar has updated your record....
          </b>
          <div className="rectangle-parent2">
            <div className="instance-item" />
            <b className="show-more1">Show Full Details</b>
          </div>
        </div>
        <img className="user-profile-item" alt="" src="/group-45.svg" />
        <div className="wellness">
          <div className="wellness-child" />
          <div className="wellness-item" />
          <img className="image-18-icon1" alt="" src="/image-181@2x.png" />
          <div className="wellness-inner" />
          <img className="image-19-icon1" alt="" src="/image-191@2x.png" />
          <b className="b">{epts||"0"}</b>
          <b className="points">Points</b>
          <b className="b1">{rpts||"0"}</b>
          <b className="points1">Points</b>
          <b className="wellness-reward-program">Wellness Reward Program</b>
          <img className="image-17-icon1" alt="" src="/image-171@2x.png" />
          <div className="rectangle-parent3">
            <div className="instance-item" />
            <b className="show-more1">Show More..</b>
          </div>
          <div className="rectangle-parent4">
            <div className="instance-item" />
            <b className="show-more1">
              <p className="community">Guidelines</p>
            </b>
          </div>
        </div>
        <div className="user-profile-inner" />
        <b className="personal-health-tracker">Personal Health Tracker</b>
        <img className="image-12-icon1" alt="" src="/image-121@2x.png" />
        <div className="div">
          <img className="child" alt="" src="/rectangle-1.svg" />
          <div className="item" />
        </div>
        <b className="completed">76% completed</b>
        <div className="user-profile-child1" />
        <b className="continue-journey">Continue journey</b>
        <div className="rectangle-parent5">
          <div className="instance-item" />
          <b className="set-new-plan-container">
            <p className="community">Set New Plan</p>
          </b>
        </div>
        <div className="rectangle-parent6">
          <div className="instance-item" />
          <b className="show-more1">Show More..</b>
        </div>
        <div className="user-profile-child2" />
        <b className="community1">Community</b>
        <img className="image-13-icon1" alt="" src="/image-131@2x.png" />
        <b className="userame-shadox">USername:{cid||"None"}</b>
        <b className="tier-basic">{`Tier                                            Basic `}</b>
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

export default UserProfile;
