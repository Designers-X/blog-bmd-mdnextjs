import React, { useState } from 'react';
import Styles from './Styles.module.scss';
import TopSellingProduct from 'components/ShopPage/TopSellingProduct';
import BigLastBannerImg from 'components/ShopPage/BigLastBannerImg';

function MainProduct() {
  const allProducts = [
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 2,
      name: 'Jewellery',
      description: 'Let your style shine',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg2.png',
    },
    {
      id: 3,
      name: 'Gladiator Sandal',
      description: 'Contanzo’s style',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg3.png',
    },
    {
      id: 4,
      name: 'Carthusia',
      description: 'Legends of Perfume',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg4.png',
    },
    {
      id: 6,
      name: 'Perfume',
      description: 'Carthusia Fragrance',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg6.png',
    },
    {
      id: 7,
      name: 'Italian Wine',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg7.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg2.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg4.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg7.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg6.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg4.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg3.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg7.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg6.png',
    },

    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },

    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },

    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },

    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },

    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
    {
      id: 1,
      name: 'Ferragamo shoe',
      description: 'Made in Italy',
      price: 540,
      rating: 4.6,
      imageUrl: '/package/MainImg1.png',
    },
  ];
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
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
                        <img src={product.imageUrl} alt={product.name} />
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
                              <button>Add to Cart</button>
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
                  {Array.from({ length: totalPages }, (_, index) => (
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
                </div>

                {/* <span>{`Page ${currentPage} of ${totalPages}`}</span> */}

                <button
                  className={Styles.BtnBorderNone}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={endIndex >= allProducts.length}
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
      <BigLastBannerImg></BigLastBannerImg>
    </div>
  );
}

export default MainProduct;
