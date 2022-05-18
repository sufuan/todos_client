import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LOgin from './Auth/Login/LOgin';
import Register from './Auth/Register/Register'
import AddTodos from './Components/Todos/AddTodos';
import Dto from './Components/Dto';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import MyTodos from './Components/Todos/MyTodos';
import RequireAuth from './Auth/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="px-5">
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={ <Home></Home>}></Route>
     
       <Route path='/login' element={<LOgin></LOgin>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/todos' element={<RequireAuth>
        <MyTodos></MyTodos>
       </RequireAuth>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
};

export default App;