import React, { Component } from 'react'
import '../css/App.css'

import { connect } from 'react-redux'

class home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('these are the props', this.props)
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
        <div className='test'>
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
