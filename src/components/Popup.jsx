import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
 
const Popup = props => {
  return (
    <div className='PopupBox'>
      <div className='Box'>
        {props.content}
        <Link exact to='/'> <button className='PopupButton' onClick={props.handleClose}>View post</button></Link>
      </div>
    </div>
  );
};
 
export default Popup;