import React from 'react';
import Styles from './Styles.module.scss';
import RightsideSmallBanner from 'components/ShopPage/MainProduct/RightsideSmallBanner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const topSellingProductsData = [
  {
    image: '/package/TopSelling1.png',
    title: 'GLADIATOR SANDAL',
    description: 'The Famouse da Costanzo’s Shop',
  },
  {
    image: '/package/MainImage1.png',
    title: 'Fragrance',
    description: 'The Essence of Capri in a bottle',
  },
  {
    image: '/package/MainImage2.png',
    title: 'Ferragamo shoe',
    description: 'A Dynasty “Made in Italy”',
  },
];

function TopSellingProduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <section className={Styles.CrousCustom}>
        <div className={Styles.container}>
          <h2 className={Styles.TopH2}>Top Selling Categories</h2>
          <Carousel
            className={Styles.CarouselStyles}
            showDots={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            keyBoardControl={true}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            responsive={responsive}
          >
            {topSellingProductsData.map((product, index) => (
              <div className={Styles.ProductTop} key={index}>
                <div className={Styles.ProductTopImg}>
                  <img src={product.image} alt={product.title} />
                  <h4>{product.title}</h4>
                </div>
                <p>{product.description}</p>
              </div>
            ))}
          </Carousel>
          <RightsideSmallBanner />
        </div>
      </section>
    </div>
  );
}

export default TopSellingProduct;
