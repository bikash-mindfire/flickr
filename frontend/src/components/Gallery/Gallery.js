import React from "react";
import "./Gallery.scss";
const Gallery = ({ galleryImages }) => {
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
          {galleryImages.map((img, index) => 
          (<div className="image-wrapper" key={index}>
            <div className="gallery-img">
              <img
                src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                alt=""
              />
            </div>
          </div>))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
