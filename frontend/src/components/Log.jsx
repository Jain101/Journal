import React from 'react'
import { useParams } from 'react-router-dom'

function Log() {
    const { logid } = useParams()
    return (
        <div className='bg-red text-black'>Note Id : {logid}</div>
    )
}

export default Log