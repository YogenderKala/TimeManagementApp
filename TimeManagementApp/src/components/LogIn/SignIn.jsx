import React from "react";
import { useState } from "react";
import { useFirebase } from "../../context/firebase";
import { Link , useNavigate} from "react-router-dom";
const SignIn = () => {
  const firebase = useFirebase(); //custom hook to use firebase context
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await firebase.signInUser(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-md">
        <div className="text-2xl font-semibold text-center text-slate-600">
          Welcome Back !
        </div>
        <form className="space-y-4" onSubmit={signInHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Log In
          </button>
          <p className="text-center text-slate-600">Don't have an account ?
          <Link to="/signup" className="text-blue-500"> Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
