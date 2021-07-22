import React,{useContext} from 'react'
import FavouriteContext from "../../context/FavouriteContext";

const Favourite = () => {

    const {favImages} = useContext(FavouriteContext);

    return (
        <div className="gallery">
            <div className="heading">
                <h2>Favourites</h2>
            </div>
        <div className="image-gallery-wrapper">
          {favImages.map((img, index) => {
            return (<div className="image-wrapper" key={index}>
                    <div className="gallery-img">
                      <img
                        src={img.image_url}
                        alt=""
                      />
                    </div>
                  </div>)
        })}
        </div>
    </div>
    )
}

export default Favourite
