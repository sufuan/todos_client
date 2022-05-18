import React from 'react';

const SingleTodo = ({todo}) => {
  const {todosTitle,description}= todo.data

  const handleDelete =(id)=>{
    const confirmDelete = window.confirm('wannna delete?')
    if (confirmDelete) {
      console.log(id);

      const url = `https://pure-harbor-66242.herokuapp.com/products/${id}`
      fetch(url, {
        method: "DELETE",

      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
         
        })










    }
  }
    return (
        <div class="card w-96  ">
        <div class="card-body">
          <h2 class="card-title"></h2>
          <p>{todosTitle}</p>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button onClick={()=>handleDelete(todo._id)} class="btn">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SingleTodo;