import React, {useState} from 'react';
import UserNav from "../../components/nav/UserNav";
import {toast} from "react-toastify";

const Password = ({auth}) => {
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const passwordUpdateForm = () =>
        <form>from</form>

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
