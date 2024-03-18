import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    layouts
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
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 20
            }
        }
    }


}



const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]

export const data = {
    labels,
    datasets: [
        {

            data: [30, 20, 61, 44, 98, 58, 80],
            backgroundColor: 'rgba(255,99,132,0.5)',

        }
    ]

}



const Chart = () => {
    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart