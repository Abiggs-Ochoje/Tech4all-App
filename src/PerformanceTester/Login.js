import { Link } from "react-router-dom";
import useAosAnimation from "../useAosAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";


const Login = () => {

    useAosAnimation()
    return (
        <div className="wrapper-login">

            <div className="container">
                <div className="row">

                    <div className="col-md-12 form-col" >
                        <div className="h2-div">
                            <h2 className="text-Login">Login</h2>
                        </div>

                        <form className="login-form">
                            <div className="form-divLogin ">
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} className="ps-2" />
                                    <input type="email" placeholder="Enter your email" id="email" className="input-login" />
                                </span>
                            </div>
                            <div className="form-divLogin">
                                <span>
                                    <FontAwesomeIcon icon={faLock} className="ps-2" />
                                    <input type="password" id="password" placeholder="Enter your password" className="input-login"
                                        style={{ marginTop: '24px' }} />
                                </span>
                            </div>
                        </form>

                        <div className="buts-div">
                            <button className="butts-login"><Link to='/dashboard' id="buts-log"> Login </Link></button>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                            <small>Don't have an account? <Link to='/register' style={{ color: 'black' }}>Register now</Link></small>
                        </div>
                    </div>


                </div>

            </div>





        </div>
    )
}

export default Login;