import React, { Component } from 'react'

export default class Clock extends Component {

    state = {
        time: null
    }

    componentDidMount() {
        console.log('new timer')
        this.timerId = setInterval(() => this.setState({
            time: new Date().toLocaleTimeString()
        }), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    onChangePage = () => {
        this.props.history.push('/page')
    }

    render() {

        return (
            <div onClick={this.onChangePage}>
                <h2>{this.state.time}</h2>
            </div>
        )
    }
}

// export default withRouter(Clock)