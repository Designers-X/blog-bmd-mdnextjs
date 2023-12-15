import React, { useState } from 'react';
import styles from './Style.module.scss';

function DigitalPaymentSection() {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(true);

  const handlePaymentOptionChange = (index, label) => {
    setSelectedPaymentOption({ index, label });
    setShowPaymentOptions(false);
  };

  const goBackToPaymentOptions = () => {
    setShowPaymentOptions(true);
  };

  return (
    <div>
      {showPaymentOptions && (
        <div className={styles.PaymentOptions}>
          <h2>Pay Using UPI </h2>

          <div className={styles.PaymentMain}>
            {[
              { label: 'Google Pay', icon: '/package/googlePay.svg' },
              { label: 'Amazon Pay', icon: '/package/AmaZonIcon.svg' },
              { label: 'BHIM', icon: '/package/BhimUpi.svg' },
              { label: 'Paytm', icon: '/package/PaytmIcon.svg' },
              { label: 'PhonePe', icon: '/package/PhonePeIcon.svg' },
              { label: 'UPI', icon: '/package/UPIIcon.svg' },
            ].map((paymentOption, index) => (
              <div className={styles.PaymentSelect} key={index}>
                <label>
                  <input
                    type="radio"
                    name="paymentOption"
                    checked={selectedPaymentOption && selectedPaymentOption.index === index}
                    onChange={() => handlePaymentOptionChange(index, paymentOption.label)}
                  />
                  <img src={paymentOption.icon} alt={paymentOption.label} /> {paymentOption.label}
                </label>
              </div>
            ))}

            <div className={styles.PaymentSelect}>
              <h2>Or Scan QR Code</h2>
              <label>
                <input
                  type="radio"
                  name="paymentOption"
                  checked={selectedPaymentOption && selectedPaymentOption.label === 'scanQRCode'}
                  onChange={() => handlePaymentOptionChange(null, 'scanQRCode')}
                />
                <img src="/package/ScannerIcon.svg" alt="ScannerIcon" /> Scan QR Code
              </label>
            </div>
          </div>
        </div>
      )}

      {selectedPaymentOption !== null && !showPaymentOptions && (
        <div className={styles.DigitalMode}>
          <div className={styles.BackButton} onClick={goBackToPaymentOptions}>
            <h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 5C14 4.72386 13.7761 4.5 13.5 4.5L1.70711 4.5L4.85355 1.35355C5.04882 1.15829 5.04882 0.841708 4.85355 0.646446C4.65829 0.451183 4.34171 0.451183 4.14645 0.646446L0.146446 4.64645C-0.0488157 4.84171 -0.0488157 5.15829 0.146446 5.35355L4.14645 9.35355C4.34171 9.54882 4.65829 9.54882 4.85355 9.35355C5.04882 9.15829 5.04882 8.84171 4.85355 8.64645L1.70711 5.5L13.5 5.5C13.7761 5.5 14 5.27614 14 5Z"
                  fill="black"
                />
              </svg>{' '}
              {selectedPaymentOption.label}
            </h2>
          </div>

          <div className={styles.UPIFlex}>
            <div>
              <input placeholder="Enter UPI Id" />
            </div>
            <div>
              <span>@</span>
            </div>
            <div>
              <input placeholder="Enter Bank" />
            </div>
          </div>
          <div className={styles.MakePaymentOP}>
            <a href="#">Make Payment</a>
          </div>
        </div>
      )}
    </div>
  );
}
export default DigitalPaymentSection;
