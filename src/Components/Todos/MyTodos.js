import React from 'react';
import AddTodos from './AddTodos';
import Todos from './Todos';

const MyTodos = () => {
    return (
        <div>
         <AddTodos></AddTodos>
         <Todos></Todos>
        </div>
    );
};

export default MyTodos;