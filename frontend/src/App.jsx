import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import BlogListing from './pages/BlogListing';
import SingleBlog from './pages/SingleBlog';
import Categories from './pages/Categories';
import Videos from './pages/Videos';
import AboutUttarakhand from './pages/AboutUttarakhand';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs" element={<BlogListing />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/about" element={<AboutUttarakhand />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/category/:category" element={<BlogListing />} />
                        <Route path="/blog/:id" element={<SingleBlog />} />
                        {/* Additional routes will be added here */}
                    </Routes>
                </Layout>
            </Router>
        </LanguageProvider>
    );
}

export default App;

