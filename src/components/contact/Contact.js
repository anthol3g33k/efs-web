import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className="bg" id="about">
        <div className="container pt-3 pb-3">

          <div class="d-flex align-items-center p-2 my-3 text-white bg-blue rounded box-shadow">
            <div class="p-1 mr-1">
              <i class="fas fa-caret-square-down fa-3x fa-fw"></i>
            </div>
            <div class="lh-100">
              <h6 class="mb-0 text-white lh-100">Nous contacter</h6>
            </div>
          </div>

          <div class="my-3 p-3 bg-white rounded box-shadow">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fas fa-user-circle fa-2x fa-fw mr-2"></i>
                <span>M. LANNOY Philippe</span>
              </li>
              <li class="list-group-item">
                <i class="fas fa-phone fa-2x fa-fw mr-2"></i>
                <span>07 86 59 64 97</span>
              </li>
              <li class="list-group-item">
                <i class="fas fa-envelope-square fa-2x fa-fw mr-2"></i>
                <span>efs.grandest@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
    )
  }
}

export default Contact
