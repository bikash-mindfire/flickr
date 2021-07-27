import React, {useState, useEffect} from 'react'
import Card from '../components/Profile/Card/Card'
import ProfileHeader from '../components/Profile/ProfileHeader/ProfileHeader'
import ProfileInfoSection from '../components/Profile/ProfileInfoSection/ProfileInfoSection'
import SideBar from '../components/SideBar/SideBar'
import axios from 'axios';

const Profile = ({sideBarShow, handleSideBarShow}) => {
    const [searchInput, setSearchInput] = useState('');
    const [galleryImages, setGalleryImages] = useState('');
    const [preDefinedPlaces, setPreDefinedPlaces] = useState([]);

    useEffect(() => {
         getPlaces()
    }, [])




    const getPlaces = async () => {
        try {
          
         const res = await axios.get('http://127.0.0.1:8000/api/get-places');
         setPreDefinedPlaces(res.data);
         console.log("Places",res.data)

        } catch (error) {
          console.log(error);
          setPreDefinedPlaces([]);
        }
      }


      const checkPredefinedPlace = (newPlace) => {

        let place = preDefinedPlaces.find(place => place?.name === newPlace)
        if(place){
          return place;
        }

        return false;
      }

      const handleChange = (e) => {
        setSearchInput(e.target.value);
      }
  
      const handleSubmit = async (e) => {
        e.preventDefault();
  
        let location;
  
        const existedPlace = checkPredefinedPlace(searchInput);
        if(existedPlace){
          location = [existedPlace.lat, existedPlace.lang]
        }
        else if(searchInput.includes(",")){
          location = searchInput.split(',');
        }
        else{
          alert('Not an valid Input');
          return false
        }
        try{
          const res = await axios.get('http://127.0.0.1:8000/api/test', {
            params: {
              lat: location[0],
              lang: location[1],
              page: 2
            }
          })
          setGalleryImages(res.data.photos.photo)
          console.log(res.data.photos.photo)
        }catch(err){
          alert("something Went Wrong");
          console.log(err)
        }
        }

    return (
        <div className={!sideBarShow ? "profile_page" : "profile_page body_overflow_hidden"}>
            {sideBarShow && <SideBar handleSideBarShow={handleSideBarShow} 
            />}
            <ProfileHeader handleSideBarShow={handleSideBarShow} handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchInput={searchInput}
            galleryImages={galleryImages} />
            <div className="profile_content" >
                <ProfileInfoSection  />
            <Card galleryImages={galleryImages} />
            </div>
        </div>
    )
}

export default Profile
