import React from 'react';
import HeroSection from 'components/ShopPage/HeroSection';
import SearchFilter from 'components/ShopPage/SearchFilter';
import MainProduct from 'components/ShopPage/MainProduct';
// import MobNavbar from 'components/ShopPage/MobNavbar/index';
export default function index() {
  return (
    <div>
      <HeroSection></HeroSection>
      <SearchFilter></SearchFilter>
      {/* <MobNavbar></MobNavbar> */}
      <MainProduct></MainProduct>
    </div>
  );
}
