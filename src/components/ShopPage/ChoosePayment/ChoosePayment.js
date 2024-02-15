import React from 'react';
import Styles from './Styes.module.scss';
import Accordion from 'components/ItinaryCredit/Accordion/index';
import PaymentButton from 'components/ShopPage//ChoosePayment/PaymentButton/PaymentButton';
import CheckProducts from './CheckProducts';

function ChoosePayment() {
  return (
    <div>
      <div className={Styles.ShopBanner}>
        <h2>Choose Payment</h2>
        <p>
          <span>Home</span>/<span>Product cart / View cart </span>{' '}
        </p>
      </div>

      <div className={Styles.container}>
        <div className={Styles.keepBackIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.15138 9.84864C0.883589 9.58085 0.883589 9.14668 1.15138 8.8789L6.00012 4.03016C6.26791 3.76237 6.70208 3.76237 6.96987 4.03016C7.23765 4.29794 7.23765 4.73212 6.96987 4.9999L3.29172 8.67805L19.0917 8.67805C19.4704 8.67805 19.7774 8.98506 19.7774 9.36377C19.7774 9.74248 19.4704 10.0495 19.0917 10.0495L3.29172 10.0495L6.96987 13.7276C7.23765 13.9954 7.23765 14.4296 6.96987 14.6974C6.70208 14.9652 6.26791 14.9652 6.00012 14.6974L1.15138 9.84864Z"
              fill="black"
            />
          </svg>
          <p>my bag</p>
        </div>

        <div className={Styles.DebitMainDiv}>
          <div className={Styles.DebitMain111}>
            <div className={Styles.DebitMain1}>
              <Accordion></Accordion>
            </div>
            <PaymentButton></PaymentButton>
          </div>

          <div className={Styles.DebitMain2}>
            <CheckProducts></CheckProducts>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePayment;
