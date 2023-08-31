import {auth,googleprovider} from '../config/config';
import {createUserWithEmailAndPassword ,signInWithPopup,signOut} from 'firebase/auth';
import {useState} from 'react';
import "./auth.css";
import { db } from "../config/config";
import { getDocs,collection,addDoc, deleteDoc,doc, updateDoc,query,where,getDoc } from "firebase/firestore";



export const Auth = () =>{
    const [email,setEmail]=useState("");
    const [pass,setpass]=useState("");
    const usercollectionref=collection(db,"Users");

    const addUserToFirestore = async () => {
        try {
          await addDoc(usercollectionref, {
          Age: 0,
          City: "",
          CommunityUser: "",
          DOB: "",
          Exppts: 0,
          Healthrecord: false,
          Name: auth.currentUser.displayName || "Default Name",
          Prescription: false,
          Rewardpts: 0,
          UserId: auth.currentUser.uid,
          dp: auth.currentUser.photoURL || "",

          });
    
          console.log("User added to Firestore.");
        } catch (err) {
          console.error(err);
        }
      };


      const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleprovider);
      
          if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            const querySnapshot = await getDocs(query(usercollectionref, where("UserId", "==", userId)));
      
            if (querySnapshot.empty) {
              addUserToFirestore();
              alert("User added to Firestore.");
              
            } else {
              alert("User already exists in Firestore.");
            }
            alert("User signed in with Google.");
          } else {
            console.log("Not logged in");
          }
        } catch (err) {
          console.error(err);
        }
      };
      
    const logout = async () => {
        try{
            await signOut(auth);
            if(!auth.currentUser){
                alert("logged out");
            }
            else{
                alert("not logged out")
            }
        }
        catch(err){
            console.error(err);
        }
        
    };

    const signin = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,pass);
        }
        catch(err){
            console.error(err);
        }
        
    };

    return (

        
        
        <div>
            <input placeholder = "email" onChange={(e)=>setEmail(e.target.value)} ></input>
            <input type='password' placeholder = "password" onChange={(e)=>setpass(e.target.value)}></input>
            <button onClick={signin}>Sign in</button>
            <button onClick={signInWithGoogle}>Sign in with google</button>
            <button onClick={logout}>Log out</button>
        </div>
    );
}