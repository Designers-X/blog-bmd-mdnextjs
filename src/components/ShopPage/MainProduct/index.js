import React, { useState } from 'react';
import Styles from './Styles.module.scss';
import TopSellingProduct from 'components/ShopPage/TopSellingProduct';
import product from '/json/product..json';
import Modal from './ModalShop/modal';
import Link from 'next/link';

function MainProduct() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = product.Products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(product.Products.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [isElementVisible, setElementVisibility] = useState(false);

  const toggleVisibility = () => {
    setElementVisibility(!isElementVisible);
  };

  const handleClick = () => {
    toggleModal();
    toggleVisibility();
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={toggleModal}></Modal>

      <div onClick={handleClick} className={Styles.cartBox}>
        {isElementVisible && (
          <div className={Styles.arrowblack}>
            <svg
              className={Styles.svgCartArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.56642 8.97842C0.811192 8.53454 0.811192 7.46237 1.56642 7.01849L13.2331 0.161537C14.0107 -0.295497 15 0.253188 15 1.1415L15 14.8554C15 15.7437 14.0107 16.2924 13.2331 15.8354L1.56642 8.97842Z"
                fill="black"
              />
            </svg>
          </div>
        )}

        <svg
          className={Styles.svgCart}
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="34"
          viewBox="0 0 49 34"
          fill="none"
        >
          <path
            d="M48.2546 24.4246H13.1974L7.40646 1.23123C7.31737 0.904568 7.0204 0.666992 6.67889 0.666992H0.739495C0.323737 0.666992 -0.00292969 0.993659 -0.00292969 1.40942C-0.00292969 1.82517 0.323737 2.15184 0.739495 2.15184H6.0998L11.9056 25.3452C11.9798 25.6718 12.2768 25.9094 12.6183 25.9094H18.5577H42.3153H48.2546C48.6704 25.9094 48.9971 25.5828 48.9971 25.167C48.9971 24.7512 48.6704 24.4246 48.2546 24.4246Z"
            fill="white"
          />
          <path
            d="M18.5573 33.3334C20.6075 33.3334 22.2695 31.6714 22.2695 29.6213C22.2695 27.5712 20.6075 25.9092 18.5573 25.9092C16.5072 25.9092 14.8452 27.5712 14.8452 29.6213C14.8452 31.6714 16.5072 33.3334 18.5573 33.3334Z"
            fill="white"
          />
          <path
            d="M42.3151 33.3334C44.3653 33.3334 46.0273 31.6714 46.0273 29.6213C46.0273 27.5712 44.3653 25.9092 42.3151 25.9092C40.265 25.9092 38.603 27.5712 38.603 29.6213C38.603 31.6714 40.265 33.3334 42.3151 33.3334Z"
            fill="white"
          />
        </svg>

        <h5>00</h5>
      </div>

      <div className={Styles.container}>
        <div>
          <div className={Styles.MainProductList}>
            <div className={Styles.MainProductListAA}>
              <h2 className={Styles.HTwoClass}>Where Style Becomes Everyday Elegance!</h2>
              <p>
                Every man’s life ends the same way. It is only details of how he lived and how he died that distinguish
                one man from another
              </p>
              <div className={Styles.MainProductListA}>
                {currentProducts.map((product, index) => (
                  <div key={index} className={Styles.MainImgControl}>
                    <div className={Styles.Control1}>
                      <div className={Styles.ControlI}>
                        <Link href={product.detailUrl ? product.detailUrl : ''}>
                          <img src={product.imageUrl} alt={product.name} />
                        </Link>
                      </div>

                      <div className={Styles.ImgcontentAA}>
                        <div className={Styles.ImgContent}>
                          <div className={Styles.InnerA}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>
                              <span className={Styles.DollarThin}>$</span>
                              <span>{product.price}</span>
                            </p>
                          </div>

                          <div className={Styles.InnerB}>
                            <p>
                              <img src="/package/GoldenStar.svg" alt="Star" /> {product.rating}
                            </p>
                            <div>
                              <Link href={product.detailUrl ? product.detailUrl : ''}>
                                <button>Add to Cart</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={Styles.Pagination}>
                <button
                  className={Styles.BtnBorderNone}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <svg className={Styles.flickityButtonIcon} viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      class="arrow"
                      transform="translate(100, 100) rotate(90deg) "
                    ></path>
                  </svg>
                </button>

                <div className={Styles.PageNumbers}>
                  {Array.from({ length: totalPages > 4 ? 3 : totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={currentPage === index + 1 ? Styles.ActivePage : null}
                      style={{
                        backgroundColor: currentPage === index + 1 ? '#10182f' : '#fff',
                        color: currentPage === index + 1 ? '#fff' : '#10182f',
                      }}
                    >
                      {index + 1}
                    </button>
                  ))}

                  {totalPages > 4 && <span>....</span>}

                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className={currentPage === totalPages ? Styles.ActivePage : null}
                    style={{
                      backgroundColor: currentPage === totalPages ? '#10182f' : '#fff',
                      color: currentPage === totalPages ? '#fff' : '#10182f',
                    }}
                  >
                    {totalPages}
                  </button>
                </div>

                {/* <span>{`Page ${currentPage} of ${totalPages}`}</span> */}

                <button
                  className={Styles.BtnBorderNone}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={endIndex >= product.length}
                >
                  <svg className={Styles.flickityButtonIcon1} viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      class="arrow"
                      transform="translate(100, 100) rotate(90deg) "
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className={Styles.MainProductListB}>
              <TopSellingProduct></TopSellingProduct>
            </div>
          </div>
        </div>
      </div>

      {/* <BigLastBannerImg></BigLastBannerImg> */}
    </div>
  );
}

export default MainProduct;
