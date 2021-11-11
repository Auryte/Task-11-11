import React, { useState, useEffect } from 'react';
import API from '../../API';
import Post from './Post';
import './listPage.css';
import Main from '../../components/Main';
import { Link } from 'react-router-dom';


const ListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await API.fetchPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, [])

  return (
   
      <Main>
        <div className='PostsContainer'>
          {posts.map(post => (
            <Link exact to={`/details/${post.id}`} className='PostLink' >
              <Post
                key={post.id}
                title={post.title}
                body={post.body}
              />
            </Link>
          ))
          }
        </div>
      </Main>
  )
}

export default ListPage;
