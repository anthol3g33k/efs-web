import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <Link class="navbar-brand" to="/" rel="follow">
            <img src="/img/logo.jpg" class="d-inline-block align-top logo" alt="" />
            <h1 class="blue ml-4 brand">EFS Grand Est</h1>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="ml-auto navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/" rel="follow">Accueil</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/presentation" rel="follow">Présentation</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/devis" rel="follow">Devis en ligne</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact" rel="follow">Nous contacter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
