import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Todos = () => {
    const [todos, setTodos] = useState([])
    // const [active, setActive] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/todos')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTodos(data)
            })


    }, [])

    const handleComplete=id=>{
        // // console.log(id);
        // setTodos(todos.map(item=>{
        //     if(item._id===id){
        //        return {
        //            ...item, completed: !item.completed

        //        }

        //     // setActive(!active)
        //     }console.log(todos);
        //     return item
            
        // }))
        toast.success('f')
    }

    const handleDelete =(id)=>{
        const confirmDelete = window.confirm('wannna delete?')
        if (confirmDelete) {
          console.log(id);
    
          const url = `http://localhost:4000/todos/${id}`
          fetch(url, {
            method: "DELETE",
    
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.deletedCount > 0) {
                console.log('deleted');
                const remaining = todos.filter(itms => itms._id !== id)
                setTodos(remaining)
              }
             
            })
    
 }
      }
    return (
        <div>
            <div className="text-center">
                <h1 className='text center text-2xl'>All todos {todos.length}</h1>

            </div>











            <div>
      <div className='text-center flex justify-end my-9'>
    
      </div>
      <section>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  name
                </th>

                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>

                {
                    todos.map(todo=>{
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                           <span>   {todo?.data?.todosTitle}</span>
                            </th>
      
      
                            <td className="px-6 py-4">
                              {todo?.data?.description}
                            </td>
                            <td className="px-6 py-4 text-right">
                               <button onClick={()=>handleComplete(todo._id)} class="btn btn-xs btn-success mx-4">completed</button>
                               <button onClick={()=>handleDelete(todo._id)} class="btn btn-xs btn-warning">Delete</button>
      
      
      
                            </td>
                          </tr>
                        )
                    })
                }

            

            </tbody>
          </table>
        </div>
      </section>

    </div>
</div>
    );
};

export default Todos;