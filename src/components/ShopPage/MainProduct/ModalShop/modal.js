import React, { useState } from 'react';
import styles from './Styles.module.scss';
import deliverProduct from '/json/Itinerary.json';

const Modal = ({ isOpen, children }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '20%',
    right: '90px',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    padding: '20px',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    // maxWidth: '500px',
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className={styles.ModalWidth} style={modalStyle}>
      <div className={styles.viewCart}>
        <h3> View Cart</h3>

        <div className={styles.ItemsAll}>
          <p>Deselect all items </p>
          <h6>Price</h6>
        </div>

        {deliverProduct.ModalData.map((product, index) => (
          <div className={styles.ProductTotal} key={index}>
            <div className={styles.ProductBox}>
              <div className={styles.CheckBoxSet}>
                <input type="checkbox" />
                <div className={styles.ImageWidhtControl}>
                  <img src={product.image} />
                </div>
              </div>
              <div className={styles.ModalSet}>
                <div className={styles.contentInner}>
                  <h3>{product.name}</h3>
                  <h4> {product.madeIN}</h4>
                  <h5>{product.rank} </h5>

                  <div className={styles.spanControl}>
                    <span>
                      <label htmlFor="quantity">Qty:</label>
                      <select id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange}>
                        {[...Array(10).keys()].map((value) => (
                          <option key={value + 1} value={value + 1}>
                            {value + 1}
                          </option>
                        ))}
                      </select>
                    </span>
                    <span>Delete </span>
                    <span>Share </span>
                    <span>View</span>{' '}
                  </div>
                </div>
                <div className={styles.priceAll}>
                  <h6>
                    <span>$</span>
                    {product.price}{' '}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}

        {deliverProduct.ModalSubtotalData.map((product, index) => (
          <p key={index} className={styles.locolo}>
            Subtotal ({product.subTotal}) : <span className={styles.dollor}>$</span>
            <span> {product.subtotalAmmount}</span>{' '}
          </p>
        ))}

        <div className={styles.btnBlack}>
          <a>Process to Buy</a>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Modal;
