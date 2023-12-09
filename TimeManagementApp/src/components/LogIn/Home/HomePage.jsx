import React, { useEffect, useId, useState } from "react";
import { useFirebase } from "../../../context/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Header from "./Header";
import SideBar from "./SideBar";
import TimeAccounting from "./SideMenuComponents/TimeAccounting/TimeAccounting";
import Projects from "./SideMenuComponents/Projects";
import Reports from "./SideMenuComponents/Reports";
import Task from "./SideMenuComponents/Task";
function HomePage() {
  const firebase = useFirebase();
  const [username, setUsername] = useState("");
  const [currPage, setCurrPage] = useState("TimeAccounting");
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        onAuthStateChanged(firebase.firebaseAuth, (user) => {
          if (user) {
            setUserId(user.uid);
            getUsername(user.uid);
          } else {
            console.log("No user is signed in");
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserInfo();
  }, []);

  const getUsername = (userId) => {
    const docRef = doc(firebase.db, "users", userId);
    getDoc(docRef)
      .then((docSnap) => {
        setUsername(docSnap.data().username);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="bg-gray-800 text-white ">
          <SideBar
            username={username}
            setCurrPage={setCurrPage}
            currPage={currPage}
          />
        </div>

        <div className="flex-1 p-4 bg-slate-100 ">
          <h1 className="text-3xl font-semibold text-slate-600">
            Welcome {username} !!
          </h1>
          {userId && currPage === "TimeAccounting" ? (
            <TimeAccounting userId={userId} />
          ) : null}
          {userId && currPage === "Projects" ? <Projects /> : null}
          {userId && currPage === "Tasks" ? <Task /> : null}
          {userId && currPage === "Reports" ? <Reports /> : null}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
