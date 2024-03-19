import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart'
        }
    },
    scales: {
        x: {
            ticks: {
                font: {
                    size: 16, // Adjust the font size of x-axis labels
                    weight: '400' // Adjust the font weight of x-axis labels
                }
            },
            grid: {
                display: false,
            }
        },
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 20,
                font: {
                    size: 16, // Adjust the font size of y-axis labels
                    weight: '400' // Adjust the font weight of y-axis labels
                }
            },


        }
    }
};

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

export const data = {
    labels,
    datasets: [
        {
            data: [30, 20, 61, 44, 98, 58, 80],
            backgroundColor: 'rgba(15, 164, 74, 0.1)',
            barThickness: 40

        }
    ]
};

const Chart = () => {
    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    );
};

export default Chart;