// components/MobileNavbar.js
import { useState } from 'react';
import Styles from './Style.module.scss';
import PriceDropDownMob from './PriceDropDownMob';

const MobNavbar = () => {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <div className={Styles.mobileNavbar}>
      <div className={Styles.mobileNavbarLeft}>
        <div className={Styles.SearchBarA}>
          <div className={Styles.SearchSection}>
            <img src="\package\SearchIconBlack.svg" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className={Styles.navbarIcon} onClick={toggleFilterMenu}>
          {/* Your filter icon SVG code goes here */}
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6763 14.0833C10.2102 15.6496 8.7593 16.7917 7.04167 16.7917C5.32403 16.7917 3.87315 15.6496 3.40702 14.0833H1.08409C0.485362 14.0833 0 13.6025 0 13C0 12.4017 0.484758 11.9167 1.08409 11.9167H3.40702C3.87315 10.3504 5.32403 9.20833 7.04167 9.20833C8.7593 9.20833 10.2102 10.3504 10.6763 11.9167H24.9159C25.5146 11.9167 26 12.3975 26 13C26 13.5983 25.5152 14.0833 24.9159 14.0833H10.6763ZM15.3237 21.125C15.7898 19.5588 17.2407 18.4167 18.9583 18.4167C20.676 18.4167 22.1269 19.5588 22.593 21.125H24.9159C25.5146 21.125 26 21.6059 26 22.2083C26 22.8066 25.5152 23.2917 24.9159 23.2917H22.593C22.1269 24.8579 20.676 26 18.9583 26C17.2407 26 15.7898 24.8579 15.3237 23.2917H1.08409C0.485362 23.2917 0 22.8108 0 22.2083C0 21.61 0.484758 21.125 1.08409 21.125H15.3237ZM15.3237 2.70833C15.7898 1.14211 17.2407 0 18.9583 0C20.676 0 22.1269 1.14211 22.593 2.70833H24.9159C25.5146 2.70833 26 3.18919 26 3.79167C26 4.38998 25.5152 4.875 24.9159 4.875H22.593C22.1269 6.44122 20.676 7.58333 18.9583 7.58333C17.2407 7.58333 15.7898 6.44122 15.3237 4.875H1.08409C0.485362 4.875 0 4.39415 0 3.79167C0 3.19336 0.484758 2.70833 1.08409 2.70833H15.3237ZM18.9583 5.41667C19.8558 5.41667 20.5833 4.68913 20.5833 3.79167C20.5833 2.8942 19.8558 2.16667 18.9583 2.16667C18.0609 2.16667 17.3333 2.8942 17.3333 3.79167C17.3333 4.68913 18.0609 5.41667 18.9583 5.41667ZM18.9583 23.8333C19.8558 23.8333 20.5833 23.1058 20.5833 22.2083C20.5833 21.3109 19.8558 20.5833 18.9583 20.5833C18.0609 20.5833 17.3333 21.3109 17.3333 22.2083C17.3333 23.1058 18.0609 23.8333 18.9583 23.8333ZM7.04167 11.375C6.1442 11.375 5.41667 12.1025 5.41667 13C5.41667 13.8975 6.1442 14.625 7.04167 14.625C7.93913 14.625 8.66667 13.8975 8.66667 13C8.66667 12.1025 7.93913 11.375 7.04167 11.375Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {isFilterMenuOpen && (
        <div className={Styles.filterDropdown}>
          {/* Your custom filter dropdown content goes here */}
          <p>
            <PriceDropDownMob></PriceDropDownMob>
          </p>
        </div>
      )}
    </div>
  );
};

export default MobNavbar;
