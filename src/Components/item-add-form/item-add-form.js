import React, { Component } from 'react'

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
            <form className='item-add-form d-flex'
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control"
                    placeholder="Введите текст"
                    onChange={this.onLabelChange}
                    value={this.state.post}
                />
                <button
                    className="btn btn-outline-secondary"
                >Send</button>
            </form>
        )
    }
}