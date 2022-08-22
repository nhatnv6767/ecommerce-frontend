import React, {useEffect, useState} from 'react';
// import {auth} from "../../firebase"
import {getAuth, signInWithEmailLink} from "firebase/auth";
import {app} from "../../firebase"
import {toast} from "react-toastify"

const RegisterComplete = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistration"))
    }, [])


    const handleSubmit = async (e) => {
        // dont reload page
        e.preventDefault()
        const auth = getAuth(app);
        try {
            const result = await signInWithEmailLink(auth, email, window.location.href)
            console.log("RESULT", result)
        } catch (error) {
            //
        }
    }

    const completeRegistrationForm = () =>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                className="form-control"
                value={email}
                disabled
            />
            <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
            />
            <br/>
            <button type="submit" className="btn btn-raised">
                Complete Registration
            </button>
        </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register Complete</h4>
                    {completeRegistrationForm()}
                </div>
            </div>
        </div>
    );
};

export default RegisterComplete;
