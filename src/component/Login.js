import React, { useState } from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import firebase from "./component/FirebaseConfig";

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const submit = async (e) => {
        e.preventDefault()
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, pass)
            if (user) {
                alert("Login successfully")
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>

            <div className="main_container_signup">
                <div className="header">
                    <h2>Login</h2>
                </div>
                <div className="box">
                    <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="box">
                    <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                </div>
                {/* <p>Don't have have account ? <Link to="/">Create Account</Link></p> */}
                <p>Don't have have account ? <Link to="/">Create Account</Link></p>
                <button onClick={submit}>Login</button>
            </div>
        </>
    );
}
export default Login;
