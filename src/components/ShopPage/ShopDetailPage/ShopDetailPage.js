import React, { useState } from 'react';
import Styles from './Styles.module.scss'; // Import your styles
import ShopTabs from './ShopTabs'; // Import ShopTabs component if it's in a separate file
// import ShopDetailData from '/json/Itinerary.json';
import Itinerary from '/json/Itinerary.json';
import Link from 'next/link';

const YourProductPageComponent = () => {
  const min = 1;
  const max = 10;
  const [quantity, setQuantity] = useState(1);

  const [currentImage, setCurrentImage] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div>
      {Itinerary.ShopDetailData.map((product, index) => (
        <section key={index} className={Styles.ShopMainP}>
          <div className={Styles.ShopBanner}>
            <h2>Shop</h2>
            <p>
              <span>Home</span>/<span>Product</span>
            </p>
          </div>

          <div className={Styles.container}>
            <div className={Styles.ParentClass}>
              <div className={Styles.FirstClass}>
                <div className={Styles.galleryTop}>
                  <img src={product.images[currentImage]} alt={`Image ${currentImage}`} />
                </div>

                <div className={Styles.galleryThumbs}>
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index}`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>
              </div>

              <div className={Styles.SecondParent}>
                <h3>{product.name}</h3>
                <p className={Styles.lineContent}>
                  <span className={Styles.SvgImg}>
                    {Array.from({ length: Math.floor(product.rating) }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
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
                  <span className={Styles.rating}>{product.rating} </span>{' '}
                  <span className={Styles.review}> ({product.reviews} review)</span>
                </p>

                <h5>${product.price}</h5>

                <p className={Styles.Second}>{product.description}</p>

                <div className={Styles.SizeArea}>
                  <h5>Size</h5>

                  <div className={Styles.boxControl}>
                    {product.sizes.map((size) => (
                      <label key={size} className={Styles.SizeRadio}>
                        <input type="radio" name="size" id={`size${size}`} />
                        <span className={Styles.ChangeSize}>{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={Styles.QBoxee}>
                  <form className={Styles.Quantity} action="/action_page.php">
                    <label>QTY</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      inputProps={{ min, max }}
                      value={quantity} // Assuming quantity is defined somewhere in your component state
                      defaultValue={product.quantity}
                      onChange={(e) => {
                        var value = parseInt(e.target.value, 10);
                        if (value > max) value = max;
                        if (value < min) value = min;
                        setQuantity(value); // Update the quantity instead of the product
                      }}
                    />
                  </form>

                  <div className={Styles.BuyButton}>
                    <Link href="/shop/cart">Buy Now</Link>
                  </div>
                </div>

                <div className={Styles.controlparag}>
                  <p>Safe Payment</p>
                  <div className={Styles.SafePament}>
                    <img src="/package/paymantImg23.svg" />
                  </div>
                </div>

                <div className={Styles.SkuProduct}>
                  <p>
                    SKU: <span>{product.sku}</span>
                  </p>
                  <p>
                    Categories: <span>{product.categories.join(', ')}</span>
                  </p>
                  <p>
                    Tags: <span>{product.tags.join(', ')}</span>
                  </p>
                </div>
              </div>
            </div>

            <ShopTabs />
          </div>
        </section>
      ))}
    </div>
  );
};

export default YourProductPageComponent;
