import React, { Component } from 'react'
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        post: ''
    }

    onLabelChange = (e) => {
        this.setState({
            post: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.post)
        this.setState({
            post: ''
        })
    }

    render() {
        return (
            <form className='item-add-form'
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="input"
                    placeholder="Введите текст"
                    onChange={this.onLabelChange}
                    value={this.state.post}
                />
                <button
                    className="button"
                >Send</button>
            </form>
        )
    }
}