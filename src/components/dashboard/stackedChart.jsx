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
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {

        y: {
            stacked: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            data: [30, 20, 61, 44, 98, 58, 80],
            backgroundColor: 'rgba(15, 164, 74, 0.1)',
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

