import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from '../pages/Blogs/Blog/Blog';
import BlogDetails from '../pages/Blogs/BlogDetails/BlogDetails';
import Blogs from '../pages/Blogs/Blogs/Blogs';
import Contact from '../pages/Contact/Contact';
import AboutUs from '../pages/Home/AboutUs/AboutUs';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Register from '../pages/Register/Register';
import FlightSearchs from '../pages/SearchBoxes/Flight/FlightSearch/FlightSearchs/FlightSearchs';
import Services from '../pages/Services/Services/Services';
import TestComponent from '../pages/TestComponent/TestComponent';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="test" element={ <NotFound /> }></Route>
                <Route path="Services" element={ <Services /> }></Route>
                <Route path="Contact" element={ <Contact /> }></Route>
                <Route path="About" element={ <AboutUs /> }></Route>
                <Route path="Blogs" element={ <Blogs /> } />
                <Route path="Blogs/:slug" element={ <BlogDetails /> } />
                <Route path="FlightSearchs" element={ <FlightSearchs /> } />
                <Route path="Login" element={ <Login /> } />
                <Route path="Register" element={ <Register /> } />

                <Route path="*" element={ <NotFound /> }></Route>
            </Routes>
        </>
    );
};

export default Routers;