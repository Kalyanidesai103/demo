import React, { useState } from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import firebase from "./component/firebaseConfig";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mobile, setMobile] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, pass);
      if (user) {
        alert("Account Created");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="main_container_signup">
        <div className="header">
          <h2>Signup</h2>
        </div>
      </div>
      <div className="box">
        <input type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="box">
        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="box">
        <input type="password" value={pass} placeholder="Username" onChange={(e) => setPass(e.target.value)} />
      </div>
      <div className="box">
        <input type="text" value={mobile} placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} />
      </div>
      <p>Already have an account? <Link to="/login">Login Now</Link></p>
      <button onClick={submit}>Signup</button>
    </>
  );
};

export default Signup;