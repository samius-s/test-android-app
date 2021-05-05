import React, { Component } from 'react'
import './clock-page.css'

export default class Clock extends Component {

    state = {
        time: null
    }

    componentDidMount() {
        console.log('new timer')
        this.timerId = setInterval(() => this.setState({
            time: new Date().toLocaleTimeString()
        }), 300
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }


    render() {
        return (
            <div className='clock'>
                <h2>{this.state.time}</h2>
            </div>
        )
    }
}

// export default withRouter(Clock)