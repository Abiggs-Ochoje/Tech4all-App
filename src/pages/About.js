
import React from 'react'
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>

<div className="container section-1">
                <div className="row">
                    <div className="col-12">
                        <div data-aos="zoom-in"  >
                            <h1><Link to='/'>Home</Link></h1>
                            <h2 className='fw-bold about-us'>ABOUT US</h2>
                        </div>


                    </div>
                </div>

                <div className="row about-us-content" data-aos="slide-up">
                    <div className="col-xl-6 col-md-6">
                        <p className="text-secondary para1" >
                            Tech4all Academy is a tech education enterprise 
                            that specializes in equiping people with tech
                            skills through affordable yet highly efficient
                             training and mentorship programs.
                            We discovered that, there is a growing demand for tech skills, 
                            as the world rapidly integrates
                            technology into every sector.
                        </p>
                    </div>

                    <div className="col-xl-6 col-md-5">
                        <p className="text-secondary para2">
                            However, there are not many Tech training programs available, and those that exist are often unaffordable
                            for the average person.
                            We also found out that employers are not left out of the struggles as they are
                            required to go through stress getting well trained and skillful people.
                        </p>

                        {/* <button className="btn btn-outline-info ">Read More</button> */}
                    </div>


                </div>
            </div>
    </div>
  )
}

export default About;