import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../context/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Header from "./Header";
import SideBar from "./SideBar";
import TimeAccounting from "./SideMenuComponents/TimeAccounting";
import Projects from "./SideMenuComponents/Projects";
import Reports from "./SideMenuComponents/Reports";
import Task from "./SideMenuComponents/Task";
function HomePage() {
  const firebase = useFirebase();
  const [username, setUsername] = useState("");
  const [currPage, setCurrPage] = useState("TimeAccounting");
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      onAuthStateChanged(firebase.firebaseAuth, (user) => {
        if (user) {
          const docRef = doc(firebase.db, "users", user.uid);
          getDoc(docRef)
            .then((docSnap) => {
              setUsername(docSnap.data().username);
            })
            .catch((error) => {
              console.log("Error getting document:", error);
            });
        } else {

          console.log("No user is signed in");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(currPage);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="bg-gray-800 text-white ">
        <SideBar username={username} setCurrPage={setCurrPage} currPage={currPage}/>
        </div>

        <div className="flex-1 p-4 bg-slate-100">
          <h1 className="text-3xl font-semibold text-slate-600">
            Welcome {username} !!
          </h1>
          {currPage === "TimeAccounting" ? <TimeAccounting /> : null}
          {currPage === "Projects" ? <Projects /> : null}
          {currPage === "Tasks" ? <Task /> : null}
          {currPage === "Reports" ? <Reports /> : null}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
