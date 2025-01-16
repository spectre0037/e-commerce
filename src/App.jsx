import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Remove duplicate/conflicting imports
import LandingPage from './Components/LandingPage/LandingPage';
import AboutUs from './PAGE/AboutUs/AboutUs';
import Curtains from './PAGE/Curtains/Curtains';
import ReadyMadeCurtains from './PAGE/ReadyMadeCurtains/ReadyMadeCurtains';
import Blinds from './PAGE/Blinds/Blinds';
import Wallpapers from './PAGE/Wallpapers/Wallpapers';
import Bedding from './PAGE/Bedding/Bedding';
import ContactUs from './PAGE/ContactUs/ContactUs';
import Accessories from './PAGE/Accessories/Accessories';
import Shop from './PAGE/Shop/Shop';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/curtains" element={<Curtains />} />
        <Route path="/ready-made-curtains" element={<ReadyMadeCurtains />} />
        <Route path="/blinds" element={<Blinds />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/bedding" element={<Bedding />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
