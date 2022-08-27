import React from 'react';
import {Link} from "react-router-dom"

const UserNav = () => {
    return (
        <nav>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/user/history" className="nav-link text-uppercase">History</Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/password" className="nav-link text-uppercase">Password</Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/wishlist" className="nav-link text-uppercase">Wishlist</Link>
                </li>
            </ul>
        </nav>
    );
};

export default UserNav;
