import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer class="footer bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul class="list-inline mb-2">
                <li class="list-inline-item">
                  <Link to="/presentation">Présentation</Link>
                </li>
                <li class="list-inline-item">&sdot;</li>
                <li class="list-inline-item">
                  <Link to="/tarifs">Tarifs</Link>
                </li>
                <li class="list-inline-item">&sdot;</li>
                <li class="list-inline-item">
                  <Link to="/contact">Nous contacter</Link>
                </li>
              </ul>
              <p class="text-muted small mb-4 mb-lg-0">&copy; EFS Grand Est 2018. Tous droits réservés.</p>
            </div>
            <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul class="list-inline mb-0">
                <li class="list-inline-item mr-1">
                  <a target="_blank" href="https://www.facebook.com/EFSGRANDEST">
                    <i class="fab fa-facebook fa-2x fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="mailto:efs.grandest@gmail.com">
                    <i class="fas fa-envelope-square fa-2x fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
