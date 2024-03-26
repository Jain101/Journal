import React from 'react'
import { useLoaderData } from 'react-router-dom'
import zain from '../assets/zain.jpg'

function Notes() {
    const notes = useLoaderData()
    return (
        <>
            <div className='bg-white'>
                <ul role="list" className="divide-y divide-gray-100">
                    {notes.map((note) => (
                        <li key={note._id} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={zain} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{note.title}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{note.content}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Notes