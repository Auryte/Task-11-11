import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Button = ({text, link, className}) => {
  return (
      
        <Link className='ButtonLink' exact to={link}><button className={className}>{text}</button></Link>
      
  )
}

export default Button;
