import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../config/config";
import { useState,useEffect } from "react";
const Cart = () => {
  const navigate = useNavigate();
  const cartref=collection(db,"Healthcart");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Healthcart"));
        const items = querySnapshot.docs.map((doc) => doc.data());
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);
  console.log(cartItems);





  const onHealthcareLowResolutionLogoImageClick = useCallback(() => {
    navigate("/user-perspective");
  }, [navigate]);

  return (
    <div className="cart">
      <div className="navbar8">
        <div className="navbar-child18" />
        <div className="navbar-child19" />
        <b className="community-forum8">
          <p className="community10">Community</p>
          <p className="community10">Forum</p>
        </b>
        <img className="image-11-icon8" alt="" src="/image-11@2x.png" />
        <img className="image-10-icon9" alt="" src="/image-10@2x.png" />
        <b className="schedule-appointment8">
          <p className="community10">Schedule</p>
          <p className="community10">Appointment</p>
        </b>
        <b className="support-ngos8">
          <p className="community10">Support</p>
          <p className="community10">NGO’s</p>
        </b>
        <img className="image-12-icon10" alt="" src="/image-12@2x.png" />
        <b className="personal-health-tracker-container8">
          <p className="community10">Personal</p>
          <p className="community10">{`Health Tracker `}</p>
        </b>
        <img className="image-15-icon9" alt="" src="/image-15@2x.png" />
        <b className="your-health-record-container8">
          <p className="community10">Your Health</p>
          <p className="community10">Record</p>
        </b>
        <img className="image-16-icon9" alt="" src="/image-16@2x.png" />
        <b className="health-cart8">Health cart</b>
        <img className="image-17-icon9" alt="" src="/image-17@2x.png" />
        <b className="wellness-reward-prgram8">Wellness Reward Prgram</b>
        <img className="image-20-icon10" alt="" src="/image-20@2x.png" />
        <b className="loginsignup8">Login/Signup</b>
        <img className="image-18-icon9" alt="" src="/image-18@2x.png" />
        <b className="rewards8">Rewards</b>
        <b className="experience8">Experience</b>
        <img className="image-19-icon9" alt="" src="/image-19@2x.png" />
        <img
          className="healthcare-low-resolution-logo-icon8"
          alt=""
          src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
          onClick={onHealthcareLowResolutionLogoImageClick}
        />
      </div>
      <img className="image-9-icon8" alt="" src="/image-9@2x.png" />
      <div className="footer21">
        <div className="footer22" />
        <div className="footer-9-dark7">
          <div className="background7" />
          <div className="footer-ui7">
            <div className="poltica-de-privacidad-parent4">
              <div className="poltica-de-privacidad7">
                Política de Privacidad
              </div>
              <div className="poltica-de-privacidad7">
                Términos y Condiciones
              </div>
              <div className="poltica-de-privacidad7">Código de Conducta</div>
            </div>
            <div className="footer23">
              <div className="icontwitter-parent5">
                <img className="icontwitter7" alt="" src="/icontwitter4.svg" />
                <img className="iconlink7" alt="" src="/iconlink5.svg" />
                <img className="icontwitter7" alt="" src="/iconlinkedin6.svg" />
                <img className="icontwitter7" alt="" src="/iconfacebook6.svg" />
              </div>
            </div>
            <div className="divider7" />
            <div className="empresa14">
              <b className="empresa15">Empresa</b>
              <div className="sobre-nosotros7">Sobre Nosotros</div>
              <div className="soluciones7">Soluciones</div>
              <div className="insights7">Insights</div>
            </div>
            <div className="categoras14">
              <b className="categoras15">Categorías</b>
              <div className="poltica-de-privacidad7">Contratar Talento</div>
              <div className="poltica-de-privacidad7">Desarrollar Talento</div>
              <div className="poltica-de-privacidad7">
                Herramientas de Gamificación
              </div>
            </div>
            <div className="competencias-digitales-parent5">
              <div className="poltica-de-privacidad7">{`Competencias Digitales `}</div>
              <div className="poltica-de-privacidad7">
                Competencias Comerciales
              </div>
              <div className="poltica-de-privacidad7">Liderazgo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-inner">
        <div className="search-bar-parent">
          <div className="search-bar3">
            <div className="search-bar-child4" />
            <img className="search-icon3" alt="" src="/search.svg" />
            <div className="search-bar-child5" />
            <img className="pin-icon3" alt="" src="/pin.svg" />
            <i className="cbe3">CBE</i>
          </div>
          <img className="search-icon4" alt="" src="/search.svg" />
        </div>
      </div>
      <div>
  {cartItems.map((item, index) => (
    <div key={index}>
      <div className="group-div">
        <div className="group-child" />
        <img
          className="image-31-icon1"
          alt=""
          src={ "/image-31@2x.png"}
        />
        <img className="heart-icon" alt="" src="/heart.svg" />
        <img className="group-item" alt="" src="/rectangle-92.svg" />
        <b className="b3">{item.Rating}</b>
        <div className="star" />
        <img className="star-icon" alt="" src="/star.svg" />
        <b className="reviews">{item.Review} reviews</b>
        <b className="boost">{item.title}</b>
        <b className="rs-50">Rs {item.Price}</b>
      </div>

      <div className="rectangle-parent9">
        <div className="group-child4" />
        <b className="add-to-cart">ADD TO CART</b>
      </div>
    </div>
    ))}
    </div>

   
      
     


      <img className="image-150-icon" alt="" src="/image-150@2x.png" />
    </div>
  );
};

export default Cart;
