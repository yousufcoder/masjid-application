import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/home'
import Dashboard from './pages/org/dashboard'
import Members from './pages/org/members'
import Categories from './pages/org/categories'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/:orgId/dashboard' component={Dashboard} />
            <Route path='/:orgId/members' component={Members} />
            <Route path='/:orgId/categories' component={Categories} />
          </div>
        </Router>
      </div>
    )
  }
}
export default App
