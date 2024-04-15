import React from 'react'
import './AboutUs.css';

function aboutUs() {
    const height = {
        height: '30vh'

    }
    return (
        <div>
            <div className='container-fluid m-0 p-0'>
                <img className=' w-100 ' style={height} src='https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_640.jpg' alt='' />
            </div>
            <div className='container-fluid pt-5 ps-0'>
                <p className='m-2'>ELearn Infotech is a Professional Software Courses Training Company like Python, Fullstack development, React Js, Node Js, UI Development,
                    UI/UX Designing, Web designing, PHP with MySQL, Graphic Designing, Cloud Modules, SAP Modules etc. We Provide Training for Design Unique websites &
                    Develop Web Application, Digital Marketing Solutions like SEO, SMM, PPC (Google Ads) and help businesses create their brand. ELearn Infotech built
                    a Relationship with students, who allows us to build up a tailored branding plan advance. ELearn Infotech offers Excellent Software Courses with end
                    to end support to the candidates.</p>
            </div>

        </div>
    )
}

export default aboutUs