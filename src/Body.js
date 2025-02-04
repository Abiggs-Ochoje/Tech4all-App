import { Link } from 'react-router-dom';
import MyMap from './Map';
import TechForm from './Form';
import Footer from './Footer'
import Accordion from './Accordion';
import useAosAnimation from './useAosAnimation';
import Header from './Header';

const Body = () => {

    useAosAnimation()

    return (
        <div>
            <Header/>
            {/*SECTION-1--- ABOUT US SECTION */}
            <div className="container section-1">
                <div className="row">
                    <div className="col-12">
                        <div data-aos="zoom-in"  >
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

            {/* SECTION-2--- VISION & MISSION SECTION */}
            <div className="section-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 " data-aos='zoom-in'>
                            <div className="card mt-3">
                                <div className="card-header card-color">
                                    <h2 className="text-center pt-2">
                                        Our Vision
                                    </h2>
                                    <div className="card-body">
                                        <p style={{ wordSpacing: '3px' }}>To offer high
                                            quality tech education and
                                            skills training, that will be fostering a
                                            community of lifelong learners, well
                                            trained and employable young
                                            professionals, and actively create a
                                            bridge in the gap between potential and
                                            opportunity. We envision a world where
                                            every young person, regardless of their
                                            background, has the tools and support to
                                            thrive in the digital economy and drive
                                            transformative change in
                                            their communities and in the world.
                                        </p>
                                    </div>
                                </div>

                            </div>


                            <div className="card mt-2" >
                                <div className="card-header card-color">
                                    <h2 className="text-center pt-2" >
                                        Our Mision
                                    </h2>

                                    <div className="card-body">
                                        <p style={{ wordSpacing: '3px' }}>To equip undergraduates, fresh graduates and those who seek
                                            to change career paths by empowering them with the
                                            necessary knowledge, skill and mentorship needed to unleash their talent, excel in the tech career and lead a
                                            culture of creativity to solve global problems using technological approaches.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className="col-lg-6 col-md-6 col-sm-12 mission-div "  >
                            <img src={require('./assets/images/develop img.webp')}
                                className='image2 img-fluid' data-aos='zoom-in' alt='design'
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* SECTION-3--- PROGRAMS SECTION */}
            <div className='container section-3'>
                <div className='row card-row  ' >
                    <div className='col-12 body-content3' data-aos='slide-up'>
                        <h2 className='program-head fw-bold' >PROGRAMS</h2>
                        <p className='program-para'> Unlock your potentials and build a future-proof career today!
                        </p>
                    </div>

                    <div className='col-lg-3 col-sm-6 ' data-aos='slide-up'>
                        <div className="card color-card">
                            <div className='img-card'>
                                <img className="card-img-top1 " src={require('./assets/images/frontcard.jpg')}
                                    width={100} height={100} alt="frontend dev" />
                            </div>
                            <div className="card-body program">
                                <h4 className="card-title">Front-End development</h4>
                                <p className="card-text">Become a Front-end developer. Learn Html, Css, JavaScript...
                                    <Link to={'/'}>Read more</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3  col-sm-6 ' data-aos='slide-up'>
                        <div className="card color-card">
                            <div className='img-card'>
                                <img className="card-img-top1 " src={require('./assets/images/c++.webp')}
                                    width={100} height={100} alt="Back-end dev" />
                            </div>

                            <div className="card-body program">
                                <h4 className="card-title">Back-end development</h4>
                                <p className="card-text">Become a Back-end developer. Learn NextJs, SQL, Python...
                                    <Link to={'/'} >Read more</Link> </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3  col-sm-6 ' data-aos='slide-up'>
                        <div className="card color-card">
                            <div className='img-card'>
                                <img className="card-img-top3 " src={require('./assets/images/QA-img.png')}
                                    width={100} height={100} alt="Quality Assurance" />
                            </div>
                            <div className="card-body program3">
                                <h4 className="card-title">Quality Assurance</h4>
                                <p className="card-text">Become a pro in quality assurance/software testing.
                                    Learn all the methodologies required... <Link to={'/'} >Read more</Link></p>

                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3  col-sm-6 ' data-aos='slide-up'>
                        <div className="card color-card">
                            <div className='img-card'>
                                <img className='card-img-top4' src={require('./assets/images/cyber-img.png')}
                                    width={120} height={125} alt="Cyber security" />
                            </div>

                            <div className="card-body program4">
                                <h4 className="card-title">Cyber Security</h4>
                                <p className="card-text">Become a pro in cyber security. Protect the digital world and Stay ahead of
                                    cyber threats...
                                    <Link to={'/'}>Read more</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION-4--- CALL TO PARTNERSHIP SECTION */}
            <div className='container-fluid section-4'>
                <div className='row body3-row'>
                    <div className='col-xl-8 col-md-7  body-column'>
                        <div className='register' data-aos='zoom-in'>
                            <h2 className='fw-bold' >Call To Partnership</h2>
                            <p>Are you passionate about shaping the future of tech education? Do you believe in the power of coding to
                                transform lives and industries? We invite you to explore exciting partnership opportunities with Tech4All.
                                Partnering with Tech4All is an opportunity to invest in education, innovation, and the future of tech.
                                Together,
                                we can empower individuals to unlock their full potential and drive positive change in the tech landscape.                            </p>

                        </div>
                    </div>

                    <div className='col-xl-4 col-md-4 register-button' data-aos='zoom-in'>
                        <button className='btn btn-outline-light btn-lg rounded-pill fw-bold border-2'>Register Now</button>
                    </div>
                </div>
            </div>

            {/* SECTION-5--- CONTACT SECTION */}
            <div className='container-lg'>
                <div className='row Contact-row'>
                    <div className='col-12 contact-section' data-aos='slide-up'>
                        <h2 className='program-head fw-bold'>CONTACT</h2>
                        <p className='program-para'> Contact us today to begin your Tech journey.
                        </p>
                    </div>

                    <div className='col-lg-4 col-sm-12 contact-col1'>

                        <div className='card ' id='contact-card1' data-aos='slide-up'>
                            <div>
                                <i className="bi bi-geo-alt contact-card-icon"></i>
                                <h5 className="card-title" id='address'>Address</h5>
                                <p className="card-text">No5, Giwa plaza, Ikoyi, Lagos State </p>
                            </div>

                            <div>
                                <i className="bi bi-telephone contact-card-icon"></i>
                                <h5 className="card-title" id='address'>Call Us</h5>
                                <p className="card-text"> +234 805 931 0239</p>
                            </div>

                            <div>
                                <i className="bi bi-envelope contact-card-icon" ></i>
                                <h5 className="card-title" id='address'>Email Us</h5>
                                <p className="card-text">Techalllimited@gmail.com  </p>
                            </div>

                            {/* EMBEDED MAP */}

                            <div>
                                <MyMap />
                            </div>

                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className='col-lg-8 col-sm-12 contanct-col2'>
                        <div className='card' id='contact-form' data-aos='slide-up'>
                            <TechForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION-6--- FAQ SECTION */}
            <div className='Accord-contain'>
                <div className='container-lg'>
                    <div className='row' >
                        <div className='col-12 Accord-col'>
                            <h2 className='fw-bold text-center mb-5 '>Frequently Asked Questions</h2>
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION-7--- FOOTER SECTION */}
            <div className='container'>
                <Footer />
            </div>
        </div>
    )
}

export default Body; 