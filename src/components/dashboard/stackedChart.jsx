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
    indexAxis: 'y',
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
        legend: {
            labels: {
                boxWidth: "20", // Change box shape to circle
            },
        },
    },
    barPercentage: 0.7, // Adjust the width of the bars
    categoryPercentage: 10,
    responsive: true,
    scales: {
        x: {
            display: false,
            gird: {
                display: false
            }
        },

        y: {
            grid: {
                display: false
            },
            stacked: true,
            display: false
        },


    },
};

const labels = ['January', 'February', 'July', "Aug"];

export const data = {
    labels,
    datasets: [
        {
            data: [10, 8, 4, 3],
            backgroundColor: 'rgba(40, 51, 80, 1)',
            barThickness: 40
        },
        {
            data: [30, 20, 9, 8],
            backgroundColor: 'rgba(15, 164, 74, 1)',
            barThickness: 40
        },
        {
            data: [35, 22, 10, 8.5],
            backgroundColor: 'rgba(255, 248, 84, 1)',
            barThickness: 40
        }

    ],
};

const StackedChart = () => {
    return (
        <Bar options={options} data={data} />
    )
}

export default StackedChart

