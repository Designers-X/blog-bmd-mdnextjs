import React, { useState } from 'react';
import Styles from './Style.module.scss';

const SimpleDropdown = () => {
  const [selectedOptionA, setSelectedOptionA] = useState(null);
  const [selectedOptionB, setSelectedOptionB] = useState(null);
  const [selectedOptionC, setSelectedOptionC] = useState(null);
  const [selectedOptionD, setSelectedOptionD] = useState(null);

  const [dropdownVisibleA, setDropdownVisibleA] = useState(false);
  const [dropdownVisibleB, setDropdownVisibleB] = useState(false);
  const [dropdownVisibleC, setDropdownVisibleC] = useState(false);
  const [dropdownVisibleD, setDropdownVisibleD] = useState(false);

  const optionsA = ['$10 to $500', '$500 to $1000', '$1000 to $1500', '$1500 to $2000'];
  const optionsB = [' Shoe', 'Jewellery', 'Sandal', 'Fragrance'];
  const optionsC = [
    { label: '', image: '/package/starfilterReview.svg', count: 5 },
    { label: '', image: '/package/starfilterReview.svg', count: 4 },
    { label: '', image: '/package/starfilterReview.svg', count: 3 },
    { label: '', image: '/package/starfilterReview.svg', count: 2 },
    { label: '', image: '/package/starfilterReview.svg', count: 1 },
  ];
  const optionsD = ['10% Discount', '20% Discount', '40% Discount', '50% Discount'];

  const handleOptionSelectA = (option) => {
    setSelectedOptionA(option);
    setDropdownVisibleA(false);
  };

  const handleOptionSelectB = (option) => {
    setSelectedOptionB(option);
    setDropdownVisibleB(false);
  };

  const handleOptionSelectC = (option) => {
    setSelectedOptionC(option);
    setDropdownVisibleC(false);
  };

  const handleOptionSelectD = (option) => {
    setSelectedOptionD(option);
    setDropdownVisibleD(false);
  };

  return (
    <div>
      <section>
        <div className={Styles.container}>
          <div className={Styles.SearchBarMain}>
            <div className={Styles.SearchBarA}>
              <div className={Styles.SearchSection}>
                <img src="\package\SearchIconBlack.svg" />
                <input type="text" placeholder="Search..." />
              </div>
            </div>

            <div className={Styles.SearchBarB}>
              <div className={Styles.dropdownContainer}>
                <div className={`${Styles.DropDraw} ${Styles.dropdownBorder}`}>
                  <div className={Styles.dropdownHeader} onClick={() => setDropdownVisibleA(!dropdownVisibleA)}>
                    {selectedOptionA || 'Price Range '}
                    {''}
                    <span className={`${Styles.arrow} ${Styles.arrowUp}`}>
                      {dropdownVisibleA ? (
                        <svg className={Styles.flickityButtonIcon1} viewBox="0 0 100 100">
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            class="arrow"
                            transform="translate(100, 100) rotate(90deg) "
                          ></path>
                        </svg>
                      ) : (
                        <svg className={Styles.flickityButtonIcon} viewBox="0 0 100 100">
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            class="arrow"
                            transform="translate(100, 100) rotate(90deg) "
                          ></path>
                        </svg>
                      )}
                    </span>
                  </div>
                  {dropdownVisibleA && (
                    <div className={Styles.dropdownList}>
                      {optionsA.map((option) => (
                        <div key={option} className={Styles.dropdownItem} onClick={() => handleOptionSelectA(option)}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={Styles.DropDraw}>
                  <div className={Styles.dropdownHeader} onClick={() => setDropdownVisibleB(!dropdownVisibleB)}>
                    {selectedOptionB || 'Category'}
                    {''}
                    <span className={`${Styles.arrow} ${Styles.arrowUp}`}>
                      {dropdownVisibleB ? (
                        <svg className={Styles.flickityButtonIcon1} viewBox="0 0 100 100">
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            class="arrow"
                            transform="translate(100, 100) rotate(90deg) "
                          ></path>
                        </svg>
                      ) : (
                        <svg className={Styles.flickityButtonIcon} viewBox="0 0 100 100">
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            class="arrow"
                            transform="translate(100, 100) rotate(90deg) "
                          ></path>
                        </svg>
                      )}
                    </span>
                  </div>
                  {dropdownVisibleB && (
                    <div className={Styles.dropdownList}>
                      {optionsB.map((option) => (
                        <div key={option} className={Styles.dropdownItem} onClick={() => handleOptionSelectB(option)}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={Styles.DropDraw}>
                  <div className={Styles.dropdownHeader} onClick={() => setDropdownVisibleC(!dropdownVisibleC)}>
                    {selectedOptionC || 'Review'}
                    {''}
                    <span className={`${Styles.arrow} ${Styles.arrowUp}`}>
                      {dropdownVisibleC ? (
                        <svg className={Styles.flickityButtonIcon1} viewBox="0 0 100 100">
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            class="arrow"
                            transform="translate(100, 100) rotate(90deg) "
                          ></path>
                        </svg>
                      ) : (
                        <svg className={Styles.flickityButtonIcon} viewBox="0 0 100 100">
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            class="arrow"
                            transform="translate(100, 100) rotate(90deg) "
                          ></path>
                        </svg>
                      )}
                    </span>
                  </div>
                  {dropdownVisibleC && (
                    <div className={Styles.dropdownList}>
                      {optionsC.map((option) => (
                        <div
                          key={option.label}
                          className={Styles.dropdownItem}
                          onClick={() => handleOptionSelectC(option.label)}
                        >
                          {[...Array(option.count)].map((_, index) => (
                            <img
                              key={index}
                              src={option.image}
                              alt={`${option.label} Star`}
                              className={Styles.dropdownItemImage}
                            />
                          ))}
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={Styles.DropDraw}>
                  <div className={Styles.dropdownHeader} onClick={() => setDropdownVisibleD(!dropdownVisibleD)}>
                    {selectedOptionD || 'Discount'}
                    {''}
                    <span className={`${Styles.arrow} ${Styles.arrowUp}`}>
                      {dropdownVisibleD ? (
                        <svg className={Styles.flickityButtonIcon1} viewBox="0 0 100 100">
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            class="arrow"
                            transform="translate(100, 100) rotate(90deg) "
                          ></path>
                        </svg>
                      ) : (
                        <svg className={Styles.flickityButtonIcon} viewBox="0 0 100 100">
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            class="arrow"
                            transform="translate(100, 100) rotate(90deg) "
                          ></path>
                        </svg>
                      )}
                    </span>
                  </div>
                  {dropdownVisibleD && (
                    <div className={Styles.dropdownList}>
                      {optionsD.map((option) => (
                        <div key={option} className={Styles.dropdownItem} onClick={() => handleOptionSelectD(option)}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={Styles.SearchBarC}>
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleDropdown;
