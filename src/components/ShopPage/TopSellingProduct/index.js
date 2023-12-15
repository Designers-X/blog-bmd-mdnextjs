import React from 'react';
import Styles from './Style.module.scss';
import RightsideSmallBanner from 'components/ShopPage/MainProduct/RightsideSmallBanner';
import Data1 from '/json/product..json';

function TopSellingProduct() {
  return (
    <div>
      <section>
        <div className={Styles.container}>
          <h2 className={Styles.TopH2}>Top Selling Categories</h2>
          <div className={Styles.topSelling}>
            {Data1.TopSellingProductsData.map((product, index) => (
              <div className={Styles.ProductTop} key={index}>
                <div className={Styles.ProductTopImg}>
                  <img src={product.image} alt={product.title} />
                  <h4>{product.title}</h4>
                </div>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
          <RightsideSmallBanner />
        </div>
      </section>
    </div>
  );
}

export default TopSellingProduct;
