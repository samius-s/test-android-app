import React from 'react'
import TextList from '../text-list/text-list'
import ItemAddForm from '../item-add-form/item-add-form'

const TextContentPage = ({ textData, addItem }) => {

    // onChangePage = () => {
    //     this.props.history.push('/')
    // }
    return (
        <div>
            <ItemAddForm onItemAdded={addItem} />
            <TextList textData={textData} />
        </div>
    )
}

export default TextContentPage