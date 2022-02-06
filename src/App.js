import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Landing from './Components/Landing/Landing';
import Homepage from './Components/Homepage/Homepage';
import ToDo from './Components/ToDO/ToDo';
import Food from './Components/Food/Food';
import Wallet from './Components/Wallet/Wallet';
import Notes from './Components/Notes/Notes';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Landing />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/food' element={<Food />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
