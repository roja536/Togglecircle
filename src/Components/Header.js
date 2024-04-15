import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-xs-12  col-sm-12 col-md-4'>
                        <img className='m-3 container-fluid' src='https://www.img2go.com/assets/dist/sample-files/img/convert_to_jpg.png' alt='' />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-8 '>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-6 col-md-6  pt-5 ps-5 '>
                                <i className="bi bi-telephone text-warning p-2"></i>
                                <span > +91 957494864595</span>
                            </div>
                            <div className='col-xs-12 col-sm-6 col-md-6  pt-5 ps-5'>
                                <i className="bi bi-envelope text-warning p-2"></i>
                                <span>info@abc.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-sm navbar-light bg-primary mb-3 text-light">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/aboutus">AboutUs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/courses">Courses</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contactus">ContactUs</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;