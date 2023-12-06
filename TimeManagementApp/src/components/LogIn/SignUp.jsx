import { useFirebase } from "../../context/firebase";
import { doc, setDoc } from "firebase/firestore";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const firebase = useFirebase(); //cutom hook to use firebase context
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await firebase.signUpUser(email, password);
      const id = userCredential.user.uid;
      console.log(id);
      try {
         await setDoc(doc(firebase.db, "users", id), {
          username:userName,
        });
      } catch (err) {
        console.error("Error adding document: ", err);
      }
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }

    //reset the values of the input fields
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
          <div className="text-2xl font-bold text-center text-gray-600">
            <h1>Sign Up</h1>
          </div>
          <form className="space-y-4" onSubmit={signUpHandler}>
            <div>
              <input
                type="text"
                name=""
                id=""
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                placeholder="Name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                id="username"
                name="username"
                type="text"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Password"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-gray-600">
            <p className="text-center text-slate-600">
              Already have an account ?
              <Link to="/" className="text-blue-500">
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
