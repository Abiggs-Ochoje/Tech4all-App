import useAosAnimation from "./useAosAnimation";

const Footer = () => {

    useAosAnimation();

    return(
        <div className="containter-lg footer-container" >
            <div className="row" data-aos='zoom-in'>
                <div className="col-xl-5  col-md-4 footer-col1" >
                    <h3> <img src={require ("./assets/images/4allLogo.png")} width={40} height={40} 
                    alt="Logo"/> Tech4all</h3>
                    
                    <p id="footer-p"> <span className="fw-bold">Phone: </span> +234 805 931 0239</p>
                    <p id="footer-p"> <span className="fw-bold">Email: </span> Techalllimited@gmail.com</p>
                </div>

                <div className="col-xl-7 col-md-8 footer-lists" >
                    <div>
                        
                        <ul id="list-id">
                        <h6>Follow Us</h6>
                            <li>
                            <i className="bi bi-facebook" id="footer-icon" ></i> <span>Facebook</span>
                            </li>
                            <li>
                            <i className="bi bi-whatsapp" id="footer-icon"></i> <span>Whatsapp</span>
                            </li>
                            <li>
                            <i className="bi bi-linkedin" id="footer-icon"></i> <span>LinkedIn</span>
                            </li>
                            <li>
                            <i className="bi bi-instagram" id="footer-icon"></i> <span>Instagram</span>
                            </li> 
                        </ul>
                    </div>

                    <div> 
                        <ul id="list-id">
                        <h6>Programs</h6>
                            <li>Frontend</li>
                            <li>Backend</li>
                            <li>Quality Assurance</li>
                            <li>Cyber Security</li>
                        </ul>
                    </div>

                    <div>                     
                        <ul id="list-id">
                        <h6>Partnership</h6>
                            <li>Hire quality graduates</li>
                            <li>Collaborate with us</li>
                            <li>Scholarships</li>
                        </ul>
                    </div>

                    

                    <div> 
                        <ul id="list-id">
                        <h6>Resourses</h6>
                            <li>Privacy</li>
                            <li>FAQ</li>    
                        </ul>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="row" >
                <div className="col-12">
                    <p className="text-center mb-5 copyright"><small> <i className="bi bi-c-circle"></i> Copyright <span className="fw-bold">Tech4all </span>
                      All Rights Reserved</small></p>                
                </div>
            </div>

        </div>
    )
}

export default Footer;