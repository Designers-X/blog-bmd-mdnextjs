import React from 'react';
import HeroSection from 'components/ShopPage/HeroSection';
import SearchFilter from 'components/ShopPage/SearchFilter';
import MainProduct from 'components/ShopPage/MainProduct';
import MobNavbar from 'components/ShopPage/MobNavbar/index';
import CustomSlider from 'components/ShopPage/TopSellingProduct/MobTopSelling/index';
import BigLastBannerImg from 'components/ShopPage/BigLastBannerImg/index';
export default function index() {
  return (
    <div>
      <HeroSection></HeroSection>
      <SearchFilter></SearchFilter>
      <MobNavbar></MobNavbar>
      <MainProduct></MainProduct>
      <CustomSlider></CustomSlider>
      <BigLastBannerImg></BigLastBannerImg>
    </div>
  );
}
