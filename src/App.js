
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/index'
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';
function App() {
  return (
    <div className='App'>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<Home />} >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
