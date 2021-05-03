import React from 'react'
import TextItem from '../text-item/text-item'

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
        <div>
            {elements}
        </div>
    )
}

export default TextList