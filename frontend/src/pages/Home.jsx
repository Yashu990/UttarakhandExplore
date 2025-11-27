import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryCards from '../components/home/CategoryCards';
import FeaturedStories from '../components/home/FeaturedStories';
import ExploreSection from '../components/home/ExploreSection';
import CharDhamSection from '../components/home/CharDhamSection';
import LatestBlogs from '../components/home/LatestBlogs';
import VideosPreview from '../components/home/VideosPreview';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <CategoryCards />
            <FeaturedStories />
            <ExploreSection />
            <CharDhamSection />
            <LatestBlogs />
            <VideosPreview />
        </div>
    );
};

export default Home;
