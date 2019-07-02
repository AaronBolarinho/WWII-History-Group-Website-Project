import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './homePage.js'
import NavBar from './navbar.js'

import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log('this is the store from the provider', this.props)
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Switch>
            <Route path='/' component={Home} exact/>
            {/* <Route path='/RecruitEquipment' component={RecruitEquipment}/> */}
            {/* <Route path='/ScholarEquipment' component={ScholarEquipment}/> */}
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect()(App)
