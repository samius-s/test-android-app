import React from 'react'
import TextItem from '../text-item/text-item'
import './text-list.css'

const TextList = ({ textData }) => {

    const elements = textData.map((item) => {
        const { id, post } = item
        return (
            <li key={id} className="list-group-item">
                <TextItem post={post} />
            </li>
        )
    })

    return (
        <div className='text-list'>
            {elements}
        </div>
    )
}

export default TextList