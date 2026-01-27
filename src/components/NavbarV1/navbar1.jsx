import React from 'react'

const Navbar1 = () => {
    return (
        <nav className='w-full bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <h3 className='text-3xl font-bold text-blue-800'>Linked</h3>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='linkedinLogo' className='w-6 h-6' />
                </div>
            </div>
            <div className='flex box-border md:gap-4 gap-2 justify-center items-center'>
                <div className='md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer'>Join now</div>
                <div className='px-4 py-2 box-border border text-blue-800 border-blue-800 rounded-3xl text-xl hover:bg-gray-200 cursor-pointer'>Sign in</div>
            </div>
        </nav >
    )
}

export default Navbar1