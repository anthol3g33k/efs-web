import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../home/Home'
import Presentation from '../presentation/Presentation'
import Prices from '../prices/Prices'
import Contact from '../contact/Contact'

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Home }/>
        <Route path="/presentation" component={ Presentation } />
        <Route path="/tarifs" component={ Prices } />
        <Route path="/contact" component={ Contact } />
      </div>
    )
  }
}

export default Main
