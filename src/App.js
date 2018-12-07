import React, { Component } from 'react'
import './App.css'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ManagePage}/>
          <Route path='/previewpage' component={PreviewPage}/>
        </Switch>
        </BrowserRouter>
        
        
      </div>
    )
  }
}

export default App
