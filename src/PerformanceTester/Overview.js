import Navbar from "../Navbar";
import PerformanceBar from "./PerformanceBar";

function Overview() {
    return (

        <div>
            <div className="PerfomanceNav">
                <Navbar color='rgba(78, 97, 126)' />
            </div>

            <div className="performHead">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                                <ul className="carousel-indicators">
                                    <li
                                        data-bs-target="#carouselId"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="First slide"
                                    ></li>
                                    <li
                                        data-bs-target="#carouselId"
                                        data-bs-slide-to="1"
                                        aria-label="Second slide"
                                    ></li>
                                    <li
                                        data-bs-target="#carouselId"
                                        data-bs-slide-to="2"
                                        aria-label="Third slide"
                                    ></li>
                                    <li
                                        data-bs-target="#carouselId"
                                        data-bs-slide-to="3"
                                        aria-label="Fourth slide"
                                    ></li>
                                    <li
                                        data-bs-target="#carouselId"
                                        data-bs-slide-to="4"
                                        aria-label="Fifth slide"
                                    ></li>
                                    <li
                                        data-bs-target="#carouselId"
                                        data-bs-slide-to="5"
                                        aria-label="Sixth slide"
                                    ></li>
                                    <li
                                        data-bs-target="#carouselId"
                                        data-bs-slide-to="6"
                                        aria-label="Seventh slide"
                                    ></li>
                                    
                                </ul>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img
                                            src={require('./assets2/Images/testing-image1.png')} 
                                            className="w-100 d-block"
                                            alt="First slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                             src={require('./assets2/Images/testing-image2.webp')}
                                            className="w-100 d-block"
                                            alt="Second slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require('./assets2/Images/testing-image3.png')}
                                            className="w-100 d-block"
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require('./assets2/Images/testing-image4.png')}
                                            className="w-100 d-block"
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require('./assets2/Images/testing-image5.webp')}
                                            className="w-100 d-block"
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require('./assets2/Images/testing-image6.png')}
                                            className="w-100 d-block"
                                            alt="Third slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require('./assets2/Images/testing-image7.webp')}
                                            className="w-100 d-block"
                                            alt="Third slide"
                                        />
                                    </div>

                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselId"
                                    data-bs-slide="prev"
                                >
                                    
                                    <span className="visible">
                                        <img src= {require('./assets2/Images/Prev.png')} alt="Previous" 
                                        style={{width:50, height:50 }}/>
                                    </span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselId"
                                    data-bs-slide="next"
                                >
                                   
                                    <span className="visible">
                                    <img src= {require('./assets2/Images/Next.png')} alt="Next"
                                     style={{width:50, height:50 }}/>
                                    </span>
                                </button>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

            <div>
                <PerformanceBar/>
            </div>
        </div>
    )
}

export default Overview;