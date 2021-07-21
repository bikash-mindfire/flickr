import React, {useState} from 'react'
import './app.scss'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import axios from 'axios'
import Paginate from './components/Paginate/Paginate'
const App = () => {
  const [galleryImages, setGalleryImages] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [lastSearch, setLasetSearch ] = useState({
    lat: null,
    lang: null,
    page: null
  })

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

      {modalVisible && <Modal />}
      <Header setGalleryImages={setGalleryImages} setModalVisible={setModalVisible} setLasetSearch={setLasetSearch} />
      <Gallery galleryImages={galleryImages} />
      {galleryImages.length !== 0 && <Paginate handlePageDown={handlePageDown} handlePageUp={handlePageUp} lastpage={lastSearch.page} loading={loading} />}
    </>
  )
}

export default App
