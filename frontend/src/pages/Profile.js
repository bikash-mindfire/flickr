import React, {useState} from 'react'
import Card from '../components/Profile/Card/Card'
import ProfileHeader from '../components/Profile/ProfileHeader/ProfileHeader'
import ProfileInfoSection from '../components/Profile/ProfileInfoSection/ProfileInfoSection'
import SideBar from '../components/SideBar/SideBar'

const Profile = ({sideBarShow, handleSideBarShow}) => {


    return (
        <div className={!sideBarShow ? "profile_page" : "profile_page body_overflow_hidden"}>
            {sideBarShow && <SideBar handleSideBarShow={handleSideBarShow} />}
            <ProfileHeader handleSideBarShow={handleSideBarShow} />
            <div className="profile_content" >
                <ProfileInfoSection />
            <Card />
            </div>
        </div>
    )
}

export default Profile
