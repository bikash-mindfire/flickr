import React, {useState} from 'react'
import Card from '../components/Profile/Card/Card'
import ProfileHeader from '../components/Profile/ProfileHeader/ProfileHeader'
import SellDetails from '../components/SellDetails/SellDetails'
import SideBar from '../components/SideBar/SideBar'

const About = ({sideBarShow, handleSideBarShow}) => {


    return (
        <div className={!sideBarShow ? "profile_page" : "profile_page body_overflow_hidden"}>
            {sideBarShow && <SideBar handleSideBarShow={handleSideBarShow} />}
            <ProfileHeader handleSideBarShow={handleSideBarShow} />
            <div className="profile_content" >
            <SellDetails />
            <Card />
            </div>
        </div>
    )
}

export default About
