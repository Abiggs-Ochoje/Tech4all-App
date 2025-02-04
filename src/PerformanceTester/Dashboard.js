// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import  {faClock, faDesktop, faGlobe}  from "@fortawesome/free-solid-svg-icons";

import {  BiDesktop, BiGlobe, BiNetworkChart , BiSolidArrowFromTop, BiTime, BiLinkExternal } from "react-icons/bi"
import { SiPaloaltonetworks} from "react-icons/si"
import {GiServerRack} from "react-icons/gi"
import {FiChrome} from "react-icons/fi"
import {LiaFantasyFlightGames} from "react-icons/lia"

const Dashboard = () => {

   
    return (
        
        <div className="dashboard">
            
            <div className="board-content1">
                <div className="dashboard-list">
                    <h5>Page Speed Report</h5>
                    <small >
                    <a style={{color:'white'}} href="#">http://www.Tech4all.com/<BiLinkExternal/></a>
                         </small>
                    <ul >
                        <li><BiTime id="icon"/>4th NOVEMBER 2024, 5:00</li> 
                       <li>< LiaFantasyFlightGames  id="icon"/> LIGHTHOUSE 165</li>
                        <li><SiPaloaltonetworks  id="icon"/> 8 MBPS BANDWIDTH </li>     
                        <li><BiNetworkChart  id="icon"/> 40 MS LATENCY </li>
                        <li><GiServerRack  id="icon"/> 1S CBU THROTTLING </li>
                        <li><FiChrome  id="icon"/> CHROME 106 </li>
                         <li><BiGlobe  id="icon"/> UK </li>
                    </ul>
                </div>

                <div className="box" >
                   
                        <div className="card-body">
                            <h5 className="card-title">90%</h5>
                            <p className="card-text">LAB SCORE</p>
                        </div>
                 
                </div>

                <div className="box" >
                  
                        <div className="card-body">
                            <h5 className="card-title" style={{color:'rgb(4, 82, 4)'}}>90%</h5>
                            <p className="card-text">USER SCORE</p>
                        </div>
                   
                </div>


               
            </div>


        </div>
    )
}

export default Dashboard;