import { Link } from "react-router-dom";

const Navbar = ({color}) => {
    return (
       
            <nav className="navbar navbar-expand-lg " style={{backgroundColor: color}}>
                <div className="container-lg">

                    <Link className="navbar-brand text-light " to={'/'}> 
                    {/* <img src={require ("./assets/images/4allLogo2.png")} width={40} height={40} id="logo-img"/> */}
                     Tech4all</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse nav-link-div" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to='/'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-light" to='/about'>About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-light" to={'/'}>Blog</Link>
                            </li>

                             <li className="nav-item">
                                <Link className="nav-link text-light" to={'/'}>Docs</Link>
                            </li>

                            <a className="nav-link dropdown-toggle text-light" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                  Programs
                             </a>

                            <li className="nav-item">
                                <Link className="nav-link text-light"to={'/overview'}>Performance Testing</Link>
                            </li>

                            <li className="nav-item dropdown">

                                

                                <ul className="dropdown-menu bg-light">
                                    <li><Link className="dropdown-item" to={'/'}>Front-end web development</Link></li>
                                    <hr/>
                                    <li><Link className="dropdown-item" to={'/'}>Back-end web development</Link></li>
                                    <hr/>
                                    <li><Link className="dropdown-item" to={'/'}>Software Testing</Link></li>
                                    <hr/>
                                    <li><Link className="dropdown-item" to={'/'}>UI/UX</Link></li>
                                    <hr/>
                                    <li><Link className="dropdown-item" to={'/'}>Cyber Security</Link></li>
                                </ul>

                            </li>

                        
                        </ul>


                        <button className="btn btn-light btn-sm px-3 rounded-pill nav-button  " type="submit">Log In</button>

                    </div>
                </div>
            </nav>

    )
}

export default Navbar;