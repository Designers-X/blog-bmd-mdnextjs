import { useState, useEffect } from 'react';
import styles from './Style.module.scss';

const OnlineBankingCustomDropdownBankName = ({ optionsAB, OnSelect }) => {
  const validOnSelect = typeof OnSelect === 'function' ? OnSelect : () => {};

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

  const optionsAC = [
    { label: 'State Bank of India', value: 'SBI' },
    { label: 'HDFC', value: 'HDFC' },
    { label: 'ICICI Bank', value: 'ICICI Bank' },
    { label: 'AXIS BANK', value: 'AXIS BANK' },
    { label: ' BANK of India', value: 'BOI' },
    { label: ' BANK of Maharastra', value: 'Maharastra' },
    { label: ' Boroda BANK', value: 'Boroda' },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedPaymentOption(option);
    setIsOpen(false);
    validOnSelect(option);
  };

  const handleSelectX = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    validOnSelect(option);
    setSelectedPaymentOption('');
  };

  const handlePaymentOptionChange = (optionValue) => {
    setSelectedPaymentOption(optionValue);
    setSelectedOption(optionValue);
  };

  useEffect(() => {
    console.log('Selected Payment Option:', selectedPaymentOption);
  }, [selectedPaymentOption]);

  return (
    <div className={styles.PaymentOptions}>
      <h2>Pay Using UPI </h2>
      {/* radio button */}
      <div className={`${styles.PaymentMain} ${styles.PaymentMain2}`}>
        {[
          { icon: '/package/SbiBankICon.svg', value: 'SBI' },
          { icon: '/package/HdfcBankIcon.svg', value: 'HDFC' },
          { icon: '/package/ICICBankIcon.svg', value: 'ICICI Bank' },
          { icon: '/package/AxisBankIcon.svg', value: 'AXIS BANK' },
        ].map((paymentOption, index) => (
          <div className={styles.PaymentSelect} key={index}>
            <label>
              <input
                type="radio"
                name="paymentOption"
                value={paymentOption.value}
                checked={selectedPaymentOption === paymentOption.value}
                onChange={() => handlePaymentOptionChange(paymentOption.value)}
              />
              <img src={paymentOption.icon} alt={paymentOption.label} /> {paymentOption.label}
            </label>
          </div>
        ))}
        {console.log(selectedOption)}
      </div>
      {/* drop down */}
      <h2>All Banks</h2>
      <div className={styles.customDropdown}>
        <div className={styles.dropdownHeader} onClick={handleToggle}>
          {console.log(selectedOption)}
          {selectedOption ? (
            <>
              <span>{selectedOption}</span>
              {isOpen ? (
                <span className={`${styles.arrow} ${styles.arrowUp}`}>
                  <svg className={styles.flickityButtonIcon1} viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(90deg) "
                    ></path>
                  </svg>
                </span>
              ) : (
                <span className={`${styles.arrow} ${styles.arrowUp}`}>
                  <svg className={styles.flickityButtonIcon} viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(90deg) "
                    ></path>
                  </svg>
                </span>
              )}
            </>
          ) : (
            <>
              <span>State bank of India</span>
              {isOpen ? (
                <span className={`${styles.arrow} ${styles.arrowUp}`}>
                  <svg className={styles.flickityButtonIcon1} viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(90deg) "
                    ></path>
                  </svg>
                </span>
              ) : (
                <span className={`${styles.arrow} ${styles.arrowUp}`}>
                  <svg className={styles.flickityButtonIcon} viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(90deg) "
                    ></path>
                  </svg>
                </span>
              )}
            </>
          )}
        </div>

        {isOpen && optionsAB && (
          <div className={styles.dropdownOptions}>
            {optionsAB.map((option) => (
              <div key={option.value} className={styles.option} onClick={() => handleSelect(option)}>
                {option.label}
              </div>
            ))}
          </div>
        )}

        {isOpen && optionsAC && (
          <div className={styles.dropdownOptions}>
            {optionsAC.map((option) => (
              <div
                key={option.value}
                className={`${styles.option} ${selectedPaymentOption === option.value ? styles.selected : ''}`}
                onClick={() => handleSelectX(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineBankingCustomDropdownBankName;
