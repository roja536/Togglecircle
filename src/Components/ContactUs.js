import React from 'react'
import './ContactUs.css'

function Practise() {

  return (
    <>
      <div className='container'>
        <div className='row '>
          <div className='col-xs-12  col-sm-12 col-md-9 col-lg-8 '>
            <h2 className='text-dark mb-3 ms-3 contact'>Contact with us</h2>
            
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 p-3 bg-info '>
                  <div className='row '>
                    <div className='col-xs-12 col-sm-12 col-md-6 '>
                      <input type="text" className='col-xs-12 col-sm-12 col-md-12 p-2 mt-3 mb-3' placeholder='Course Name*' />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 '>
                      <input type="text" className='col-xs-12 col-sm-12 col-md-12 p-2 mt-3 mb-3 ' placeholder='FullName*' />
                    </div>
                  </div>
                  <div className='row  '>
                    <div className='col-xs-12 col-sm-12 col-md-6  '>
                      <input type="text" className='col-xs-12 col-sm-12 col-md-12 p-2 mt-3 mb-3' placeholder='Email*' />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 '>
                      <input type="text" className='col-xs-12 col-sm-12 col-md-12 p-2 mt-3 mb-3 ' placeholder='Phone Number*' />
                    </div>
                  </div>
                  <div className='row '>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3 mb-3 '>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Message*"></textarea>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary mb-3">Send Message</button>
                </div>
              </div>
            
          </div>
          <div className=' col-xs-12  col-sm-12 col-md-3 col-lg-4 '>
            <h2 className='text-dark mb-3 ms-3'>Address</h2>
           
              <div class="card" >
                <div className='row '>
                  <div className='col-xs-2  mt-2'>
                    <i class="bi bi-geo-alt-fill text-warning  p-2 "></i>
                  </div>
                  <div className='col-xs-10 p-3  '>
                    <address>
                      ELearn Infotech
                      Plot Number 40, Second Floor,
                      madhapur, Hyderabad
                      </address>
                  </div>
                </div>
              </div>
              <div class="card mt-3" >
                <div className='row '>
                  <div className='col-xs-2  mt-2'>
                  <i class="bi bi-telephone text-warning p-2"></i>
                  </div>
                  <div className='col-xs-10   phone '>
                    <p> +91 7535466852</p>
                  </div>
                </div>
              </div>
              <div class="card mt-3" >
                <div className='row '>
                  <div className='col-xs-2  mt-2'>
                  <i class="bi bi-envelope text-warning p-2"></i>
                  </div>
                  <div className='col-xs-10  p-3 '>
                    <p>info@elearninfotech.com</p>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>

    </>

  )
}

export default Practise;