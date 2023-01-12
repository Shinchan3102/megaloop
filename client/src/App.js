
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchAll } from './actions/post';
import History from './component/History/History';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
// import Auth from './Components/Auth';
// import DetailedPost from './Components/DetailedPost';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchAll());
  },[dispatch]);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/:category' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
