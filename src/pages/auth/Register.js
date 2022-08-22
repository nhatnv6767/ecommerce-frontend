import React, {useState} from 'react';
// import {auth} from "../../firebase"
import {getAuth, sendSignInLinkToEmail} from "firebase/auth";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

const Register = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        // dont reload page
        e.preventDefault()
        const config = {
            url: "http://localhost:3000/register/complete",
            handleCodeInApp: true,
        }

        await sendSignInLinkToEmail(email, config)
        toast.success(`Email is sent to ${email}. Click the link to complete registration.`)
        // save user email in local storage
    }

    const registerForm = () =>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
            />
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
