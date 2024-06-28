// Dropdown.js

import React, { useState } from 'react';
import './ProfileDropDown.css'; // Import CSS for styling
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
    const [open, setOpen] = useState(false); // State to track selected option


    return (
        <div className="dropdown" onClick={()=>setOpen(!open)}>
            <p>Welcome back: wesam</p>
            {open && <div className='dropdown-body'>
            <Link to="/profile">

                <p>Your profile</p>
            </Link>
            <Link to="/reports">

                <p>Your reports</p>
            </Link>

                </div>}
        </div>
    );
};

export default ProfileDropDown;
