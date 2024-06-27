import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <nav>
            <div className="nav__logo">
                <a href="/">
                    Stayhealt<span className="healthy-y-letter">y</span>
                </a>
            </div>
            {/* <div className="nav__icon" onClick={handleClick}>
                <i className="fa fa-times fa fa-bars"></i>
            </div> */}
            <ul className="nav__links active">
                <li className="link">
                    <a href="../Landing_Page/LandingPage.html">Home</a>
                </li>
                <li className="link">
                    <a href="./">Appointments</a>
                </li>
                <li className="link">
                    <a href="../Login//Login.html">
                        Log in         <i className="fa fa-user"></i>       </a>
                </li>
                <li className="link">
                    <a href="../Sign_Up//Sign_Up.html">
                        Sign_Up
                        <i className="fa fa-user"></i>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
