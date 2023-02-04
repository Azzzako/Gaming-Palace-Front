import React from 'react';


import './Footer.css';
const Footer = () => {
  return (
    <div>
      <footer className="text-center footer-style">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <h3>Dirección</h3>
              {/* <p>Argentina <br /> carrasco 400</p> */}
            </div>
            <div className="col-md-4 footer-col">
              <h3>Networks</h3>
              <div className="list-inline container">
                <div className='row justify-content-center'>
                  <li className='d-flex col-sm-2'>
                    <a target="_blank" href="#" className="col-xl-4"><i className="bi bi-facebook"></i></a>
                  </li>
                  <li className='d-flex col-sm-2'>
                    <a target="_blank" href="#" className="col-xl-4 "><i className="bi bi-instagram"></i></a>
                  </li>
                  <li className='d-flex col-sm-2'>
                    <a target="_blank" href="#" className="col-xl-4 "><i className="bi bi-github"></i></a>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h3>Us</h3>
              {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ad laboriosam tempore quaerat dolorum, porro consequatur praesentium rem.</p> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer