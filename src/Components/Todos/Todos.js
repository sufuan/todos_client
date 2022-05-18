import React, { useEffect, useState } from 'react';
import SingleTodo from './SingleTodo';

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/todos')
        .then(res=>res.json())
        .then(data=>setTodos(data))
    },[])
    return (
        <div>
            <h1>all todos {todos.length}</h1>
            {
                todos.map(todo=><SingleTodo
                key={todo._id}
                todo={todo}
                ></SingleTodo>)
            }

        </div>
    );
};

export default Todos;