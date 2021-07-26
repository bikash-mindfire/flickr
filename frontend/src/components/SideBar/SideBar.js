import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.scss'
const SideBar = ({handleSideBarShow}) => {
    return (
        <div className="sidebar-wrapper">
        <div className="sidebar">
            <div className="profile">
                <div className="profile-pic">
                    <img src="https://images.pexels.com/photos/936564/pexels-photo-936564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="profile-info">
                    <h3>Mila Eve</h3>
                    <p>Creator</p>
                </div>
            </div>
            <div className="nav-link">
                <Link to="/" onClick={handleSideBarShow} >
                    Home
                </Link>
                </div>
            <div className="nav-link">
                <Link to="/profile" onClick={handleSideBarShow}>
                    profile
                </Link>
                </div>
            <div className="nav-link">
                <Link to="/about" onClick={handleSideBarShow}>
                    About
                </Link>
            </div>
            <div className="sidebar-btn">
                <div className="btn">
                    <button>Create</button>
                </div>
                <div className="btn">
                    <button>Connect Wallet</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SideBar
