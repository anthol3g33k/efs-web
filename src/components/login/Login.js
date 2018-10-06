import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section class="bg" id="login">
        <div class="container login-container">
            <div class="row justify-content-md-center">
                <div class="col-md-6 login-form">
                    <h3><i class="fas fa-user-circle fa-w-16 fa-5x"></i></h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Adresse e-mail *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Mot de passe *" value="" />
                        </div>
                        <div class="form-group text-right">
                            <Link to="/inscription" class="mr-2 forget">Pas encore de compte?</Link>
                            <input type="submit" class="btnSubmit btn btn-primary" value="S'identifier" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Login
