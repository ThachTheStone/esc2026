import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css"; // Kết nối với file trang điểm
import Logo from "../../assets/picture/Logo.png";

const Navbar = () => {
    return (
        <nav className="navBar">
            {/* 1. Logo CLB */}
            <div className="navBar-Logo">
                <img src={Logo} alt="logo" />
            </div>

                {/* 2. Danh sách các link (Menu) */}
                <ul className="navBar-Links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/season">Season</Link>
                    </li>
                    <li>
                        <Link to="/partner">Partner</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default Navbar;
