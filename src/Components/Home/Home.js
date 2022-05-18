import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase';



const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div>



      < div className='h-screen'>
        <div className='container flex flex-col items-center justify-center h-full'>
          <section className='text-center'>
            <h1 className='mb-5 text-4xl font-bold text-transparent from-indigo-600 md:text-5xl bg-clip-text bg-gradient-to-tr from to-pink-400'>
              Todo
            </h1>
            <h5 className='text-lg text-gray-800'>
              Stay on top of your to-dos
            </h5>
          </section>
          <section className='max-w-xs mx-auto mt-8'>
           {user ? <Link className='text-center text-2xl text-indigo-500' to='/todos'> manage all todos</Link> : <div className='flex flex-row items-center justify-between gap-x-5'>
              <Link to='/login'
                className='w-full px-10 py-3 font-semibold text-white transition duration-300 ease-in-out bg-indigo-500 rounded-md hover:bg-indigo-600'

              >
                Log in
              </Link>
              <Link to='/register'
                className='w-full px-10 py-3 font-medium text-indigo-500 transition duration-300 ease-in-out border border-indigo-500 rounded-md hover:bg-indigo-50'

              >
                Register
              </Link>
            </div> }
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;