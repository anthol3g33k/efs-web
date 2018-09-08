import React, { Component } from 'react';

class Presentation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className="bg" id="about">
        <div className="container pt-3 pb-3">
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle" src="/img/showcase-1.jpg" alt="Generic placeholder image" width="300" height="300" />
              <h2 class="mt-5">Entretien</h2>
              <p>Nous vous proposons un service de nettoyage complet avec des produits respectant l'environnement. Nous vous garantissons un niveau de propreté premium.</p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="/img/showcase-2.jpg" alt="Generic placeholder image" width="300" height="300" />
              <h2 class="mt-5">Fleurissement</h2>
              <p>Nous vous proposons la possibilité de fleurir vos sépultures avec des compositions naturelles de différentes dimensions. Il est possible de proposer des compositions artificielles sur demande.</p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="/img/showcase-3.jpg" alt="Generic placeholder image" width="300" height="300" />
              <h2 class="mt-5">Sépulture</h2>
              <p>Ne vous déplacez pas! Nous vous mettons à disposition des photos et un compte rendu par email ou courrier à chaque intervention sur une sépulture et/ou colombarium.</p>
            </div>
          </div>
        </div>
      </section>



    )
  }
}

export default Presentation
