import { useMemo } from "react";
import "./Navbar.css";
const Navbar = ({
  image11,
  image10,
  image12,
  image15,
  image16,
  image17,
  image20,
  image18,
  image19,
  healthcareLowResolutionLo,
  navbarPosition,
  navbarTop,
  navbarLeft,
  healthcareLowResolutionLoCursor,
  onHealthcareLowResolutionLogoImageClick,
}) => {
  const navbarStyle = useMemo(() => {
    return {
      position: navbarPosition,
      top: navbarTop,
      left: navbarLeft,
    };
  }, [navbarPosition, navbarTop, navbarLeft]);

  const healthcareLowResolutionLogoIconStyle = useMemo(() => {
    return {
      cursor: healthcareLowResolutionLoCursor,
    };
  }, [healthcareLowResolutionLoCursor]);

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="navbar-child" />
      <div className="navbar-item" />
      <b className="community-forum">
        <p className="community">Community</p>
        <p className="community">Forum</p>
      </b>
      <img className="image-11-icon" alt="" src={image11} />
      <img className="image-10-icon" alt="" src={image10} />
      <b className="schedule-appointment">
        <p className="community">Schedule</p>
        <p className="community">Appointment</p>
      </b>
      <b className="support-ngos">
        <p className="community">Support</p>
        <p className="community">NGO’s</p>
      </b>
      <img className="image-12-icon" alt="" src={image12} />
      <b className="personal-health-tracker-container">
        <p className="community">Personal</p>
        <p className="community">{`Health Tracker `}</p>
      </b>
      <img className="image-15-icon" alt="" src={image15} />
      <b className="your-health-record-container">
        <p className="community">Your Health</p>
        <p className="community">Record</p>
      </b>
      <img className="image-16-icon" alt="" src={image16} />
      <b className="health-cart">Health cart</b>
      <img className="image-17-icon" alt="" src={image17} />
      <b className="wellness-reward-prgram">Wellness Reward Prgram</b>
      <img className="image-20-icon" alt="" src={image20} />
      <b className="loginsignup">Login/Signup</b>
      <img className="image-18-icon" alt="" src={image18} />
      <b className="rewards">Rewards</b>
      <b className="experience">Experience</b>
      <img className="image-19-icon" alt="" src={image19} />
      <img
        className="healthcare-low-resolution-logo-icon"
        alt=""
        src={healthcareLowResolutionLo}
        style={healthcareLowResolutionLogoIconStyle}
        onClick={onHealthcareLowResolutionLogoImageClick}
      />
    </div>
  );
};

export default Navbar;
