import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Landing from './Components/Landing/Landing';
import Homepage from './Components/Homepage/Homepage';
import ToDo from './Components/ToDO/ToDo';
import Food from './Components/Food/Food';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/food' element={<Food />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
