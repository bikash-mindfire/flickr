import React, {useEffect, useState} from "react";
import "./Header.scss";
import ProfilePic from "../../static/user.png";
import {motion} from 'framer-motion'

let scrollActive = true;
const Header = () => {
    const [animateSearch, setAnimateSearch] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', ()=> scrollPositionChecker())
        return () => {
            window.removeEventListener('scroll', scrollPositionChecker)
        }
    }, [])

    const scrollPositionChecker = () => {
        if(scrollActive){
            console.log("scroll")
            if(window.pageYOffset > 60){
                setAnimateSearch(true)
                adddebouncing()
            }else if(window.pageYOffset < 60){
                setAnimateSearch(false)
                adddebouncing()
            }
        }
    }

    const adddebouncing = () => {
        scrollActive = false;
        setTimeout(() => {
            scrollActive = true;
        }, 50)
    }

  return (
    <motion.div className="header">
      <div className="header_wrapper">
        <div className="header__logo">
        <motion.h2 animate={{ fontSize: '28px', color: '#ff2994', x: 10}} >
            AirBnb</motion.h2>
        </div>
        <motion.div animate={ !animateSearch?{ width: '60vw', height: '45px', scale: 1.2, y :80}: { width: '300px', height: '35px', scale: 1.0, y : 0}}  className="header_searchbar">
          <input type="text" name="search" placeholder="Search Places..." />
        </motion.div>
        <motion.div animate={{scale: 1.1, x: -10}} className="header__profile">
          <img src={ProfilePic} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
