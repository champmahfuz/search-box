import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banners from '../Banner/Banners/Banners';
import LightningDeals from '../LightningDeals/LightningDeals/LightningDeals';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banners />
            {/* <SearchFlight /> */ }
            <LightningDeals />
            <Packages />
            <Footer />
        </div>
    );
};

export default Home;