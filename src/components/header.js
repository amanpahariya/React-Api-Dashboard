import React from 'react';
import logo from '../logo.svg';
import profile from '../profile.svg'
function Header() {
    return <nav className="navbar">
        <div className="navbar-container d-flex pl-3 pr-3 shadow-sm">
            <a href="/" className="navbar-logo d-flex align-items-center">
                <img src={logo} className="d-inline-block" alt="logo" />
                <h2>Intugine</h2>
            </a>
            <ul className="d-flex mb-0 align-items-center">
                <li className="nav-link active">
                    <a href="/" className="fw-bold">Home</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="fw-bold">Brands</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="fw-bold">Transporters</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="fw-bold d-flex"><div><img src={profile} alt="profile"/></div> <i class="fas fa-angle-down"></i></a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Header;