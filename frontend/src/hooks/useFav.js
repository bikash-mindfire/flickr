import { useContext } from "react";
import FavouriteContext from "../context/FavouriteContext";

const useFav = () => useContext(FavouriteContext);


export default useFav;