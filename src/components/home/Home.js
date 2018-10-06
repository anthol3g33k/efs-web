import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)

    fetch('https://efs-quotes-api.herokuapp.com/')
      .then(response  => { return response.json()})
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <header class="masthead text-white text-center">
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-xl-9 mx-auto">
                <h2>Entretien & fleurissement de sépultures</h2>
                <hr class="hr-primary" />
                <h1>EFS GRAND EST</h1>
              </div>
            </div>
          </div>
        </header>

        <section class="text-center bg-light">
          <div class="jumbotron">
            <div class="container">
              <h1 class="display-3">Qui sommes-nous?</h1>
              <p>Vous ne parvenez pas toujours à entretenir les tombes de vos proches? Nous le faisons pour vous. Venez découvrir l'ensemble de nos services!</p>
              <p>
                <Link class="btn btn-primary btn-lg" to="/presentation">Nos services »</Link>
              </p>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Home
