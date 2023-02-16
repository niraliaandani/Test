import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
const SingleService = React.lazy(() => import("pages/SingleService"));
const Components = React.lazy(() => import("pages/Components"));
const SingleNews = React.lazy(() => import("pages/SingleNews"));
const News = React.lazy(() => import("pages/News"));
const Appointment = React.lazy(() => import("pages/Appointment"));
const Contact = React.lazy(() => import("pages/Contact"));
const Doctors = React.lazy(() => import("pages/Doctors"));
const Services = React.lazy(() => import("pages/Services"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return <React.Suspense fallback={<>Loading...</>}><Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
      <Route path="/aboutus" element={<Aboutus />} /><Route path="/services" element={<Services />} /><Route path="/doctors" element={<Doctors />} /><Route path="/contact" element={<Contact />} /><Route path="/appointment" element={<Appointment />} /><Route path="/news" element={<News />} /><Route path="/singlenews" element={<SingleNews />} /><Route path="/components" element={<Components />} /><Route path="/singleservice" element={<SingleService />} /><Route path="/dhiwise-dashboard" element={<Home />} /></Routes>
    </Router></React.Suspense>;
};
export default ProjectRoutes;