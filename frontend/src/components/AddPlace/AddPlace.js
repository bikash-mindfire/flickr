import React, { useState } from 'react'
import axios from 'axios'

import './AddPlace.scss'

import CloseIcon from '../../static/cancel.png'

const AddPlace = ({setAddPlaceModalActive}) => {
    const [loading, setLoading] = useState(false);
    const [newPlace, setNewPlace]= useState({
        name: '',
        lat: '',
        lang: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/add-new-place', {...newPlace});
            setLoading(false);
            if(res.data.success){
                alert("Place Added Successfully")
                setAddPlaceModalActive(false)
            }
            else{
                alert("Something Went Wrong")
            }

            setNewPlace({
                name: '',
                lat: '',
                lang: '',
            })
        } catch (error) {
            alert("Something Went Wrong");
            console.log(error)
            setLoading(false);
            setNewPlace({
                name: '',
                lat: '',
                lang: '',
            })
        }
    }

    return (
        <div className="addplace">
            <div className="close">
                <img src={CloseIcon} onClick={()=>setAddPlaceModalActive(false)} />
            </div>
            <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                    <input 
                        type="text" 
                        required
                        placeholder="Name"
                        value={newPlace.name}
                        onChange={(e) => setNewPlace((place) => ({...place, name: e.target.value}))}
                    />
             </div>
             <div className="input-wrapper">
                    <input 
                        type="number" 
                        required
                        placeholder="latitude"
                        value={newPlace.lat}
                        onChange={(e) => setNewPlace((place) => ({...place, lat: e.target.value}))}
                    />
             </div>
             <div className="input-wrapper">
                    <input 
                        type="number" 
                        required
                        placeholder="longitude"
                        value={newPlace.lang}
                        onChange={(e) => setNewPlace((place) => ({...place, lang: e.target.value}))}
                    />
             </div>
                
                <div className="input-wrapper">
                    {!loading ? <button type="submit">Add Place</button> : <button>Loading...</button>}
                </div>
            </form>
        </div>
    )
}

export default AddPlace
