

import React, { useRef } from 'react';
import './home.css';
import Carousel from '../components/Carousel';
import Banking from '../components/Banking';
import OnlineLearningComponent from '../components/OnlineLearningComponent';
import AutoSliderCarousel from './AutoSlideCarousel';
import GadgetsCarousel from './GadgetsCarousel';
import Latestshop from './Latestshop';
import NowOrNeverDeals from '../components/noworneverdeals';
import FestivalSale from '../components/FestivalSale';
import CrazyDeals from '../components/CrazyDeals';
import CategorySlider from '../components/CategorySlider';
import AffiliateBrands from '../components/AffiliateBrands';
import Customerreviewsection from '../components/ReviewSection';

function Home() {
    // Create a ref for Latestshop section
    const latestShopRef = useRef(null);

    // Function to scroll to Latestshop
    const scrollToLatestShop = () => {
        if (latestShopRef.current) {
            latestShopRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {/* Pass the scroll function to Carousel */}
            <CategorySlider />
            <Carousel scrollToLatestShop={scrollToLatestShop} />
            <NowOrNeverDeals />
            {/* Add ref to Latestshop */}
            <Latestshop ref={latestShopRef} />
            <FestivalSale />
            <AffiliateBrands />
            <CrazyDeals />
            <AutoSliderCarousel />
            <GadgetsCarousel />
            <OnlineLearningComponent />
            <Banking />
            <Customerreviewsection />
        </div>
    );
}

export default Home;