import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';

import './Modal.scss'

const Modal = () => {

    const [email, setEmail]= useState("");

    const {login, logout, isAuthenticated, user} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email);
        } catch (error) {
            alert('something Went wrong')
            console.log(error)
        }

    }

    return (
        <div className="modal">
            {!isAuthenticated ? 
            <form onSubmit={handleSubmit} >
                <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <button type="submit">Log In</button>
            </form> :
            <div>
                <h4>{user.email}</h4>
                <button onClick={logout}>Log Out</button>
            </div>
            }
        </div>
    )
}

export default Modal
