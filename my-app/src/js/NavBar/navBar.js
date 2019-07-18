import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import '../../css/NavBar.css'
import TestSymbol from '../../css/images/German_Cross.png'

import { connect } from 'react-redux'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('these are the props for the nav bar', this.props)
    // console.log('these are the props', this.props.store.getState())
    return (
      <div className='totalNav'>
      <img src={TestSymbol} className='navImg' />
      <div className='navBar'>
      	<Nav
          className='navItems'
		  activeKey='/home'
		  onSelect={selectedKey => alert(`selected ${selectedKey}`)}
		    >
		  <Nav.Item>
		    <Nav.Link href='/home'>Active</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link eventKey='link-1'>Link</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link eventKey='link-2'>Link</Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link eventKey='disabled' disabled>
		      Disabled
		    </Nav.Link>
		  </Nav.Item>
		</Nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
