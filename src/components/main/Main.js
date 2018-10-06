import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../home/Home'
import Presentation from '../presentation/Presentation'
import Quote from '../quote/Quote'
import Contact from '../contact/Contact'
import Login from '../login/Login'
import Subscribe from '../subscribe/Subscribe'
import Dashboard from '../dashboard/Dashboard'
import Congratulation from '../congratulation/Congratulation'
import Quotes from '../admin/Quotes'

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Home }/>
        <Route path="/presentation" component={ Presentation } />
        <Route path="/devis" component={ Quote } />
        <Route path="/contact" component={ Contact } />
        <Route path="/login" component={ Login } />
        <Route path="/inscription" component={ Subscribe } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/felicitation" component={ Congratulation } />
        <Route path="/admin/liste-devis" component={ Quotes } />
      </div>
    )
  }
}

export default Main
