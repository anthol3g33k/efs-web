import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Subscribe extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section class="bg" id="login">
        <div class="container subscribe-container">
          <div class="card card-outline-secondary">
            <div class="card-header text-white bg-primary">
                <h3 class="mb-0">Inscription</h3>
            </div>
            <div class="card-body">
                <form class="form" role="form" autocomplete="off">
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Prénom</label>
                        <div class="col-lg-9">
                            <input class="form-control" type="text" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Nom</label>
                        <div class="col-lg-9">
                            <input class="form-control" type="text" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Email</label>
                        <div class="col-lg-9">
                            <input class="form-control" type="email" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Téléphone</label>
                        <div class="col-lg-3">
                            <input class="form-control" type="text" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Adresse</label>

                        <div class="col-lg-9">
                          <div class="row">
                            <div class="col-lg-2 pb-3">
                                <input class="form-control" type="text" placeholder="N°" />
                            </div>
                            <div class="col-lg-6 pb-3">
                                <input class="form-control" type="url" placeholder="Rue" />
                            </div>

                          </div>
                          <div class="row">
                            <div class="col-lg-3 pb-3">
                                <input class="form-control" type="url" placeholder="Code postal" />
                            </div>
                            <div class="col-lg-5 pb-3">
                                <input class="form-control" type="url" placeholder="Ville" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-4 pb-3">
                                <select id="country" class="form-control" size="0" placeholder="Pays">
                                    <option value="" disabled selected>Pays</option>
                                    <option value="France">France</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Belgique">Belgique</option>
                                </select>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Mot de passe</label>
                        <div class="col-lg-3">
                            <input class="form-control" type="password" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Confirmation mot de passe</label>
                        <div class="col-lg-3">
                            <input class="form-control" type="password" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label"></label>
                        <div class="col-lg-9 text-right">
                            <input type="button" class="btn btn-primary" value="S'enregistrer" />
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Subscribe
