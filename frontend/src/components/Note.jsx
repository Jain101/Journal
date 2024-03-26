import React from 'react'
import { useParams } from 'react-router-dom'

function Note() {
    const { noteid } = useParams()
    return (
        <div>Note: {noteid}</div>
    )
}

export default Note