import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='my-4 py-12.5 md:pl-30 px-5 md:flex justify-between'>
            <div className='md:w-[40%]'>
                <div className='text-4xl mx-auto text-gray-500'>Welcome to your professional community</div>
                <div className='my-3 flex mx-auto mt-5 bg-white gap-2 rounded-2xl w-[70%] text-black cursor-pointer'> Google Button</div>
                <div className='flex mx-auto mt-5 py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer'>
                    Sign in with email
                </div>
                <div className='mx-auto mb-4 text-sm w-[70%] mt-5'>By clicking continue to join or sign in, you agree to <Link className='text-blue-800 cursor-pointer hover:underline'>LinkedIn's User Agreement</Link>, &nbsp;
                    <Link className='text-blue-800 cursor-pointer hover:underline'>Privacy Policy</Link>, and &nbsp;
                    <Link className='text-blue-800 cursor-pointer hover:underline'>Cookie Policy</Link>.
                </div>
                <div className='mx-auto mb-4 text-lg mt-4'>New to LinkedIn? <Link to='/signup' className='text-blue-800 cursor-pointer hover:underline'>Join now</Link></div>
            </div>
            <div className='md:w-[50%] h-120 w-full'>
                <img src='https://static-cse.canva.com/blob/717527/headerlinkedin2.png' alt='landingPage' className='w-full h-full' />
            </div>
        </div >
    )
}

export default LandingPage