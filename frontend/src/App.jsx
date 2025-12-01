import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleGuard from './components/common/RoleGuard';
import { ROLES } from './utils/roles';
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
import Store from './pages/Store';
import ProductListing from './pages/ProductListing';
import ProductPage from './pages/ProductPage';
import ContributorDashboard from './pages/contributor/ContributorDashboard';
import SubmitStory from './pages/contributor/SubmitStory';
import AdminDashboard from './pages/admin/AdminDashboard';
import SubmissionsQueue from './pages/admin/SubmissionsQueue';
import SubmissionReview from './pages/admin/SubmissionReview';
import Culture from './pages/Culture';
import PlanYatra from './pages/PlanYatra';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<BlogListing />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/plan-yatra" element={<PlanYatra />} />
                    <Route path="/about" element={<AboutUttarakhand />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/culture" element={<Culture />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/category/:category" element={<BlogListing />} />
                    <Route path="/blog/:id" element={<SingleBlog />} />
                    {/* Store Routes */}
                    <Route path="/store" element={<Store />} />
                    <Route path="/store/:category" element={<ProductListing />} />
                    <Route path="/store/product/:id" element={<ProductPage />} />

                    {/* Contributor Portal Routes */}
                    <Route
                        path="/contributor/dashboard"
                        element={
                            <RoleGuard requiredRole={ROLES.CONTRIBUTOR}>
                                <ContributorDashboard />
                            </RoleGuard>
                        }
                    />
                    <Route
                        path="/contributor/submit"
                        element={
                            <RoleGuard requiredRole={ROLES.CONTRIBUTOR}>
                                <SubmitStory />
                            </RoleGuard>
                        }
                    />

                    {/* Admin Portal Routes */}
                    <Route
                        path="/admin/dashboard"
                        element={
                            <RoleGuard requiredRole={ROLES.ADMIN}>
                                <AdminDashboard />
                            </RoleGuard>
                        }
                    />
                    <Route
                        path="/admin/submissions"
                        element={
                            <RoleGuard requiredRole={ROLES.ADMIN}>
                                <SubmissionsQueue />
                            </RoleGuard>
                        }
                    />
                    <Route
                        path="/admin/submissions/:id/review"
                        element={
                            <RoleGuard requiredRole={ROLES.ADMIN}>
                                <SubmissionReview />
                            </RoleGuard>
                        }
                    />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
