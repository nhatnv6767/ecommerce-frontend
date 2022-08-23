import React, {useState} from 'react';
// import {auth} from "../../firebase"
import {sendSignInLinkToEmail} from "firebase/auth";
import {toast} from "react-toastify"

const Login = ({auth}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        // dont reload page
        e.preventDefault()

    }

    const loginForm = () =>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                autoFocus
            />
            <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Your password"
                autoFocus
            />
            <br/>
            <button type="submit" className="btn btn-raised">
                Login
            </button>
        </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Login</h4>
                    {loginForm()}
                </div>
            </div>
        </div>
    );
};

export default Login;
