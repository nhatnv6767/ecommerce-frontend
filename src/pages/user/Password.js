import React, {useState} from 'react';
import UserNav from "../../components/nav/UserNav";
import {toast} from "react-toastify";

const Password = ({auth}) => {
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const passwordUpdateForm = () =>
        (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Your Password</label>
                    <input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Enter new password"
                    />
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        )

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <UserNav/>
                </div>
                <div className="col">
                    <h4>Password Update</h4>
                    {passwordUpdateForm()}
                </div>
            </div>
        </div>
    );
};

export default Password;
