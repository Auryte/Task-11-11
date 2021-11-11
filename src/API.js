const requestOptions = {
  method: 'GET',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer'
};
const domain = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async ()=>{
  try {
    const response = await fetch(domain + `?_start=0&_limit=10`, requestOptions );
    return await response.json();
  } catch (error) {
    throw error;
  }
}

const fetchPostById = async (id)=>{
  try {
    const response = await fetch((domain + `/${id}`), requestOptions );
    return await response.json();
  } catch (error) {
    throw error;
  }
}

const API = {
  fetchPosts,
  fetchPostById
};

export default API;