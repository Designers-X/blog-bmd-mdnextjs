import React from 'react';
import Styles from './Style.module.scss';
import Itinerary from '/json/Itinerary.json';

function CheckIn() {
  return (
    <div>
      {Itinerary.checkInData.map((data, index) => (
        <div key={index} className={Styles.travel3Main}>
          <div className={Styles.travel3Ye}>
            <div className={Styles.travel3}>
              <div className={Styles.SideSpaceTravel}>
                <div className={Styles.checkDate}>
                  <span>Check in</span>
                  <h6>{data.checkInDate}</h6>
                  <span>{data.checkInTime}</span>
                </div>
                <div className={Styles.checkDate}>
                  <span>Check Out</span>
                  <h6>{data.checkOutDate}</h6>
                  <span>{data.checkOutTime}</span>
                </div>
                <div className={`${Styles.checkDate} ${Styles.BorderNoneCheckDate}`}>
                  <span>Guest</span>
                  <h6>{data.guestInfo}</h6>
                  <h5>{data.guestSedule}</h5>
                </div>
              </div>
              <div className={`${Styles.travel3a} ${Styles.TravHeight}`}>
                <h5>{data.rating} Excellent</h5>
                <span>{data.reviews}</span>
                <div className={Styles.ExecllentTravel}>
                  {data.amenities.map((amenity, amenityIndex) => (
                    <span key={amenityIndex} className={Styles.ExecllentMargin}>
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className={Styles.MapTravel}>
                  <div>
                    <img src="/package/mapTravel.png" alt="mapTravel" />
                  </div>
                  <h4>{data.locationRating} Excellent</h4>
                  <span>{data.locationRatingText}</span>
                  <div className={Styles.ParkingFree}>
                    <div>
                      <span>Parking</span>
                    </div>
                    <div>
                      <h4>{data.parking}</h4>
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

export default CheckIn;
