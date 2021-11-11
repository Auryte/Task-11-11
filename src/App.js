import './App.css';
// import Route from './components/Route';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import FormPage from './pages/FormPage/FormPage';
import ListPage from './pages/ListPage/ListPage';
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes >
          <Route exact path='/' element={<ListPage />}/>
           
          <Route exact path='/:newpost' element={<FormPage />}/>
           
          <Route exact path='/details/:id'  element={<DetailsPage />}/>
         
      </Routes>
    </div>
  );
}

export default App;
