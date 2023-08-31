import { useState, useCallback, useEffect } from "react";
import { getDocs,collection,addDoc,deleteDoc,doc,updateeDoc,query,where,getDoc} from "firebase/firestore";
import { db } from "../config/config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import "./EPrescriptionManagement.css";
import { Navigate } from "react-router-dom";
const EPres = () => {
  const navigate = useNavigate();
  const EPrescriptioncollectionref=collection(db,"E-Prescription");
  const [presdata,setpresdata]=useState([]);
  const fetchpresdata=async ()=> {
    const q= query(EPrescriptioncollectionref);
    const querySnapshot=await getDocs(q);
    const data = querySnapshot.docs.map((doc)=>doc.data());
    setpresdata(data);
  };
  useEffect(()=>{
    getDocs(query(EPrescriptioncollectionref)).then((querySnapshot)=>{
      const data=querySnapshot.docs.map((doc)=>doc.data());
      setpresdata(data);
    });
    
    },[]);
  const onHealthcareLowResolutionLogoImageClick = useCallback(() => {
    // Please sync "User - Perspective" to the project
    navigate("/user-perspective");
  }, [navigate]);
  console.log(presdata.Duration);

  return (
    <div className="e-pres">
      <Navbar
        image11="/image-11@2x.png"
        image10="/image-10@2x.png"
        image12="/image-12@2x.png"
        image15="/image-15@2x.png"
        image16="/image-16@2x.png"
        image17="/image-17@2x.png"
        image20="/image-20@2x.png"
        image18="/image-18@2x.png"
        image19="/image-19@2x.png"
        healthcareLowResolutionLo="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
        navbarPosition="absolute"
        navbarTop="calc(50% - 1667.5px)"
        navbarLeft="calc(50% - 712px)"
        healthcareLowResolutionLoCursor="pointer"
        onHealthcareLowResolutionLogoImageClick={
          onHealthcareLowResolutionLogoImageClick
        }
      />
      <img className="image-9-icon" alt="" src="/image-9@2x.png" />
      <Footer
        icontwitter="/icontwitter.svg"
        iconlink="/iconlink.svg"
        iconlinkedin="/iconlinkedin.svg"
        iconfacebook="/iconfacebook.svg"
        footerPosition="absolute"
        footerTop="calc(50% + 1266.5px)"
        footerLeft="calc(50% - 716px)"
      />
      <SearchBar
        search="/search.svg"
        pin="/pin.svg"
        searchBarPosition="absolute"
        searchBarTop="calc(50% - 1348.5px)"
        searchBarLeft="calc(50% - 376px)"
      />
      <div className="e-pres-child" />
      <div className="days">14-days</div>
      <div className="days1">{presdata.Duration||"doc"}</div>
      <div className="tablet-details">
        <p className="tablet">Tablet</p>
        <p className="tablet">{`Details `}</p>
      </div>
      <div className="tablet-details1">
        <p className="tablet">Tablet</p>
        <p className="tablet">{`Details `}</p>
      </div>
      <div className="tablet-details2">
        <p className="tablet">Tablet</p>
        <p className="tablet">{`Details `}</p>
      </div>
      <div className="tablet-details3">
        <p className="tablet">Tablet</p>
        <p className="tablet">{`Details `}</p>
      </div>
      <div className="medications">MEDICATIONS</div>
      <div className="e-pres-item" />
      <img
        className="daco-5511364-1-icon"
        alt=""
        src="/daco-5511364-1@2x.png"
      />
      <div className="alex-clare-medical-container">
        <p className="alex-clare">ALEX CLARE</p>
        <p className="tablet">
          <span className="medical-number">Medical number:</span>
          <span className="ak6383950k"> AK6383950K</span>
        </p>
        <p className="tablet">
          <span className="diagnosis">Diagnosis:</span>
          <span> Gastritis,Chronic cholecystitis</span>
        </p>
      </div>
      <div className="e-pres-inner" />
      <div className="notes-patient-container">
        <p className="alex-clare">NOTES :</p>
        <p className="tablet">Patient is allergic to</p>
        <p className="tablet">walnuts and ivy syrup.</p>
      </div>
      <img className="image-151-icon" alt="" src="/image-151@2x.png" />
      <img className="image-152-icon" alt="" src="/image-152@2x.png" />
      <b className="profile">Profile</b>
      <b className="clinical-record">Clinical Record</b>
      <b className="medications1">Medications</b>
      <b className="documents">Documents</b>
      <b className="insurance">Insurance</b>
      <img className="image-153-icon" alt="" src="/image-153@2x.png" />
      <img className="image-154-icon" alt="" src="/image-154@2x.png" />
      <img className="image-155-icon" alt="" src="/image-155@2x.png" />
      <img className="image-156-icon" alt="" src="/image-156@2x.png" />
      <div className="atorvastatin-tablets-ip20-container">
        <p className="tablet">{presdata.TabletName}</p>
      </div>
      <div className="rosuvastatin-10-mg">Rosuvastatin 10 mg Tablets IP</div>
      <div className="amlodipine-besylate">{`Amlodipine Besylate & Atenolol ets`}</div>
      <div className="benidipine-hydrochloride-table">
        Benidipine Hydrochloride Tablet 4mg
      </div>
      <div className="duration">DURATION</div>
      <div className="days2">14-days</div>
      <div className="days3">66-days</div>
      <div className="progress">PROGRESS</div>
      <img className="rectangle-icon" alt="" src="/rectangle-10394.svg" />
      <img className="e-pres-child1" alt="" src="/rectangle-10395.svg" />
      <img className="e-pres-child2" alt="" src="/rectangle-10397.svg" />
      <img className="e-pres-child3" alt="" src="/rectangle-10396.svg" />
      <img className="image-40-icon" alt="" src="/image-40@2x.png" />
      <img className="image-159-icon" alt="" src="/image-40@2x.png" />
      <img className="image-158-icon" alt="" src="/image-40@2x.png" />
      <img className="image-157-icon" alt="" src="/image-40@2x.png" />
      <img className="image-137-icon" alt="" src="/image-137@2x.png" />
      <div className="start-date-container">
        <span className="start-date-container1">
          <p className="tablet">Start Date :</p>
          <p className="tablet">18/09/2023</p>
        </span>
      </div>
      <div className="start-date-container2">
        <span className="start-date-container1">
          <p className="tablet">Start Date :</p>
          <p className="tablet">18/09/2023</p>
        </span>
      </div>
      <div className="start-date-container4">
        <span className="start-date-container1">
          <p className="tablet">Start Date :</p>
          <p className="tablet">18/09/2023</p>
        </span>
      </div>
      <div className="start-date-container6">
        <span className="start-date-container1">
          <p className="tablet">Start Date :</p>
          <p className="tablet">18/09/2023</p>
        </span>
      </div>
    </div>
  );
};

export default EPres;
