import React from "react";
import { useFirebase } from "../../../context/firebase";
import { useNavigate } from "react-router-dom";
function HomePage() {

  const firebase = useFirebase();
  const navigate = useNavigate();
  const signOutHandler = async () => {
    try {
      await firebase.signOutUser();
      console.log("signed out");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1>Home page</h1>
        <button onClick={signOutHandler}>Sign out</button>
      </div>
    </>
  );
}

export default HomePage;
