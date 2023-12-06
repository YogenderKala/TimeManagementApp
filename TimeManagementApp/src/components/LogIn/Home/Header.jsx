import React from "react";
import { useFirebase } from "../../../context/firebase";
import { useNavigate } from "react-router-dom";

function Header() {
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
    <div className="flex justify-between items-center pl-10 pr-10 p-3">
      <h1 className="text-xl font-semibold "> Time Accounting</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600"
        onClick={signOutHandler}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Header;
