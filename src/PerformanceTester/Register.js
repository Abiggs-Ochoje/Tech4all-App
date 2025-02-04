import { Link } from "react-router-dom";
import useAosAnimation from "../useAosAnimation";


const Register = () => {

    useAosAnimation()
    return (
        <div className="wrapper-register">

            <div className="container">
                <div className="row">
                   
                    <div className="col-md-6 form-col-register" >
                    <div className="h2-div">
                        <h2 className="text-register">Register with us</h2>

                    </div>

                        <form className="register-form">
                            <div className="form-div">
                                <label id="label-register"> Name </label>
                                <input type="text" placeholder="Last name         First name" />
                            </div>



                            <div className="form-div">
                                <label id="label-register"> Email </label>
                                <input type="email" placeholder="abc@mail.com" />
                            </div>

                            <div className="form-div">
                                <label id="label-register"> Phone </label>
                                <input type="number" />
                            </div>

                            <div className="form-div">
                                <label id="label-register"> Company </label>
                                <input type="text" />
                            </div>

                            <div className="form-div">
                                <label id="label-register"> Country </label>
                                <input type="text" />
                            </div>

                            <div className="form-div">
                                <label id="label-register"> Create Password </label>
                                <input type="password" />
                            </div>
                        </form>
                        <div className="buts-div">
                            <button className="butts-buts"><Link to='/login' id="buts-reg"> Register </Link></button>

                        </div>
                    </div>

                    <div className="col-md-6 image-col bounce-slantly"  data-aos='zoom-out'>
                        <img src={require("./assets2/Images/registerImg2.png")} alt="Registration page imagae" className="img-reg"  />
                    </div>

                </div>

            </div>





        </div>
    )
}

export default Register;