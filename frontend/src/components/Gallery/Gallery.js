import React, { useContext }  from "react";
import "./Gallery.scss";
import FavouriteContext from "../../context/FavouriteContext";
import OutlinedHeart from '../../static/heart.png';
import Filled from '../../static/like.png';



const Gallery = ({ galleryImages }) => {

  const {addFav, favImages} = useContext(FavouriteContext);
  
  function checkImageExist(url) {
    return favImages.some(function(img) {
      return img.image_url === url;
    }); 
  }

  return (
    <div className="gallery">
      <div className="heading">
        <h2>Gallery</h2>
      </div>
      {galleryImages.length === 0 ? (
        <div className="image-gallery-wrapper">
          <div className="image-wrapper">
            <div className="gallery-img">
              <img
                src="https://images.pexels.com/photos/719597/pexels-photo-719597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <div className="image-wrapper">
            <div className="gallery-img">
              <img
                src="https://images.pexels.com/photos/719597/pexels-photo-719597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <div className="image-wrapper">
            <div className="gallery-img">
              <img
                src="https://images.pexels.com/photos/719597/pexels-photo-719597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <div className="image-wrapper">
            <div className="gallery-img">
              <img
                src="https://images.pexels.com/photos/2608409/pexels-photo-2608409.jpeg?cs=srgb&dl=pexels-drew-williams-2608409.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
          <div className="image-wrapper">
            <div className="gallery-img">
              <img
                src="https://images.pexels.com/photos/2608409/pexels-photo-2608409.jpeg?cs=srgb&dl=pexels-drew-williams-2608409.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
          <div className="image-wrapper">
            <div className="gallery-img">
              <img
                src="https://images.pexels.com/photos/2608409/pexels-photo-2608409.jpeg?cs=srgb&dl=pexels-drew-williams-2608409.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="image-gallery-wrapper">
          {galleryImages.map((img, index) => {
            const url = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
            const isInFav = checkImageExist(url);
            return (<div className="image-wrapper" key={index}>
                    <div className="gallery-img" onClick={() => addFav(url)}>
                      <img
                        src={url}
                        alt=""
                      />
                      {!isInFav ? (
                            <div className="favouriteWrapper active">
                              <img src={OutlinedHeart} />
                            </div>
                            ):
                            (<div className="favouriteWrapper">
                              <img src={Filled} />
                            </div>)
                            }
                    </div>
                  </div>)
        })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
