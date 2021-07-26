import React from 'react'
import './SellDetails.scss'
const SellDetails = () => {
    return (
        <div className="sell_details">
            <div className="sec_header">
                <div className="heading"><h2>Featured Auction <span>LIVE</span></h2></div>
                <div className="tag"><p>LUXURY</p></div>
            </div>
            <div className="content">
                <div className="left">
                    <div className="img">
                        <img src="https://images.pexels.com/photos/9416/light-car-display-shop.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="profile_details">
                        <div className="name">
                            <h3>
                            Faberge Egg
                            </h3>
                            
                        </div>
                        <div className="img-wrapper">
                            <div className="profile1">
                                <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=220&w=320" alt="" />
                            </div>
                            <div className="profile1">
                                <img src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=220&w=320" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="bid_details">
                        <div className="bid">
                            <h6>Current Bide</h6>
                            <h4>0.90 ETH</h4>
                            <p>$1,981.81</p>
                        </div>
                        <div className="bid">
                            <h6>Auction Ending In</h6>
                            <div className="timing">
                                <div className="time">
                                    <h4>16</h4>
                                    <p>Hours</p>
                                </div>
                                <div className="time">
                                    <h4>18</h4>
                                    <p>Minutes</p>
                                </div>
                                <div className="time">
                                    <h4>24</h4>
                                    <p>Seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="action">
                        <div className="btn1">
                            <button>Place a bid</button>
                        </div>
                        <div className="btn2">
                            <button>View Network</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellDetails
