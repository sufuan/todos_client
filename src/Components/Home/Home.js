import React from 'react';
import AddTodos from '../AddTodos/AddTodos';
import Todos from '../Todos/Todos';

const Home = () => {
    return (
        <div>
        
            <AddTodos></AddTodos>
            <Todos></Todos>
        </div>
    );
};

export default Home;