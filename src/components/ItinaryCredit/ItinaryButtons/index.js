import React from 'react';
import styles from './Style.module.scss';

function ItinaryButtons({ href }) {
  console.log({ href });
  return (
    <div className={styles.buttonItinery}>
      <div className={styles.buttonBlackb}>
        <a
          className={styles.buttonBlack}
          href={`/package/${href[0]}/${href[1]}/${href[2]}/${href[3]}/${href[4]}/booked/details`}
        >
          Book Now
        </a>
      </div>
      <div className={styles.buttonBlackb}>
        <a className={styles.buttonWhite} href={`/package/${href[0]}/${href[1]}/${href[2]}/${href[3]}/${href[4]}`}>
          Back To Your Booking Details{' '}
        </a>
      </div>
      <div></div>
    </div>
  );
}

export default ItinaryButtons;
