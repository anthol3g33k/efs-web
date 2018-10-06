import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Congratulation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section>
        <div class="container pt-5 pb-5">
          <div class="jumbotron">
            <h1 class="display-4">Félicitations!</h1>
            <p class="lead">Nous avons bien enregistré votre devis.</p>
            <hr class="my-4" />
            <p>Vous serez contacté sous 24h ouvré par téléphone pour finalier votre demande. Merci de votre confiance.</p>
            <Link class="btn btn-primary btn-lg" to="/" role="button">Retourner à l'accueil</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Congratulation
