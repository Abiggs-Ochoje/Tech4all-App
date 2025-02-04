import { Chart } from "chart.js/auto"
import { useRef, useEffect } from "react"

const ChartCode = () => {

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
                   
                    borderColor: 'rgb(176, 188, 213)',
                    backgroundColor: 'rgb(176, 188, 213)',
                    fill: true,
                    tension: 0.3,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {display: false}
                },
                pointRadius: 0,
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
                        },
                       
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
                        },
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

        for (let i=0; i<10; i++){
            labels.push(i)
            const fluctuation = (Math.random() * 0.1) - 0.05;
            baseValue += fluctuation;
            values.push(baseValue.toFixed(2));
        }
        return {labels, values};
    }  



 return (
        <div>
            <div >

                
                   
                        
                       <canvas ref={chartRef}></canvas>
                    
              



              



               


            </div>



        </div>
    )


    
   
}

export default ChartCode;
