import React, { useEffect, useState } from 'react';
import API from '../../API';
import Main from '../../components/Main';
import './detailsPage.css';
import {useParams} from 'react-router-dom';

const DetailsPage = () => {
 let {id} = useParams();

  // const currentPath = useState(window.location.pathname)
  // const postId = currentPath[0].split('/').pop();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await API.fetchPostById(id);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, [])

  return (
         <Main>
        <div class='PostDetailsContainer'>
          <div class='PostDetailsCard'>
            <h4>ID: {post.id}</h4>
            <h1 className='PostDetailsTitle'>{post.title}</h1>
            <h3>{post.body}</h3>
            <h6>User Id: {post.userId}</h6>
          </div>
        </div>

      </Main>
  )
}

export default DetailsPage;
