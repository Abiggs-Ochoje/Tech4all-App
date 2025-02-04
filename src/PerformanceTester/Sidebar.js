
import { VscPreview } from "react-icons/vsc";
import { AiOutlineBars } from "react-icons/ai";
import { CiWavePulse1 } from "react-icons/ci";
import { BiNetworkChart } from "react-icons/bi";
import { GiLighthouse } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="side-content">
                <ul className="nav flex-column">

                    <li className="nav-item" id="side-heading">
                        <h3> <img src={require('./assets2/Images/4allLogo.png')} className="side-logo" /> Tech4all</h3>
                        
                    </li>
                    <hr></hr>
                    <li className="nav-item">
                        <a className="nav-link active"> < VscPreview /> Overview</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"> <CiWavePulse1 /> Web Vitals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><AiOutlineBars />Requests</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"> <BiNetworkChart /> Metrics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"> <GiLighthouse /> Lighthouse</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"> <GrValidate /> Validation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"> <FaCode /> Console</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"> <CiSettings /> Settings</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar;