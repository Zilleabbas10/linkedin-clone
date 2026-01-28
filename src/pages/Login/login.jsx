import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (

        <div className='w-full flex flex-col items-center'>
            <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>
                <div className='text-4xl mb-5'>Sign In</div>
                <div>Google Login Button</div>
                <div className='flex items-center gap-2'>
                    <div className='border-b border-gray-400 w-[45%]'></div>
                    <div>or</div>
                    <div className='border-b border-gray-400 w-[45%] my-6'></div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' placeholder='Email' className='w-full text-xl border-2 rounded-lg px-5 py-1'></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Password' className='w-full text-xl border-2 rounded-lg px-5 py-1'></input>
                    </div>
                    <div className='w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-2'>
                        Sign In
                    </div>
                </div>
            </div>
            <div className='mt-4 mb-15'>New to LinkedIn? &nbsp;
                <Link to='/signup' className='text-blue-800 cursor-pointer'>Join now</Link>
            </div>
        </div>
    )
}

export default LoginPage