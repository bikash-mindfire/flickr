import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "./context/AuthContext";
import { FavouriteProvider } from "./context/FavouriteContext";

ReactDOM.render(
  <React.StrictMode>
          <AuthProvider>
            <FavouriteProvider>
            <App />
            </FavouriteProvider>
          </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
