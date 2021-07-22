import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth';

const FavouriteContext = createContext(
    {
        favImages: [],
        getFavImages: () => Promise.resolve(),
        addFav: () => Promise.resolve(),
    }
);


export const FavouriteProvider = (props) => {

    const [favImages, setFavImages] = useState([]);
    const {isAuthenticated, user} = useAuth();

    const { children } = props;

    useEffect(() => {
        if(isAuthenticated){
            getFavImages();
        }
        else{
            setFavImages([]);
        }
    }, [isAuthenticated])

    const getFavImages = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/fav', {params: {id: user.id}});
            setFavImages(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const addFav = async (imgUrl) => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/addfav', {
                    "uid": user.id,
                    "url": imgUrl
                }    
            );
            if(res.data.success){
                getFavImages()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <FavouriteContext.Provider
            value={{
                favImages: favImages,
                getFavImages: getFavImages,
                addFav: addFav
            }}
        >

            {children}

        </FavouriteContext.Provider>
    )

}

export default FavouriteContext