import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Quotes extends Component {

  state = {
    redirect: false
  }

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      isLoading: false
    };

    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)

    this.setState({ isLoading: true });
    fetch('https://efs-quotes-api.herokuapp.com/quotes')
      .then(response  => { return response.json()})
      .then(data => this.setState({ quotes: data, isLoading: false }));
  }

  validate(quote, isValid) {
    fetch('https://efs-quotes-api.herokuapp.com/quotes/' + quote._id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        validated: isValid
      })
    }).then(() => {
      window.location.reload();
    });
  }

  render() {
    const { redirect, isLoading, quotes } = this.state;

    if (redirect) {
       return <Redirect to='/admin/liste-devis'/>;
    }

    if (isLoading) {
      return <div class="container"><p class="mt-3">Chargement des données ...</p></div>;
    }

    return (
      <section id="quotes">
        <div class="container">
          <h4 class="mt-4">Liste des devis</h4>
          <hr/>
          <table class="mb-4 table table-striped table-bordered">
            <thead>
              <tr>
                <th>E-mail</th>
                <th>Téléphone</th>
                <th>Type</th>
                <th>Produit</th>
                <th>Prix</th>
                <th>Formule</th>
                <th>Paiement</th>
                <th>Prix</th>
                <th>Valider</th>
              </tr>
            </thead>
            <tbody id="myTable">
              {quotes.map(quote =>
                <tr className={ quote.validated ? 'table-success' : ''}>
                  <td>{ quote.email }</td>
                  <td>{ quote.phone }</td>
                  <td>{ quote.product.type }</td>
                  <td>{ quote.product.title }</td>
                  <td>{ quote.product.price }</td>
                  <td>{ quote.formule ? quote.formule.title : "" }</td>
                  <td>{ quote.formule ? quote.formule.description : "" }</td>
                  <td>{ quote.formule ? quote.formule.price : "" }</td>
                  <td> { !quote.validated
                  ? <button class="btn btn-success" onClick={ this.validate.bind(this, quote, true) }>Valider</button>
                  : <button class="btn btn-warning" onClick={ this.validate.bind(this, quote, false) }>Annuler</button>}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}

export default Quotes
