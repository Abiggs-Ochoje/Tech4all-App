import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Graph from "./Graphs";

const MainView = () => {
    return (

        <div className="wrapper-mainview">


            <div className="mainview-side">
                <Sidebar />
            </div>
            <div className="mainview-content">
                <div className="Dashboard">
                    <Dashboard />
                </div>

                <div className="graphCard">
                    <Graph />
                </div>

            </div>




        </div>
    )
}

export default MainView;