
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,  // Import Filler for area charts
    Title,
    Tooltip,
   
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,  // Important for area charts
    Title,
    Tooltip,                                                                                                         
    

);

const ChartMethod = () => {

    const data = {
        labels: [
            '2024-12-01T10:00:00Z',
            '2024-12-01T10:05:00Z',
            '2024-12-01T10:10:00Z',
            '2024-12-01T10:15:00Z',
            '2024-12-01T10:20:00Z',
        ],
        datasets: [
            {
                label: '',
                data: [
                    45, 50, 47, 52, 49, 80, 39, 54, 65 ,87, 83
                ],
                fill: 'start',  // Fill from the bottom
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                BorderColor: '#fff',
                BackgroundColor: 'rgba(54, 162, 235, 1)',
                tension: 0.9,
                pointRadius: 0
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            
            title: {
                display: false,
                text: ''
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    units: 'second'
                },

                title: {
                    display: false,
                    text: 'Time',
                },

                ticks: {
                    display: false,  // Hides x-axis labels
                  },
                  grid: {
                    display: false,  // Hides horizontal grid lines (y-axis)
                },
            },

            y: {
                title: {
                    display: 'false',

                },
                ticks: {
                    display: false,  // Hides x-axis labels
                  },
                  grid: {
                    display: false,  // Hides horizontal grid lines (y-axis)
                    drawBorder: false,
                },

            }
        }
    };


    return (
        <div>
            <div className="graph-row">

                <div class="card">
                    <div class="card-body">

                        <h4 class="card-title" id="title">Full TTFB</h4>
                        <Line data={data} options={options} />
                    </div>
                </div>




                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="title">First Contentful Paint</h4>
                        <Line data={data} options={options} />
                    </div>
                </div>




                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="title">Largest Contentful Paint</h4>
                        <Line data={data} options={options} />
                    </div>
                </div>




                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="title">Visually Complete</h4>
                        <Line data={data} options={options} />
                    </div>
                </div>

            </div>

            <div className="graph-row">

                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="title">CPU Time</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>




                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="title">Total Blocking Time</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>




                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="title">Cumulative Layout Shift</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>




                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" id="title">Page Weight</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>

            </div>


        </div>
    )
}




import { Chart } from "chart.js/auto"
import { useRef, useEffect } from "react"

const Graphs = () => {

    const chartRef = useRef(null); // Create a reference to the canvas element
    let chartInstance = null; // Variable to hold the chart instance

    useEffect(() => {
        if (chartInstance) {
            chartInstance.destroy(); // Destroy existing chart instance before creating a new one
        }
        const ctx = chartRef.current.getContext('2d');// Get the 2D context of the canvas
        const data = generateCpuTimeData();

        //reassigning the chartInstance value
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'CPU TIME',
                    data: data.values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    fill: true,
                    tension: 0.3,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {display: false}
                },
                scales: {
                    x: {
                        title: {
                            display: false,
                            text: 'Time (s)',
                        }, 
                        ticks:{
                            display: false
                        },
                        grid:{
                            display: false,
                        }
                    },
                    y: {
                        title: {
                            display: false,
                            text: 'CPU Time (s)'
                        },
                        ticks:{
                            display: false,
                        },
                        grid:{
                            display: false,
                        }
                    }
                }
            }
        })
        return () => chartInstance.destroy();
    }, []);

    const generateCpuTimeData = () => {
        const labels =  [];
        const values =  [];
        let baseValue = 1.00;

        for (let i=0; i<20; i++){
            labels.push(i)
            const fluctuation = (Math.random() * 0.1) - 0.05;
            baseValue += fluctuation;
            values.push(baseValue.toFixed(2));
        }
        return {labels, values};
    }  



 return (
        <div>
            <div className="graph-row">

                <div class="card">
                    <div class="card-body">

                        <h4 class="card-title" id="title">Full TTFB</h4>
                       <canvas ref={chartRef}></canvas>
                    </div>
                </div>



</div>
   )