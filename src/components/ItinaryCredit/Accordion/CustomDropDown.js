// components/CustomDropdown.js
import React, { useState } from 'react';
import styles from './Style.module.scss';

const CustomDropdown = () => {
  const [display, setDisplay] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    img: '/package/postCard.png',
    label: 'Visa / MasterCard / Amex / JCB',
  });
  const [showOption, setShowOption] = useState(false);
  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const handleElectOption = () => {
    setShowOption(!showOption);

    setDisplay((prevDisplay) => !prevDisplay);
  };

  const getElectedOption = (item) => {
    setShowOption(!showOption);
    setSelectedOption(item);
  };

  // const handleElectOption1 = () => {
  //   setModal(!modal);
  //   setDisplay((prevDisplay) => !prevDisplay)
  // };

  const Options = [
    {
      img: '/package/postCard.png',
      label: ' Visa / MasterCard / Amex / JCB',
    },
    {
      img: '/package/postCard.png',
      label: 'Visa / MasterCard / Amex / JCB 1',
    },
    {
      img: '/package/postCard.png',
      label: ' Visa / MasterCard / Amex / JCB 2',
    },
    {
      img: '/package/postCard.png',
      label: '  Visa / MasterCard / Amex / JCB 3',
    },
  ];

  return (
    <div className={styles.Dropo}>
      <label>
        Select Payment Method<span className={styles.HashRed}>*</span>
      </label>
      <div className={styles.dropDown}>
        <div className={styles.dropDown11} onClick={handleElectOption}>
          {selectedOption.img && <img src={selectedOption.img} alt="card" />}
          <label>{selectedOption.label}</label>
          <span className={styles.arrowIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="10"
              viewBox="0 0 17 10"
              className={display ? styles.dropDownTitleSvg1 : styles.dropTitleHoldesvg}
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.74696 0.910634L8.29605 7.23012L14.8813 0.910634C15.7497 0.0566484 17.2332 1.45718 16.3286 2.31117L8.91116 9.5188C8.58551 9.82624 8.04277 9.82624 7.75331 9.5188L0.263464 2.31117C-0.604923 1.45718 0.878572 0.0566484 1.74696 0.910634Z"
                fill="#222222"
              />
            </svg>
          </span>
        </div>
        {showOption && (
          <ul>
            {Options &&
              Options.map((item, index) => (
                <li key={index.toString()} onClick={() => getElectedOption(item)}>
                  <img src={item.img} alt="card" />
                  <label>{item.label}</label>
                </li>
              ))}
          </ul>
        )}
      </div>
      {/* <select className={styles.custonDrop} id="custom-dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value=""> <img src='/package/postCard.png'/> Visa / MasterCard / Amex / JCB</option>
        <option value="option1" style={myStyles}>  Visa / MasterCard / Amex / JCB 1</option>
        <option value="option2"> Visa / MasterCard / Amex / JCB 2</option>
        <option value="option3"> Visa / MasterCard / Amex / JCB 3</option>
      </select> */}
    </div>
  );
};

export default CustomDropdown;
