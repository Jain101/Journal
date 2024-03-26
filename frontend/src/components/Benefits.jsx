import React from 'react'
import book from '../assets/journal1.jpg'
import { Link } from 'react-router-dom';

function Benefits() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[400px] mx-auto my-4 rounded' src={book} />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Journaling and its Benefits</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your Life</h1>
                    <p>
                        Journaling is more than just writing down what happened in your day. It is a powerful practice that can help you improve your mental health, well-being, and personal growth. Journaling can help you
                    </p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'><Link to='/logs'>Get Started</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Benefits