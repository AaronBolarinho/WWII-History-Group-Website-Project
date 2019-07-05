import React, { Component } from 'react'
import '../css/App.css'
import Carousel from 'react-bootstrap/Carousel'
//
import TestImage1 from '../css/images/Equipment/conventionalShoeGeneric.jpeg'
import TestImage2 from '../css/images/Equipment/Aemma_Heraldric_Logo.jpg'
import TestImage3 from '../css/images/Equipment/fencingMask.jpg'
//
import { connect } from 'react-redux'
//
import axios from 'axios'


class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: '',
      imgur: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3002/test2')
      .then(response => {
        const myVariable = response.data
        // this.setState({ imgur: response.data })
        console.log('this is the new variable', myVariable)
        console.log('this is the new variable', myVariable.data[0].link)
        this.setState({ imgur: myVariable.data[0].link })
        console.log('this is the new state', this.state)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log('these are the props', this.props)
    // const { imgur } = this.state.imgur
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
        <img src={this.state.imgur} />
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={TestImage1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={TestImage2}
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={TestImage3}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
