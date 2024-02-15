import React from 'react';
import Styles from './Styles.module.scss';
import shopdata from '/json/Itinerary.json';
import Link from 'next/link';

function MyBagPage() {
  // const MySelect = () => {
  //     const [options, setOptions] = useState([
  //         { value: '#', label: '1' },
  //         { value: '#', label: '2' },
  //         // Add other options here
  //     ]);

  //     const updatedOptions = options.map(option => ({
  //         ...option,
  //         label: 'Qyt ' + option.label
  //     }));

  //     setOptions(updatedOptions);
  // };

  // const handleChange = event => {
  //     window.location.href = event.target.value;
  //     addQyt();
  // };

  return (
    <div>
      <section>
        <div className={Styles.ShopBanner}>
          <h2>My Bag</h2>
          <p>
            <span>Home</span>/<span>Product cart</span>{' '}
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
            <p>Keep on shopping</p>
          </div>

          <div className={Styles.KeepShoping}>
            <div className={Styles.KeepShoping1}>
              <div className={Styles.KeepShopinginner}>
                <div className={Styles.ProductDetalMain}>
                  {shopdata.ShopStoreData.map((product, index) => (
                    <div className={Styles.ProductDetal} key={index}>
                      <div className={Styles.ProductImage}>
                        {/* <img src='/package/MyBagShoe.png' /> */}
                        <img src={product.image} />
                      </div>

                      <div className={Styles.ProductContent}>
                        <div>
                          <h3> {product.name}</h3>
                          <h4>{product.madeIN}</h4>
                          <p>
                            <span>$</span>
                            {product.price}
                          </p>
                        </div>

                        <div className={Styles.Quantity}>
                          <div className={Styles.Share}>
                            <label for="cars">Qty</label>
                            <select>
                              <option value="#" selected="selected">
                                1
                              </option>
                              <option value="#">2</option>
                              {/* <!--<option disabled>2</option> */}
                              <option value="#">3</option>
                            </select>
                            |<p className={Styles.paraControl}>Share</p>
                          </div>

                          <div className={Styles.DeleteButton}>
                            <button>delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* orderSummary
                        
  "totalOrder":1620.00 */}

            <div className={Styles.KeepShoping2}>
              {shopdata.orderSummary.map((product, index) => (
                <div key={index} className={Styles.OrderSummary}>
                  <p>Order Summary</p>
                  <div className={Styles.OrderTotal}>
                    <div className={Styles.Order1}>Order total :</div>
                    <div className={Styles.Order2}>
                      <span>$</span>
                      {product.totalOrder}
                    </div>
                  </div>
                  <Link href="/shop/checkout">
                    <button>check Out for ${product.totalOrder} </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyBagPage;
