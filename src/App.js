import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import { auth } from "./config/config"; 
import UserPerspective from "./pages/UserPerspective";
import OnlinceChatInterface from "./pages/OnlinceChatInterface";
import EPrescriptionManagement from "./pages/EPrescriptionManagement";
import HealthRecordManagement from "./pages/HealthRecordManagement";
import VideoSchedule from "./pages/VideoSchedule";
import Community from "./pages/Community";
import Cart from "./pages/Cart";
import PersonalHealthTracker from "./pages/PersonalHealthTracker";
import PersonalHealthTracker1 from "./pages/PersonalHealthTracker1";
import NGOs from "./pages/NGOs";
import WellnessProgram from "./pages/WellnessProgram";
import AppointmentSearch from "./pages/AppointmentSearch";
import AppointmentScheduling from "./pages/AppointmentScheduling";
import DoctorPerspective from "./pages/DoctorPerspective";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import { useEffect } from "react";
import { Auth } from "./components/auth";
import { db } from "./config/config";
import { getDocs,collection,addDoc, deleteDoc,doc, updateDoc,query,where,getDoc} from 'firebase/firestore';
import {ref,uploadBytes} from "firebase/storage";
import {useState} from 'react';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const usercollectionref=collection(db,"Users");

  
 
  

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/user-perspective":
        title = "";
        metaDescription = "";
        break;
      case "/onlince-chat-interface":
        title = "";
        metaDescription = "";
        break;
      case "/eprescription-management":
        title = "";
        metaDescription = "";
        break;
      case "/health-record-management":
        title = "";
        metaDescription = "";
        break;
      case "/video-schedule":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/personal-health-tracker1":
        title = "";
        metaDescription = "";
        break;
      case "/personal-health-tracker":
        title = "";
        metaDescription = "";
        break;
      case "/ngos":
        title = "";
        metaDescription = "";
        break;
      case "/wellness-program":
        title = "";
        metaDescription = "";
        break;
      case "/appointment-search":
        title = "";
        metaDescription = "";
        break;
      case "/appointment-scheduling":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-perspective":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-profile-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UserProfile />} />
      <Route path="/user-perspective" element={<UserPerspective />} />
      <Route
        path="/onlince-chat-interface"
        element={<OnlinceChatInterface />}
      />
      <Route
        path="/eprescription-management"
        element={<EPrescriptionManagement />}
      />
      <Route
        path="/health-record-management"
        element={<HealthRecordManagement />}
      />
      <Route path="/video-schedule" element={<VideoSchedule />} />
      <Route path="/community" element={<Community />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/personal-health-tracker1"
        element={<PersonalHealthTracker />}
      />
      <Route
        path="/personal-health-tracker"
        element={<PersonalHealthTracker1 />}
      />
      <Route path="/ngos" element={<NGOs />} />
      <Route path="/wellness-program" element={<WellnessProgram />} />
      <Route path="/appointment-search" element={<AppointmentSearch />} />
      <Route
        path="/appointment-scheduling"
        element={<AppointmentScheduling />}
      />
      <Route path="/doctor-perspective" element={<DoctorPerspective />} />
      <Route path="/doctor-profile-page" element={<DoctorProfilePage />} />
    </Routes>
  );
}
export default App;
