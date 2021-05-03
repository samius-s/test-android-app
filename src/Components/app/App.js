import './App.css';
import Clock from '../clock-page/clock-page'
import TextContentPage from '../text-content-page/text-content-page'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react';

export default class App extends Component {

  maxId = 100

  state = {
    // post: '',
    textData: [
      this.createTextItem('first post'),
      this.createTextItem('second post'),
    ]
  }

  createTextItem(post) {
    return {
      post,
      id: this.maxId++
    }
  }

  addItem = (post) => {
    const newItem = this.createTextItem(post)
    this.setState(({ textData }) => {
      const newArr = [
        ...textData,
        newItem
      ]
      console.log(newArr)
      return {
        textData: newArr
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' exact component={Clock} />
          <Route path='/page' render={() => <TextContentPage
            textData={this.state.textData}
            addItem={this.addItem}
          />}
          />
        </Router>
      </div>
    );
  }
}
