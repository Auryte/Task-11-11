import React from 'react';
import {  useParams } from "react-router-dom";
import Button from './Button';
import './style.css';

const Navbar = () => {
  let {id, newpost} = useParams();
  
  return (
  <header>
     <Button text='All posts' link='/'  className={id || newpost  ?  'Button' : 'ButtonDisabled' }/>
     <Button text='Create new post' link='/newpost' className={ newpost ? 'ButtonDisabled': 'Button'} />
  </header>
  )
}

export default Navbar;
