import React, {useState} from 'react'
import Gallery from '../components/Gallery/Gallery'
import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'
import axios from 'axios'
import Paginate from '../components/Paginate/Paginate'
import Favourite from '../components/Favourite/Favourite'
import useAuth from '../hooks/useAuth'
import AddPlace from '../components/AddPlace/AddPlace'
import FloatButton from '../components/FloatButton/FloatButton'
const Home = () => {
  const [galleryImages, setGalleryImages] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [addPlaceModalActive, setAddPlaceModalActive] = useState(false)
  const [lastSearch, setLasetSearch ] = useState({
    lat: null,
    lang: null,
    page: null
  })
  
   const {isAuthenticated} = useAuth();

  const paginate = async (page) => {
    setLoading(true)
    try{
      const res = await axios.get('http://127.0.0.1:8000/api/test', {
        params: {
          lat: lastSearch.lat,
          lang: lastSearch.lang,
          page: page
        }
      })
      setGalleryImages(res.data.photos.photo)
      setLasetSearch({
          lat: lastSearch.lat,
          lang: lastSearch.lang,
          page: page
      })
      console.log(res.data.photos.photo)
    setLoading(false)

    }catch(err){
      alert("something Went Wrong");
      console.log(err)
    setLoading(false)

    }
  }


  const handlePageUp = () => {
    paginate(lastSearch.page + 1)
  }

  const handlePageDown = () => {
    if(lastSearch.page > 0){
      paginate(lastSearch.page - 1)
    }
  }

  return (
    <>
    <FloatButton setAddPlaceModalActive={setAddPlaceModalActive} />
      {addPlaceModalActive && <AddPlace setAddPlaceModalActive={setAddPlaceModalActive} />}
      {modalVisible && <Modal />}
      <Header setGalleryImages={setGalleryImages} setModalVisible={setModalVisible} setLasetSearch={setLasetSearch} />
      <Gallery galleryImages={galleryImages} />
      {galleryImages.length !== 0 && <Paginate handlePageDown={handlePageDown} handlePageUp={handlePageUp} lastpage={lastSearch.page} loading={loading} />}
      {isAuthenticated && <Favourite />}
    </>
  )
}

export default Home
