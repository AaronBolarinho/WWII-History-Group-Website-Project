import React, { Component } from 'react'
// import { BrowserRouter, Route, Switch} from "react-router-dom"

import { connect } from 'react-redux'

class home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('these are the props', this.props)
    // console.log('these are the props', this.props.store.getState())
    return (
      <div>
      	<div className='App'>
          <header className='App-header'>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>This is a testT</p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </header>
        </div>
        <div>
            This is the data manipulation test
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => {
      console.log('This is the dispatch data', data)
      dispatch({ type: 'GET_DATA', data: data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
