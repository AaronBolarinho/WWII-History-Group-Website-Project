import React, { Component } from 'react'
import '../css/App.css'
import { Carousel, Form, Button } from 'react-bootstrap'
//
import TestImage1 from '../css/images/Equipment/conventionalShoeGeneric.jpeg'
import TestImage2 from '../css/images/Equipment/Aemma_Heraldric_Logo.jpg'
import TestImage3 from '../css/images/Equipment/fencingMask.jpg'
import Video from './wwII.mp4'
//
import { connect } from 'react-redux'
//
import axios from 'axios'
//
import $ from 'jquery'
//
// import NavBar from './NavBar/navBar.js'
//
import '../css/NavBar.css'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: '',
      imgur: '',
      selectedFile: null
    }
    this.fileInput = React.createRef()
  }

  // This is involved in the redux element of the component
  getData = (data) => {
    this.props.getData(data)
  }

//     handleSubmit = (event) => {
//     event.preventDefault()
//     const NumOfFiles = this.fileInput.current.files.length
// 
//     for (let i = 0; i < NumOfFiles; i += 1) {
//       const imageFile = this.fileInput.current.files[i]
// 
//       console.log('this is the length', this.fileInput.current.files.length)
//       
//       const form = new FormData()
//       form.append('image', imageFile)
//       form.append('album', 'VI6V2Ty')
// 
//       const settings = {
//         async: true,
//         crossDomain: true,
//         url: 'http://localhost:3002/upload',
//         method: 'POST',
//         headers: {
//           Authorization: 'Bearer ce84d393917bf0578b929b1706f3c209d9c496f1'
//         },
//         processData: false,
//         contentType: false,
//         mimeType: 'multipart/form-data',
//         data: form
//       }
// 
//       console.log('this is the form data', form)
// 
//       $.ajax(settings).done(function (response) {
//         console.log(response)
//       })
//     }
//   }

  handleSubmit = (event) => {
    event.preventDefault()
    const NumOfFiles = this.fileInput.current.files.length

    for (let i = 0; i < NumOfFiles; i += 1) {
      const imageFile = this.fileInput.current.files[i]

      console.log('this is the length', this.fileInput.current.files.length)
      
      const form = new FormData()
      form.append('image', imageFile)
      form.append('album', 'VI6V2Ty')

      const settings = {
        async: true,
        crossDomain: true,
        url: 'https://api.imgur.com/3/upload',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ce84d393917bf0578b929b1706f3c209d9c496f1'
        },
        processData: false,
        contentType: false,
        mimeType: 'multipart/form-data',
        data: form
      }

      $.ajax(settings).done(function (response) {
        console.log(response)
      })
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3002/test2')
      .then(response => {
        const myVariable = response.data

        // console.log('this is the new variable1', myVariable)
        // console.log('this is the new variable2', myVariable.data[0].link)

        this.setState({ imgur: myVariable.data[0].link })

        console.log('this is the new state', this.state)
        
        // This sends the fetched data to the component store
        this.getData(myVariable)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log('these are the props', this.props)
    return (
    <div>
        <div className='homePgVid'>
          {/* <NavBar/> */}
          <h1> Welcome to Our Study Group</h1>
          <div className='video-container'>
            <video autoPlay loop muted>
              <source src={Video} type='video/mp4' />
            </video>
           </div>
        </div>
        <div className='stripBorder'>
        </div>
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
        <Form>
          <Form.Group controlId='formBasicEmail' onSubmit={this.handleSubmit}>
            <Form.Control name='myFile' type='file' multiple required ref={this.fileInput}/>
          </Form.Group>
          <Button variant='primary' type='submit' onClick={this.handleSubmit}>
            Upload
          </Button>
        </Form>
        <img src={this.state.imgur} />

        {/* <Form> */}
        {/*   <Form.Group controlId='formBasicEmail' onSubmit={this.handleSubmit}> */}
        {/*     <Form.Control name='myFile' type='file' multiple required ref={this.fileInput}/> */}
        {/*   </Form.Group> */}
        {/*   <Button variant='primary' type='submit' onClick={this.handleSubmit}> */}
        {/*     Upload */}
        {/*   </Button> */}
        {/* </Form> */}

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
  console.log('sent to store')
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
