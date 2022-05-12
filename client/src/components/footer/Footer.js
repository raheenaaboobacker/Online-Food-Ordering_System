import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted' style={{backgroundColor:' #ECEFF1'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span  style={{fontSize:25,marginLeft:200}}>SOCIAL LINKS:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f' style={{fontSize:25}}></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter' style={{fontSize:25}}></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google' style={{fontSize:25}}></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram' style={{fontSize:25}}></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin' style={{fontSize:25}}></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github' style={{fontSize:25}}></i>
          </a>
        </div>
      </section>

      <section className='' >
        <div className='container text-center text-md-start mt-5' style={{fontsize:20}}>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>FODEE
              </h6>
              <p>
              Foodee is the trusted corporate food solution that puts employee health and safety first.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Health & Safety Guidelines
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Privacy & Terms of Use
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}