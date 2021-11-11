import React from 'react';
import './listPage.css';

const Post = ({title, body}) => {
  return (
    <div className='PostCard' >
            <h2 className='PostTitle'>{title}</h2>
            <p className='PostBody'>{body}</p>
        </div>
  )
}

export default Post;
