import React from 'react';
import styles from './Style.module.scss';

function ItinaryButtons({ href }) {
  console.log({ href });
  return (
    <div className={styles.buttonItinery}>
      <div className={styles.buttonBlackb}>
        <div className={styles.buttonBlack}>
          <a href={`/package/${href[0]}/${href[1]}/${href[2]}/${href[3]}/${href[4]}/booked/details`}> Book Now</a>
        </div>
      </div>
      <div className={styles.buttonBlackb}>
        <div className={styles.buttonWhite}>
          <a href={`/package/${href[0]}/${href[1]}/${href[2]}/${href[3]}/${href[4]}`}>Back To Your Booking Details </a>
        </div>
      </div>
    </div>
  );
}

export default ItinaryButtons;
