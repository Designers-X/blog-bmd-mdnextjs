import React from 'react';
import Styles from './Styes.module.scss';
import deliverProduct from '/json/Itinerary.json';

function CheckProducts() {
  return (
    <div>
      <div className={Styles.SideProduct}>
        {deliverProduct.deliveryTime.map((product, index) => (
          <h6 key={index}>
            <span>{product.OrderCorfirm} </span>-<span> {product.ShippedOrder}</span>
          </h6>
        ))}
        <p className={Styles.Delivery}>Delivery between</p>

        <div className={Styles.MaindivSide}>
          {deliverProduct.deliveryData.map((product, index) => (
            <div className={Styles.SideFullDiv} key={index}>
              <div className={Styles.SideImg}>
                <img src={product.image} />
              </div>

              <div className={Styles.SideContent}>
                <h3>{product.name} </h3>

                <span className={Styles.StarSvg}>
                  {Array.from({ length: Math.floor(product.rating) }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2.25771 9.6517C2.01619 9.77584 1.74271 9.55889 1.79133 9.28172L2.30991 6.32579L0.108454 4.22789C-0.0972844 4.03183 0.00921575 3.67335 0.284834 3.6342L3.34638 3.19928L4.71146 0.495191C4.83442 0.251603 5.16753 0.251603 5.2905 0.495191L6.65557 3.19928L9.71712 3.6342C9.99274 3.67335 10.0992 4.03183 9.8935 4.22789L7.69204 6.32579L8.21062 9.28172C8.25925 9.55889 7.98577 9.77584 7.74424 9.6517L5.00098 8.24173L2.25771 9.6517Z"
                        fill="#FF9F00"
                      />
                    </svg>
                  ))}
                </span>

                <p>{product.MadeIN}</p>

                <div className={Styles.Quantity}>
                  <div className={Styles.Share}>
                    <form action="/action_page.php">
                      <div className={Styles.selectDiv}>
                        <div className={Styles.quntity}>QTY :</div>
                        <select className={Styles.selectNon}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </form>
                  </div>

                  <div className={Styles.PriceTag}>
                    <p>${product.PriceTag}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {deliverProduct.deliveryTotal.map((product, index) => (
          <div key={index} className={Styles.jsonControl}>
            <div className={Styles.allTotal}>
              <div className={Styles.allTotal1}>
                <h6>Total</h6>
              </div>

              <div className={Styles.allTota2}>
                <p>$ {product.totalPrice}</p>
              </div>
            </div>

            <p className={Styles.TotalPara}>{product.taxFees} </p>
            <h3 className={Styles.TotalHead}> {product.YouSaved}</h3>
          </div>
        ))}
      </div>

      {deliverProduct.deliveryExcelent.map((product, index) => (
        <div key={index} className={Styles.SideProduct}>
          <span className={Styles.SpanStar}>
            {Array.from({ length: Math.floor(product.rating) }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.70906 11.582C2.41923 11.731 2.09105 11.4707 2.1494 11.1381L2.7717 7.59095L0.129949 5.07347C-0.116937 4.83819 0.0108636 4.40802 0.341606 4.36104L4.01546 3.83914L5.65355 0.594229C5.80111 0.301924 6.20084 0.301924 6.3484 0.594229L7.98649 3.83914L11.6603 4.36104C11.9911 4.40802 12.1189 4.83819 11.872 5.07347L9.23026 7.59095L9.85255 11.1381C9.9109 11.4707 9.58273 11.731 9.2929 11.582L6.00098 9.89008L2.70906 11.582Z"
                  fill="#FF9F00"
                />
              </svg>
            ))}
          </span>

          <h5 className={Styles.Exxeclant}>{product.ratingNum}</h5>
          <p className={Styles.Exreview}>{product.review}</p>
        </div>
      ))}
    </div>
  );
}

export default CheckProducts;
