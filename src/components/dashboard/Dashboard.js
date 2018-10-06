import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import MyPhotos from './photos/MyPhotos'
import MyQuotes from './quotes/MyQuotes'

class Dashboard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section id="dashboard" class="container">
        <div class="row no-gutters">
          <div class="col-md-3">
            <div class="nav-side-menu">
                <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                    <div class="menu-list">
                        <ul id="menu-content" class="menu-content collapse out">
                          <li>
                            <Link to="/dashboard">
                              <i class="fa fa-user fa-lg"></i> Mon profil
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/mes-devis">
                              <i class="fas fa-shopping-cart"></i> Mes devis
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard/mes-photos">
                              <i class="fas fa-camera"></i> Mes photos
                            </Link>
                          </li>
                        </ul>
                 </div>
               </div>
          </div>
          <div class="col-md-9 content">
            <Route path="/dashboard/mes-devis" component={ MyQuotes }/>
            <Route path="/dashboard/mes-photos" component={ MyPhotos }/>
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard
