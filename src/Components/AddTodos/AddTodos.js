import React from 'react';
import { useForm } from 'react-hook-form';


const AddTodos = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data);
        
        
        fetch('http://localhost:4000/addtodos', {
            method: 'POST',
            body: JSON.stringify({
               data:data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
           .then(data=>console.log(data))
                 



    }
    return (
        <div className='flex justify-center items-center'>
         
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Todo title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="todo-title"
                        className="input input-bordered w-full"
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
                        className="input input-bordered w-full"
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

                <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default AddTodos;