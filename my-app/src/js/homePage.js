import React, { Component } from 'react'
import '../css/App.css'
import { Carousel, Form, Button } from 'react-bootstrap'

import TestImage1 from '../css/images/Equipment/conventionalShoeGeneric.jpeg'
// import TestImage2 from '../css/images/Equipment/Aemma_Heraldric_Logo.jpg'
// import TestImage3 from '../css/images/Equipment/fencingMask.jpg'
// import Video from './wwII.mp4'
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
//
import Timer from 'react-compound-timer'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: '',
      imgur: '',
      selectedFile: null,
      randomWord: '',
      userName: 'My name is...',
      named: false
    }
    this.fileInput = React.createRef()
  }

  // This is involved in the redux element of the component
  getData = (data) => {
    this.props.getData(data)
  }

  // clock testing
  handleSubmit2 = (e) => {
    e.preventDefault()
    this.setState({ userName: e.target.name.value })
    this.setState({ named: true })
    console.log('this trigger ran!')
    console.log('this is what i want', e.target.name.value)
    console.log('this is the state', this.state)
  }

   renderInputField = () => {
    let nameForm

    if (!this.state.named) {
      nameForm =
        <div>
          <form onSubmit={this.handleSubmit2}>
            <label>
              Name yourself Keyboard Warrior!
              <br></br>
              <input type='text' name='name' />
            </label>
            <br></br>
            <input type='submit' value='I am so named' />
          </form>
        </div>
    }
      
      return nameForm
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
// this is a test
      axios.get('https://random-word-api.herokuapp.com/word?key=YGJ5CLVH&number=1000')
      .then(response => {
        const myVariable = response.data

        console.log('this is the new word', myVariable)
        // console.log('this is the new variable2', myVariable.data[0].link)

        this.setState({ randomWord: myVariable })

        console.log('this is the new state with new word', this.state)
        console.log('this is the new state item', this.state.randomWord[998])
        
        // This sends the fetched data to the component store
        // this.getData(myVariable)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log('these are the props', this.props)
    return (
    <div>
        {/* <div className='homePgVid'> */}
        {/*   {/* <NavBar/> */} */}
        {/*   <h1> Welcome to Our Study Group</h1> */}
        {/*   <div className='video-container'> */}
        {/*     <video autoPlay loop muted> */}
        {/*       <source src={Video} type='video/mp4' /> */}
        {/*     </video> */}
        {/*    </div> */}
        {/* </div> */}


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

        <img src={TestImage1} />

        {/* <div className='ClockTest'> */}
        {/*   <Timer */}
        {/*     initialTime={300000} */}
        {/*     direction='backward' */}
        {/*   > */}
        {/*     {() => ( */}
        {/*       <React.Fragment> */}
        {/*         <Timer.Minutes formatValue={value => `${value} minutes `} /> */}
        {/*         <Timer.Seconds /> seconds */}
        {/*       </React.Fragment> */}
        {/*     )} */}
        {/*   </Timer> */}
        {/* </div> */}

        <div className='ClockTest'>
          <Timer
            initialTime={300000}
            startImmediately={false}
            direction='backward'
          >
            {({ start, resume, pause, stop, reset, timerState }) => (
              <React.Fragment>
                <div>
                  <Timer.Minutes formatValue={value => `${value} minutes `} />
                  <Timer.Seconds /> seconds
                </div>
                <div>
                <button onClick={start}>Start</button>
                <button onClick={reset}>Reset</button>
            </div>
              </React.Fragment>
            )}
          </Timer>
        </div>

        <p>{this.state.userName}</p>

        {this.renderInputField()}

        <div>
          <form onSubmit={this.handleSubmit2}>
            <label>
              Name yourself Keyboard Warrior!
              <br></br>
              <input type='text' name='name' />
            </label>
            <br></br>
            <input type='submit' value='I am so named' />
          </form>
        </div>

        {/* <Form> */}
        {/*   <Form.Group controlId='formBasicEmail' onSubmit={this.handleSubmit}> */}
        {/*     <Form.Control name='myFile' type='file' multiple required ref={this.fileInput}/> */}
        {/*   </Form.Group> */}
        {/*   <Button variant='primary' type='submit' onClick={this.handleSubmit}> */}
        {/*     Upload */}
        {/*   </Button> */}
        {/* </Form> */}

{/*         <Carousel> */}
{/*           <Carousel.Item> */}
{/*             <img */}
{/*               className='d-block w-100' */}
{/*               src={TestImage1} */}
{/*               alt='First slide' */}
{/*             /> */}
{/*             <Carousel.Caption> */}
{/*               <h3>First slide label</h3> */}
{/*               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
{/*             </Carousel.Caption> */}
{/*           </Carousel.Item> */}
{/*           <Carousel.Item> */}
{/*             <img */}
{/*               className='d-block w-100' */}
{/*               src={TestImage2} */}
{/*               alt='Second slide' */}
{/*             /> */}
{/*  */}
{/*             <Carousel.Caption> */}
{/*               <h3>Second slide label</h3> */}
{/*               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
{/*             </Carousel.Caption> */}
{/*           </Carousel.Item> */}
{/*           <Carousel.Item> */}
{/*             <img */}
{/*               className='d-block w-100' */}
{/*               src={TestImage3} */}
{/*               alt='Third slide' */}
{/*             /> */}
{/*  */}
{/*             <Carousel.Caption> */}
{/*               <h3>Third slide label</h3> */}
{/*               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
{/*             </Carousel.Caption> */}
{/*           </Carousel.Item> */}
{/*         </Carousel> */}


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
