import React, {useEffect, useState} from "react";
import "./Header.scss";
import ProfilePic from "../../static/user.png";
import {motion} from 'framer-motion';
import axios from 'axios';

let scrollActive = true;
const Header = ({setGalleryImages, setModalVisible, setLasetSearch}) => {

    const [animateSearch, setAnimateSearch] = useState(false)
    const [searchInput, setSearchInput] = useState('');


    useEffect(() => {
        window.addEventListener('scroll', ()=> scrollPositionChecker())
        return () => {
            window.removeEventListener('scroll', scrollPositionChecker)
        }
    }, [])

    const scrollPositionChecker = () => {
        if(scrollActive){
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

    const handleChange = (e) => {
      setSearchInput(e.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const location = searchInput.split('[*]');
      try{
        const res = await axios.get('http://127.0.0.1:8000/api/test', {
          params: {
            lat: location[0],
            lang: location[1],
            page: 2
          }
        })
        setGalleryImages(res.data.photos.photo)
        setLasetSearch({
            lat: location[0],
            lang: location[1],
            page: 1
        })
        console.log(res.data.photos.photo)
      }catch(err){
        alert("something Went Wrong");
        console.log(err)
      }
      }


    const handleModalVisibility = () => {
      setModalVisible(prevModalState => !prevModalState)
    }

  return (
    <motion.div className="header">
      <div className="header_wrapper">
        <div className="header__logo">
        <motion.h2 animate={{ fontSize: '28px', color: '#ff2994', x: 10}} >
            AirBnb</motion.h2>
        </div>
        <motion.div animate={ !animateSearch?{ width: '60vw', height: '45px', scale: 1.2, y :80}: { width: '300px', height: '35px', scale: 1.0, y : 0}}  className="header_searchbar">
          <form onSubmit={handleSubmit}>
            <input value={searchInput} onChange={handleChange} type="text" name="search" placeholder="Search Places..." />
          </form>
        </motion.div>
        <motion.div animate={{scale: 1.1, x: -10}} className="header__profile">
          <img onClick={handleModalVisibility} src={ProfilePic} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
