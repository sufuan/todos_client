import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTodos from './Components/AddTodos/AddTodos';
import Dto from './Components/Dto';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div className="px-5">
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={ <Home></Home>}></Route>
       <Route path='/d' element={ <Dto></Dto>}></Route>
       {/* <Route path='/addtodos' element={<AddTodos></AddTodos>}></Route> */}
     </Routes>
    </div>
  );
};

export default App;