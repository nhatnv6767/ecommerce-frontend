import React, {useState} from 'react';
// import {auth} from "../../firebase"
import {sendSignInLinkToEmail} from "firebase/auth";
import {toast} from "react-toastify"

const Register = ({auth}) => {

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        // dont reload page
        e.preventDefault()
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        }

        await sendSignInLinkToEmail(auth, email, config).then(() => {
            toast.success(`Email is sent to ${email}. Click the link to complete registration.`)
            // save user email in local storage
            window.localStorage.setItem("emailForRegistration", email)
            // clear state
            setEmail("")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });

    }

    const registerForm = () =>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                autoFocus
            />
            <br/>
            <button type="submit" className="btn btn-raised">
                Register
            </button>
        </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    );
};

export default Register;
