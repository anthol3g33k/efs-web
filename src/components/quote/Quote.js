import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Quote extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  products = [
    {
      id: 1,
      type: "SEPULTURE",
      title: "Entretien sépulture",
      price: "80€ / entretien",
      items: ["Entretien unique", "Nettoyage", "Sans fleurissement"]
    },
    {
      id: 2,
      type: "SEPULTURE",
      title: "Entretien + fleurissement",
      price: "A partir de 115€",
      formules: [
        {
          id: 1,
          title: "1 intervention annuelle",
          description: "Paiement intégral",
          price: "115€"
        },
        {
          id: 2,
          title: "2 interventions annuelles",
          description: "1er paiement 135€ + 6 prélèvements de 15€/mois",
          price: "225€"
        },
        {
          id: 3,
          title: "4 intervention annuelle",
          description: "1er paiement 125€ + 9 prélèvements 25€/mois",
          price: "350€"
        },
        {
          id: 4,
          title: "6 intervention annuelle",
          description: "1er prélèvement 140€ + 10 prélèvements 35€/mois",
          price: "490€"
        },
        {
          id: 5,
          title: "12 intervention annuelle",
          description: "1er prélèvement 130€ + 12 prélèvements 60€/mois",
          price: "850€"
        }
      ],
      items: ["Entretien unique", "Nettoyage", "Avec fleurissement"],
    },
    {
      id: 3,
      type: "SEPULTURE",
      title: "Spécial Toussaint",
      price: "A partir de 115€",
      items: ["Entretien unique", "Une pomponette", "Retrait de la fleur un mois après"]
    },
    {
      id: 4,
      type: "COLOMBARIUM",
      title: "Entretien colombarium",
      price: "45€ / entretien",
      items: ["Entretien unique", "Nettoyage", "Sans fleurissement"]
    },
    {
      id: 5,
      type: "COLOMBARIUM",
      title: "Entretien + fleurissement",
      price: "A partir de 70€",
      formules: [
        {
          id: 1,
          title: "1 intervention annuelle",
          description: "Paiement intégral",
          price: "70€"
        },
        {
          id: 2,
          title: "2 interventions annuelles",
          description: "1er paiement 70€ + 6 prélèvements de 10€/mois",
          price: "130€"
        },
        {
          id: 3,
          title: "4 intervention annuelle",
          description: "1er paiement 60€ + 9 prélèvements 20€/mois",
          price: "240€"
        },
        {
          id: 4,
          title: "6 intervention annuelle",
          description: "1 er prélèvement 65€ + 10 prélèvements 27€/mois",
          price: "335€"
        },
        {
          id: 5,
          title: "12 intervention annuelle",
          description: "1er prélèvement 74€ + 12 prélèvements 48€/mois",
          price: "650€"
        }
      ],
      items: ["Entretien unique", "Nettoyage", "Avec fleurissement"],
    },
    {
      id: 6,
      type: "COLOMBARIUM",
      title: "Spécial Toussaint",
      price: "75€",
      items: ["Entretien unique", "Une pomponette", "Retrait de la fleur un mois après"]
    }
  ];

  state = {
    selected: {
      items: [],
      formules: []
    },
    formule: {},
    redirect: false
  };

  getSepulturesProducts() {
    return this.products.filter(product => product.type === "SEPULTURE");
  }

  getColombariumProducts() {
    return this.products.filter(product => product.type === "COLOMBARIUM");
  }

  selectItem(item) {
    console.log(item);
    this.setState({selected: item});
  }

  selectFormule(item) {
    console.log(item);
    this.setState({formule: item});
  }

  handleChange (event) {
    this.setState( [event.target.name]: event.target.value )
  }

  getState(callback) {
    this.setState((prevState) => {
      callback(prevState);
    });
  }

  closePopUp() {
      document.getElementById("close-modal").click();
   }

  send(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.getState((state) => {
      fetch('https://efs-quotes-api.herokuapp.com/quotes', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.get('email'),
          phone: data.get('phone'),
          product: state.selected,
          formule: state.formule
        })
      }).then(() => {
        this.closePopUp();
        this.setState({ redirect: true })
      });
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
       return <Redirect to='/felicitation'/>;
    }
    return (
      <section class="bg" id="prices">
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
              { this.getSepulturesProducts().map(sepulture =>
                <div className={ "card mb-4 mt-4 box-shadow selectable " + (this.state.selected === sepulture ? "selected" : "") } onClick={ this.selectItem.bind(this, sepulture) }>
                  <div class="card-header">
                    <h5 class="my-0 font-weight-normal">{ sepulture.title }</h5>
                  </div>
                  <div class="card-body">
                  <h1 class="card-title pricing-card-title">{ sepulture.price }</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      { sepulture.items.map(item =>
                        <li>{ item }</li>
                      )}
                    </ul>
                    { sepulture.formules
                      ? <button type="button" class="btn btn-lg btn-block btn-primary" data-toggle="modal" data-target="#details-tarifs">Voir plus</button>
                      : null
                    }
                  </div>
                </div>
              )}
            </div>
            <div class="text-right">
              <button class="btn btn-success mr-2" data-toggle="modal" disabled={ !this.state.selected || this.state.selected.type !== 'SEPULTURE' } data-target="#devis">Devis en ligne</button>
              <span class="mr-2">ou</span>
              <button class="btn btn" data-toggle="modal" data-target="#bon-commande">Bon de commande</button>
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
            { this.getColombariumProducts().map(colombarium =>
              <div className={ "card mb-4 mt-4 box-shadow selectable " + (this.state.selected === colombarium ? "selected" : "") } onClick={ this.selectItem.bind(this, colombarium) }>
                <div class="card-header">
                  <h5 class="my-0 font-weight-normal">{ colombarium.title }</h5>
                </div>
                <div class="card-body">
                <h1 class="card-title pricing-card-title">{ colombarium.price }</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    { colombarium.items.map(item =>
                      <li>{ item }</li>
                    )}
                  </ul>
                  { colombarium.formules
                    ? <button type="button" class="btn btn-lg btn-block btn-primary" data-toggle="modal" data-target="#details-tarifs">Voir plus</button>
                    : null
                  }
                </div>
              </div>
            )}
            </div>
            <div class="text-right">
              <button class="btn btn-success mr-2" data-toggle="modal" disabled={ !this.state.selected || this.state.selected.type !== 'COLOMBARIUM' } data-target="#devis">Devis en ligne</button>
              <span class="mr-2">ou</span>
              <button class="btn btn" data-toggle="modal" data-target="#bon-commande">Bon de commande</button>
            </div>
          </div>

          <div id="details-tarifs" class="modal fade" role="dialog">
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
                    { this.state.selected.formules && this.state.selected.formules.map(formule =>
                      <li class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="row">
                          <div class="col-10">
                            <h5 class="mb-1">{ formule.title }</h5>
                            <small class="text-muted">{ formule.description }</small>
                          </div>
                          <div class="col-2 my-auto">
                            <h4 class="blue my-auto">{ formule.price }</h4>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Fermer</button>
                </div>
              </div>
            </div>
          </div>

          <div id="bon-commande" class="modal fade" role="dialog">
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
                  <div><i class="fas fa-info-circle mr-2"></i>Le bon de commande est à envoyer par e-mail à l'adresse suivante: <a href="mailto:efs.grandest@gmail.com">efs.grandest@gmail.com</a></div>
                </div>
              </div>
            </div>
          </div>

          <div id="devis" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Vous avez sélectionné la préstation suivante</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className={ "card mb-4 mt-4 box-shadow text-center selected" }>
                    <div class="card-header">
                      <h5 class="my-0 font-weight-normal">{ this.state.selected.title }</h5>
                    </div>
                    <div class="card-body">
                    <h1 class="card-title pricing-card-title">{ this.state.selected.price }</h1>
                      <ul class="list-unstyled mt-3 mb-4">
                        { this.state.selected.items.map(item =>
                          <li>{ item }</li>
                        )}
                      </ul>
                    </div>
                  </div>
                  { this.state.selected.formules && (
                    <div>
                      <h4 class="mb-4"><i class="fas fa-info-circle mr-2"></i>Veuillez sélectionner une formule pour valider votre devis</h4>
                      <ul class="list-group list-group-flush selectable">
                        { this.state.selected.formules.map(formule =>
                          <li className={ "list-group-item list-group-item-action flex-column align-items-start " + (this.state.formule === formule ? "selected" : "") } onClick={ this.selectFormule.bind(this, formule) }>
                            <div class="row">
                              <div class="col-10">
                                <h5 class="mb-1">{ formule.title }</h5>
                                <small class="text-muted">{ formule.description }</small>
                              </div>
                              <div class="col-2 my-auto">
                                <h4 class="blue my-auto">{ formule.price }</h4>
                              </div>
                            </div>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  <div class="mt-2">
                    <form class="form" role="form" autocomplete="off" onSubmit={ this.send.bind(this) }>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Email</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="email" name="email" required />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Téléphone</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="phone" required />
                            </div>
                        </div>
                        <div class="text-right mt-2">
                          <button id="close-modal" class="btn btn mr-2" data-dismiss="modal">Annuler</button>
                          <button class="btn btn-success mr-2" disabled={ this.state.selected.formules && !this.state.formule.id } >Valider mon devis</button>
                        </div>
                    </form>
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

export default Quote
