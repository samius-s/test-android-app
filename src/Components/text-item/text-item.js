import React from 'react'
import './text-item.css'

const TextItem = ({ post }) => {
    return (
        <div className='text-item'>
            {post}
        </div>
    )
}

export default TextItem