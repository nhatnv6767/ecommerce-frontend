import React, {useEffect, useState} from 'react';
// import {auth} from "../../firebase"
import {getAuth, signInWithEmailLink, updatePassword, updateEmail} from "firebase/auth";
import {app} from "../../firebase"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom";

const RegisterComplete = () => {

    const history = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistration"))
    }, [])


    const handleSubmit = async (e) => {
        // dont reload page
        e.preventDefault()

        if (!email || !password) {
            toast.error("Email and password are required")
            return
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }

        const auth = getAuth(app);
        try {
            const result = await signInWithEmailLink(auth, email, window.location.href)
            console.log("RESULT", result)
            if (result.user.emailVerified) {
                // remove user email from local storage
                window.localStorage.removeItem("emailForRegistration")
                // get user id token
                let user = auth.currentUser
                // await user.updatePassword(password)
                await updatePassword(user, password)
                const idTokenResult = await user.getIdTokenResult()
                // redux store
                console.log("user: ", user, "idTokenResult: ", idTokenResult)
                // redirect
                history("/")
            }
        } catch (error) {
            //
            console.log(error)
            toast.error(error.message)
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
