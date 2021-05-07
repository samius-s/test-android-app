import React from 'react'
import TextList from '../text-list/text-list'
import ItemAddForm from '../item-add-form/item-add-form'
import './text-content-page.css'

const TextContentPage = ({ textData, addItem }) => {
    return (
        <div className='text-content-page'>
            <div className='text-content-container'>
                <ItemAddForm onItemAdded={addItem} />
                <TextList textData={textData} />
            </div>
        </div>
    )
}

export default TextContentPage