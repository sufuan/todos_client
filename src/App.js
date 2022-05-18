import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTodos from './Components/AddTodos/AddTodos';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={ <Home></Home>}></Route>
       {/* <Route path='/addtodos' element={<AddTodos></AddTodos>}></Route> */}
     </Routes>
    </div>
  );
};

export default App;