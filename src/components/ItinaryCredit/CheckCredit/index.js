// CheckCredit.js

import React from 'react';
import Styles from './Style.module.scss';
import Itinerary from '/json/Itinerary.json';

function CheckCredit() {
  return (
    <div>
      {Itinerary.bookingsData.map((booking) => (
        <div key={booking.id} className={Styles.travel3Main}>
          <div className={Styles.travel3Ye}>
            <div className={Styles.travel3}>
              <div className={Styles.SideSpaceTravel}>
                <div className={Styles.checkDate}>
                  <h6>{booking.date}</h6>
                  <span>{booking.nights}</span>
                </div>
                <div className={Styles.checkDate}>
                  <div className={Styles.CreditSmallImg}>
                    <div className={Styles.imgSmall}>
                      <img src="/package/TravelSmallImg.png" alt="TravelSmallImg" />
                    </div>
                    <div className={Styles.TravelContent}>
                      <h4>{booking.title}</h4>
                      <div>
                        {Array.from({ length: Math.floor(booking.rating) }).map((_, index) => (
                          <img key={index} src="/package/GoldenStar.svg" alt="GoldenStar" />
                        ))}
                      </div>
                      <p>Tour Ste 324A Boca Raton, FL 33431</p>
                    </div>
                  </div>
                </div>
                <div className={`${Styles.checkDate} ${Styles.BorderNoneCheckDate}`}>
                  <div className={Styles.TravelPrice}>
                    <div className={Styles.TravelPricea}>
                      <p>Price</p>
                    </div>
                    <div className={Styles.TravelPriceb}>
                      <p>{booking.price}</p>
                    </div>
                  </div>
                  <p className={Styles.PriceBSpan}>Included in price: Taxes and fees</p>
                  <h5 className={Styles.PriceBh5}>YOU SAVED {booking.savings} ON THIS BOOKING!</h5>
                </div>
              </div>
              <div className={`${Styles.travel3a} ${Styles.TravHeight}`}>
                <h5>{booking.rating} Excellent</h5>
                <span>{booking.reviews} reviews</span>
                <div className={Styles.ExecllentTravel}>
                  <span className={Styles.ExecllentMargin}>Breakfast</span>
                  <span>Housekeeping</span>
                </div>
                <div className={Styles.MapTravel}>
                  <div>
                    <img src="/package/mapTravel.png" alt="mapTravel" />
                  </div>
                  <h4>{booking.locationRating} Excellent</h4>
                  <span>Location rating score</span>
                  <div className={Styles.ParkingFree}>
                    <div>
                      <span>Parking</span>
                    </div>
                    <div>
                      <h4>{booking.parking}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckCredit;
