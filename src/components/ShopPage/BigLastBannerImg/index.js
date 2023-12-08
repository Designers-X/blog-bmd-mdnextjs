import React from 'react';
import Styles from './Style.module.scss';

function BigLastBannerImg() {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.BigImg}>
          <img src="/package/MainBigBannerImg.png" />
        </div>
      </div>
    </div>
  );
}

export default BigLastBannerImg;
