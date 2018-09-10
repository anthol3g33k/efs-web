import React, { Component } from 'react';

class Prices extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section class="bg" id="about">
        <div class="overlay"></div>
        <div class="container pt-3 pb-3">

          <div class="d-flex align-items-center p-2 my-3 text-white bg-blue rounded box-shadow">
            <div class="p-1 mr-1">
              <i class="fas fa-caret-square-down fa-3x fa-fw"></i>
            </div>
            <div class="lh-100">
              <h6 class="mb-0 text-white lh-100">Sépulture</h6>
              <small class="text-white-50">A partir de 80€</small>
            </div>
          </div>

          <div class="my-3 p-3 bg-white rounded box-shadow">
            <div class="card-deck text-center">
              <div class="card mb-4 mt-4 box-shadow">
                <div class="card-header">
                  <h5 class="my-0 font-weight-normal">Entretien sépulture</h5>
                </div>
                <div class="card-body">
                <h1 class="card-title pricing-card-title">80€ <small class="text-muted">/ entretien</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Entretien unique</li>
                    <li>Nettoyage</li>
                    <li>Sans fleurissement</li>
                  </ul>
                </div>
              </div>
              <div class="card mb-4 mt-4 box-shadow">
                <div class="card-header">
                  <h5 class="my-0 font-weight-normal">Entretien + fleurissement</h5>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title"><small class="text-muted">A partir de </small>115€</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Entretien unique</li>
                    <li>Nettoyage</li>
                    <li><b>Avec</b> fleurissement</li>
                  </ul>
                  <button type="button" class="btn btn-lg btn-block btn-primary" data-toggle="modal" data-target="#sepulture-fleurissement-tarifs">Voir plus</button>
                </div>
              </div>
              <div class="card mb-4 mt-4 box-shadow">
                <div class="card-header">
                  <h5 class="my-0 font-weight-normal">Spécial Toussaint</h5>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">120€</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Entretien unique</li>
                    <li>Une pomponette</li>
                    <li>Retrait de la fleur un mois après</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button class="btn btn-success" data-toggle="modal" data-target="#bon-commande">Bon de commande</button>
            </div>
          </div>

          <div id="sepulture-fleurissement-tarifs" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Tarifs</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">1 intervention annuelle</h5>
                          <small class="text-muted">Paiement intégral</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">115€</h4>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">2 interventions annuelle</h5>
                          <small class="text-muted">1er paiement 135€ + 6 prélèvements de 15€/mois</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">225€</h4>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">4 interventions annuelle</h5>
                          <small class="text-muted">1er paiement 125€ + 9 prélèvements 25€/mois</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">350€</h4>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">6 interventions annuelle</h5>
                          <small class="text-muted">1er prélèvement 140€ + 10 prélèvements 35€/mois</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">490€</h4>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">12 interventions annuelle</h5>
                          <small class="text-muted">1er prélèvement 130€ + 12 prélèvements 60€/mois</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">850€</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Fermer</button>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center p-2 my-3 text-white bg-blue rounded box-shadow">
            <div class="p-1 mr-1">
              <i class="fas fa-caret-square-down fa-3x fa-fw"></i>
            </div>
            <div class="lh-100">
              <h6 class="mb-0 text-white lh-100">Colombarium</h6>
              <small class="text-white-50">A partir de 45€</small>
            </div>
          </div>

          <div class="my-3 p-3 bg-white rounded box-shadow">
            <div class="card-deck text-center">
              <div class="card mb-4 mt-4 box-shadow">
                <div class="card-header">
                  <h5 class="my-0 font-weight-normal">Entretien colombarium</h5>
                </div>
                <div class="card-body">
                <h1 class="card-title pricing-card-title">45€ <small class="text-muted">/ entretien</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Entretien unique</li>
                    <li>Nettoyage</li>
                    <li>Sans fleurissement</li>
                  </ul>
                </div>
              </div>
              <div class="card mb-4 mt-4 box-shadow">
                <div class="card-header">
                  <h5 class="my-0 font-weight-normal">Entretien + fleurissement</h5>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title"><small class="text-muted">A partir de </small>70€</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Entretien unique</li>
                    <li>Nettoyage</li>
                    <li><b>Avec</b> fleurissement</li>
                  </ul>
                  <button type="button" class="btn btn-lg btn-block btn-primary" data-toggle="modal" data-target="#colombarium-fleurissement-tarifs">Voir plus</button>
                </div>
              </div>
              <div class="card mb-4 mt-4 box-shadow">
                <div class="card-header">
                  <h5 class="my-0 font-weight-normal">Spécial Toussaint</h5>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">75€</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Entretien unique</li>
                    <li>Une pomponette</li>
                    <li>Retrait de la fleur un mois après</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button class="btn btn-success" data-toggle="modal" data-target="#bon-commande">Bon de commande</button>
            </div>
          </div>

          <div id="colombarium-fleurissement-tarifs" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Tarifs</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">1 intervention annuelle</h5>
                          <small class="text-muted">Paiement intégral</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">70€</h4>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">2 interventions annuelle</h5>
                          <small class="text-muted">1er paiement 70€ + 6 prélèvements de 10€/mois</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">130€</h4>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">4 interventions annuelle</h5>
                          <small class="text-muted">1er paiement 60€ + 9 prélèvements 20€/mois</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">240€</h4>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">6 interventions annuelle</h5>
                          <small class="text-muted">1 er prélèvement 65€ + 10 prélèvements 27€/mois</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">335€</h4>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="row">
                        <div class="col-10">
                          <h5 class="mb-1">12 interventions annuelle</h5>
                          <small class="text-muted">1er prélèvement 74€ + 12 prélèvements 48€/mois</small>
                        </div>
                        <div class="col-2 my-auto">
                          <h4 class="blue my-auto">650€</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Fermer</button>
                </div>
              </div>
            </div>
          </div>

          <div id="bon-commande" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Bon de commande</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">

                  <div class="card-deck text-center">
                    <div class="card mb-4 box-shadow">
                      <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Sépulture</h4>
                      </div>
                      <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>Téléchargez votre bon de commande pour votre sépulture</li>
                        </ul>
                        <a class="btn btn-success" target="_blank" href="/pdf/BON_DE_COMMANDE_SEPULTURE.pdf">Télécharger</a>
                      </div>
                    </div>

                    <div class="card mb-4 box-shadow">
                      <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Colombarium</h4>
                      </div>
                      <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>Téléchargez votre bon de commande pour votre colombarium</li>
                        </ul>
                        <a class="btn btn-success" target="_blank" href="/pdf/BON_DE_COMMANDE_COLOMBARIUM.pdf">Télécharger</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Prices
