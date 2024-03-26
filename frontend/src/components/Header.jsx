import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Journal.</h1>
            <ul className='hidden md:flex'>
                <li><NavLink to='/' className='p-4 hover:text-[#00df9a] cursor-pointer'>Home</NavLink></li>
                <li><NavLink to='/logs' className='p-4 hover:text-[#00df9a] cursor-pointer'>Logs</NavLink></li>
                <li><NavLink to='/about' className='p-4 hover:text-[#00df9a] cursor-pointer'>About</NavLink></li>
                <li><NavLink to='/contact' className='p-4 hover:text-[#00df9a] cursor-pointer'>Contact</NavLink></li>
                <li><NavLink to='/notes' className='p-4 hover:text-[#00df9a] cursor-pointer'>Notes</NavLink></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#aedbae] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Journal.</h1>
                <img src='https://cdn.vox-cdn.com/thumbor/HsC9puhTBDNIVTolPsRn8aW4jn8=/0x0:1920x1080/920x613/filters:focal(1035x326:1341x632):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71812214/Ash_Ketchum_World_Champion_Screenshot_4.0.jpg' alt='img' className='p-1 m-auto w-24 h-24 aling-center object-cover rounded-full' />
                <h4 className='text-center text-sm text-gray-500'>Jainul Abdeen</h4>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    )
}

export default Header