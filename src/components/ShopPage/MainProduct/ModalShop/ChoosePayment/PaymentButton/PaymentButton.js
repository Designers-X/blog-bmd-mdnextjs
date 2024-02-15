import React from 'react';
// import styles from "./styles.module.scss";
import styles from './Styles.module.scss';
import Link from 'next/link';

function PaymentButton() {
  return (
    <div className={styles.buttonItinery}>
      <div className={styles.buttonBlackb}>
        <div className={styles.buttonBlack}>
          <a>MAKE PAYMENT</a>
        </div>
      </div>
      <div className={styles.buttonBlackb}>
        <div className={styles.buttonWhite}>
          <Link href="/shop/cart">BACK TO REVIEW ORDERS </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentButton;
