import React from 'react';
import '../App.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: '#151515' }} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='foot'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>

            <MDBCol  md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <p>
                <a href='#home' className='text-reset  custom-link-color'>
                  Home
                </a>
              </p>
              <p>
                <a href='#about' className='text-reset  custom-link-color'>
                  About
                </a>
              </p>
              <p>
                <a href='#projects'  className='text-reset  custom-link-color' >
                  Projects
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/in/muskan-jain-00517222b/' className='text-reset  custom-link-color'>
                  Certificates
                </a>
              </p>
            </MDBCol>

            <MDBCol   md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <p>
                <a href='#!' className='text-reset  custom-link-color'>
                  Blogs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset  custom-link-color ' >
                    Projects
                </a>
              </p>
              <p>
                <a href='#!'  className='text-reset  custom-link-color'>
                  Community-Exp
                </a>
              </p>
              <p>
                <a href='https://www.muskanjain.3120@gmail.com' className='text-reset custom-link-color'>
                  Let's Connect
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <p>
              <a href='https://www.linkedin.com/in/muskan-jain-00517222b/' className='text-reset custom-link-color'>
                LinkedIn 
                </a> 
            </p>
              <p>
              <a href='https://github.com/muskanjain31' className='text-reset custom-link-color'>
                Github
                </a>
              </p>
              <p>
              <a href='https://www.instagram.com/muskanjain_3/' className='text-reset custom-link-color'>
                 Instagram
                 </a>
              </p>
              <p>
              <a href='https://www.muskanjain.312@gmail.com' className='text-reset custom-link-color'>           
                    Mail
                    </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright

      </div>
    </MDBFooter>
  );
}