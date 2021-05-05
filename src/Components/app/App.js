import './App.css';
import Clock from '../clock-page/clock-page'
import TextContentPage from '../text-content-page/text-content-page'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react';

export default class App extends Component {

  maxId = 100
  x1 = 1
  y1 = 2


  state = {
    isClock: false,
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

  handleTouchStart = (event) => {
    const firstTouch = event.touches[0]
    this.x1 = firstTouch.clientX
    this.y1 = firstTouch.clientY
  }

  handleTouchMove = (event) => {
    if (!this.x1 || !this.y1) {
      return false
    }
    let x2 = event.touches[0].clientX
    let y2 = event.touches[0].clientY
    let xDiff = x2 - this.x1
    let yDiff = y2 - this.y1

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0 && Math.abs(xDiff) > 10) {
        this.setState(
          {
            isClock: true
          }
        )
      }
      if (xDiff < 0 && Math.abs(xDiff) > 10) {
        this.setState(
          {
            isClock: false
          }
        )
      }
      // } else {
      //   if (yDiff > 0) console.log('down')
      //   else console.log('up')
    }

    this.x1 = null
    this.y1 = null
  }

  render() {
    return (
      <div className="App"
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}>

        { this.state.isClock
          ? <Clock />
          : <TextContentPage
            textData={this.state.textData}
            addItem={this.addItem}
          />
        }
      </div>
    );
  }
}
