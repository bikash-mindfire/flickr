import React from 'react'
import './FloatButton.scss'
import MapIcon from '../../static/map.png'
const FloatButton = ({setAddPlaceModalActive}) => {
    return (
        <div className="float-btn" onClick={() => {setAddPlaceModalActive((modalState)=> !modalState)}}>
            <img src={MapIcon} alt="" />
        </div>
    )
}

export default FloatButton
