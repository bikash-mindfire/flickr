import React from "react";
import "./Card.scss";
import {FaShare,FaRegHeart} from 'react-icons/fa'
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="card">
        <div className="tabs">
            <Link className="active">Showcase</Link>
            <Link>Created</Link>
        </div>
      <div className="image-gallery-wrapper">
       <SingleCard />
       <SingleCard />
       <SingleCard />
       <SingleCard />
       <SingleCard />
       <SingleCard />
       <SingleCard />
       <SingleCard />
      </div>
    </div>
  );
};

export default Card;


const SingleCard = () => {
    return(
        <div className="wrapper">
            <div className="wrap-border">
          <div className="card-header">
            <div className="header-media">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=220&w=320"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=220&w=320"
                alt=""
              />
            </div>
            <div className="header-text">
              <h5>Sports</h5>
            </div>
          </div>
          <div className="card-media">
            <div className="gallery-img">
              <img
                src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
            <div className="card-footer">
              <div className="heading">
                <h3>Boxing Greatest</h3>
              </div>
              <div className="content">
                <div className="content-sec">
                  <h4>Current Bid</h4>
                  <h5>0.70ETH</h5>
                </div>
                <div className="content-sec">
                  <h4>Ending In</h4>
                  <h5>12h 56m 46s</h5>
                </div>
              </div>
            </div>
        </div>
        <div className="action">
        <div className="social">
            <div className="like">
            <span className="icon"><FaRegHeart /></span>
            <span className="likes">200</span>
            </div>
            <div className="share">
            <FaShare />
            </div>
        </div>
        <div className="btn">
            <button>Place Bid</button>
        </div>
        </div>
        </div>
    )
}