import React from 'react';
import { useForm } from 'react-hook-form';


const AddTodos = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data);


        fetch('http://localhost:4000/addtodos', {
            method: 'POST',
            body: JSON.stringify({
                data: data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(data => console.log(data))




    }
    return (
        <div >
                 <h1 className='text-2xl text-center'> Add New todos</h1>
            <div className=''>

                <form className='flex justify-center items-center' onSubmit={handleSubmit(onSubmit)}>

                    <div className="">
                        <label className="label">
                            <span className="label-text">Todo title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="todo-title"
                            className="shadow appearance-none border w-100 rounded  py-2 px-3 mr-4 text-grey-darker"
                            {...register("todosTitle", {
                                required: {
                                    value: true,
                                    message: 'todosTitle is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.todosTitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.todosTitle.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="shadow appearance-none border rounded  py-2 px-3 mr-4 text-grey-darker"

                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>

                    <input className='btn   text-white' type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default AddTodos;