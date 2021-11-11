import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './style.css';

const Main = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Main;
