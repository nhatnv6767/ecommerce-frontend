import React, {useState} from 'react';
import UserNav from "../../components/nav/UserNav";
import {toast} from "react-toastify";
import {updatePassword} from "firebase/auth";

const Password = ({auth}) => {
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const currentUser = await auth.currentUser()
        await updatePassword(currentUser, password)
            .then(() => {
                setLoading(false)
                toast.success("Password updated successfully")
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })
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
