// import PerfomanceRegister from "./PerformanceRegister"
import { Link } from "react-router-dom";

const PerformanceBar = () => {
    return (

        <div className="bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <h2>Get Flawless Results</h2>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div>
                            <button className="butts"><Link to="/register" className="Link-but" >Start Testing Now</Link> </button>
                            <button className="butts">Get a Demo</button>
                        </div>
                        
                    </div>
                </div>

                {/* <PerfomanceRegister/> */}
            </div>




        </div>
    )
}

export default PerformanceBar;