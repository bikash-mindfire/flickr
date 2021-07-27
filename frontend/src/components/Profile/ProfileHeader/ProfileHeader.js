import React from 'react'
import './ProfileHeader.scss'
import {MdSearch} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {FaAlignLeft} from 'react-icons/fa'

const ProfileHeader = ({handleSideBarShow, searchInput, handleSubmit,handleChange}) => {
    return (
        <div className="profile_header">
        <div className="profile_header_lg">
            <div className="header__left">
                <div className="profile_img">
                    <img src="https://images.pexels.com/photos/936564/pexels-photo-936564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile image" />
                </div>
                <div className="search__bar">
                    <MdSearch className="search_icon" color="#fff" />
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                        placeholder="Search Items, Collections and Profiles" 
                        onChange={handleChange} 
                        value={searchInput} 
                    />
                    </form>
                </div>
            </div>
            <div className="header__center">
                <div className="link">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/profile">
                        profile
                    </Link>
                    <Link to="/about">
                        about
                    </Link>
                </div>
            </div>
            <div className="header__right">
                <div className="header_btn">
                    <button className="create">Create</button>
                    </div>
                <div className="header_btn">
                    <button className="wallet">Connect Wallet</button>
                </div>
            </div>
        </div>
        <div className="profile_header_sm">
        <div className="header__left">
            <div className="humburger_menu" onClick={handleSideBarShow}>
               <FaAlignLeft />
            </div>
            </div>
            <div className="header__center">
                <div className="search__bar">
                        <MdSearch className="search_icon" color="#fff" />
                        <form onSubmit={handleSubmit}>
                        <input type="text" 
                        placeholder="Search ..." 
                        onChange={handleChange} 
                        value={searchInput} 
                    />
                    </form>
                    </div>
            </div>
            <div className="header__right">
            <div className="profile_img">
                    <img src="https://images.pexels.com/photos/936564/pexels-photo-936564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile image" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProfileHeader
