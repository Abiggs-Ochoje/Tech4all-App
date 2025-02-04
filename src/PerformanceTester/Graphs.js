import ChartCode from "./ChartCode";

const Graphs = () => {

    
 return (
        <div>
            <div className="graph-row">

                <div class="card" id="card-graph">
                    <div class="card-body">
                   
                   <div className=" body-graph">
                    <h4 class="card-title" id="title">Full TTFB                 </h4>
                        <div id="">
                        <p id="above-ms">322ms</p>
                        <p id="below-ms">-259ms</p>
                        </div>
                    
                   </div>
                        
                        <ChartCode/>
                    </div>
                </div>




                <div class="card" id="card-graph">
                    <div class="card-body">
                      
                    <div className=" body-graph">
                    <h4 class="card-title" id="title">First Contentful Paint</h4>
                        <div id="">
                        <p id="above-ms">322ms</p>
                        <p id="below-ms">-259ms</p>
                        </div>
                    
                   </div>

                        <ChartCode/>
                    </div>
                </div>




                <div class="card" id="card-graph">
                    <div class="card-body">

                        <div className=" body-graph">
                    <h4 class="card-title" id="title"> Largest Contentful Paint                </h4>
                        <div id="">
                        <p id="above-ms">322ms</p>
                        <p id="below-ms">-259ms</p>
                        </div>
                    
                   </div>
                        <ChartCode/>
                    </div>
                </div>




                <div class="card" id="card-graph">
                    <div class="card-body">
                        <div className=" body-graph">
                    <h4 class="card-title" id="title">Visually Complete</h4>
                        <div id="">
                        <p id="above-ms">322ms</p>
                        <p id="below-ms">-259ms</p>
                        </div>
                    
                   </div>
                        <ChartCode/>
                    </div>
                </div>

            </div>

            <div className="graph-row">

                <div class="card" id="card-graph">
                    <div class="card-body">
                        <div className=" body-graph">
                    <h4 class="card-title" id="title">CPU Time</h4>
                        <div id="">
                        <p id="above-ms">322ms</p>
                        <p id="below-ms">-259ms</p>
                        </div>
                   </div>
                        <ChartCode/>
                    </div>
                </div>




                <div class="card" id="card-graph">
                    <div class="card-body">
                        <div className=" body-graph">
                    <h4 class="card-title" id="title">Total Blocking Time</h4>
                        <div id="">
                        <p id="above-ms">322ms</p>
                        <p id="below-ms">-259ms</p>
                        </div>
                   </div>
                        <ChartCode/>
                    </div>
                </div>




                <div class="card" id="card-graph">
                    <div class="card-body">
                        <div className=" body-graph">
                    <h4 class="card-title" id="title">Cumulative Layout Shift</h4>
                        <div id="">
                        <p id="above-ms">322ms</p>
                        <p id="below-ms">-259ms</p>
                        </div>                
                   </div>
                        <ChartCode/>
                    </div>
                </div>




                <div class="card" id="card-graph">
                    <div class="card-body">
                        <div className=" body-graph">
                    <h4 class="card-title" id="title">Page Weight</h4>
                        <div id="">
                        <p id="above-ms">322ms</p>
                        <p id="below-ms">-259ms</p>
                        </div>            
                   </div>
                        <ChartCode/>
                    </div>
                </div>
            </div>
        </div>
    )


    
   
}

export default Graphs;