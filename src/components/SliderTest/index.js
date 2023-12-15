import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Styles from './Styles.module.scss';

function SliderTest() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      autoWidth: false,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      autoWidth: false,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      autoWidth: false,
    },
  };
  return (
    <div className={Styles.sliderflexx}>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
      ;
    </div>
  );
}

export default SliderTest;
