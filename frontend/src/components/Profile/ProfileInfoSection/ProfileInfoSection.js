import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {BsUpload, BsThreeDotsVertical} from 'react-icons/bs'

import './ProfileInfoSection.scss'

const ProfileInfoSection = () => {
    return (
        <div className="profileinfosection">
            <div className="cover_img">
                <img src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=940" alt="" />
            </div>
            
            <div className="profile_info">
                <div className="iconwrapper">
                    <div className="icon">
                        <FaFacebook />
                    </div>
                    <div className="icon">
                        <AiFillInstagram />
                    </div>
                    <div className="icon">
                        <AiFillTwitterCircle />
                    </div>
                </div>
                
                <div className="social_details">
                    <div className="item">
                        <span className="name">Followers</span>
                        <span className="value">597</span>
                    </div>
                    <div className="item">
                        <span className="name">Following</span>
                        <span className="value">2834</span>
                    </div>
                    <div className="item">
                        <button className="follow-btn">Follow</button>
                    </div>
                    <div className="item">
                        <div className="icon-wrapper">
                            <BsUpload />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-wrapper">
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="content">
                    <div className="profile_img">
                        <img src="https://images.pexels.com/photos/936564/pexels-photo-936564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                    <div className="personal_details">
                        <h3>Mila Eve</h3>
                        <h5>CREATOR</h5>
                        <h6>@milaeve</h6>
                        <p>I create NFT make the world go round</p>
                        <p>Let's make a deal</p>
                    </div>
                </div>
                <div className="mobile-profile">
                <div className="social_details">
                    <div className="item">
                        <button className="follow-btn">Follow</button>
                    </div>
                    <div className="item">
                        <div className="icon-wrapper">
                            <BsUpload />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-wrapper">
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                </div>
                <div className="social_details">
                    <div className="item">
                        <span className="name">Followers</span>
                        <span className="value">597</span>
                    </div>
                    <div className="item">
                        <span className="name">Following</span>
                        <span className="value">2834</span>
                    </div>
                    </div>
                
                <div className="social_details">
                <div className="iconwrapper">
                    <div className="icon">
                        <FaFacebook />
                    </div>
                    <div className="icon">
                        <AiFillInstagram />
                    </div>
                    <div className="icon">
                        <AiFillTwitterCircle />
                    </div>
                </div>
                </div>
                </div>
        </div>
    )
}

export default ProfileInfoSection
