import React from 'react'
import TextList from '../text-list/text-list'
import ItemAddForm from '../item-add-form/item-add-form'
import './text-content-page.css'

const TextContentPage = ({ textData, addItem }) => {

    // onChangePage = () => {
    //     this.props.history.push('/')
    // }
    return (
        <div className='text-content-page'>
            <ItemAddForm onItemAdded={addItem} />
            <TextList textData={textData} />
        </div>
    )
}

export default TextContentPage