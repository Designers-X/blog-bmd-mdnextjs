import React, { useState } from 'react';
import Styles from './Style.module.scss';

const PriceDropDownMob = () => {
  const [selectedOptionA, setSelectedOptionA] = useState(null);
  const [selectedOptionB, setSelectedOptionB] = useState(null);
  const [selectedOptionC, setSelectedOptionC] = useState(null);
  const [selectedOptionD, setSelectedOptionD] = useState(null);

  // const [dropdownVisibleA, setDropdownVisibleA] = useState(false);
  // const [dropdownVisibleB, setDropdownVisibleB] = useState(false);
  // const [dropdownVisibleC, setDropdownVisibleC] = useState(false);
  // const [dropdownVisibleD, setDropdownVisibleD] = useState(false);

  const optionsA = ['$10 to $500', '$500 to $1000', '$1000 to $1500', '$1500 to $2000'];
  const optionsB = [
    'Fashion & Beauty',
    'Culture',
    'Science',
    'Travel & Leisure',
    'Food & Wine',
    'Health & Wellness',
    'Art & History',
  ];
  const optionsC = [
    { label: '', image: '/package/starfilterReview.svg', count: 5 },
    { label: '', image: '/package/starfilterReview.svg', count: 4 },
    { label: '', image: '/package/starfilterReview.svg', count: 3 },
    { label: '', image: '/package/starfilterReview.svg', count: 2 },
    { label: '', image: '/package/starfilterReview.svg', count: 1 },
  ];
  const optionsD = ['10% Discount', '20% Discount', '40% Discount', '50% Discount'];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleOptionSelectA = (option) => {
    setSelectedOptionA(option);
    toggleDropdown(null);
  };

  const handleOptionSelectB = (option) => {
    setSelectedOptionB(option);
    toggleDropdown(null);
  };

  const handleOptionSelectC = (option) => {
    setSelectedOptionC(option);
    toggleDropdown(null);
  };

  const handleOptionSelectD = (option) => {
    setSelectedOptionD(option);
    toggleDropdown(null);
  };
  return (
    <div>
      <section>
        <div className={Styles.SearchBarB}>
          <div className={Styles.dropdownContainer}>
            <div className={`${Styles.DropDraw} ${Styles.dropdownBorder}`}>
              <div className={Styles.dropdownHeader} onClick={() => toggleDropdown('A')}>
                {selectedOptionA || 'Price Range '}
                {''}
                <span className={`${Styles.arrow} ${Styles.arrowUp}`}>
                  {activeDropdown === 'A' ? (
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
              {activeDropdown === 'A' && (
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
              <div className={Styles.dropdownHeader} onClick={() => toggleDropdown('B')}>
                {selectedOptionB || 'Category'}
                {''}
                <span className={`${Styles.arrow} ${Styles.arrowUp}`}>
                  {activeDropdown === 'B' ? (
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
              {activeDropdown === 'B' && (
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
              <div className={Styles.dropdownHeader} onClick={() => toggleDropdown('C')}>
                {selectedOptionC || 'Review'}
                {''}
                <span className={`${Styles.arrow} ${Styles.arrowUp}`}>
                  {activeDropdown === 'C' ? (
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
              {activeDropdown === 'C' && (
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
              <div className={Styles.dropdownHeader} onClick={() => toggleDropdown('D')}>
                {selectedOptionD || 'Discount'}
                {''}
                <span className={`${Styles.arrow} ${Styles.arrowUp}`}>
                  {activeDropdown === 'D' ? (
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
              {activeDropdown === 'D' && (
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
      </section>
    </div>
  );
};

export default PriceDropDownMob;
