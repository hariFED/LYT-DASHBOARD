import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
        {
            label: 'Age group',
            data: [35, 55, 15],
            backgroundColor: [
                'rgba(40, 51, 80, 1)',
                'rgba(15, 164, 74, 1)',
                'rgba(255, 248, 84, 1)',

            ],
            borderColor: [
                'rgba(40, 51, 80, 1)',
                'rgba(15, 164, 74, 1)',
                'rgba(255, 248, 84, 1)',
            ],
            borderWidth: 0,
            clip: 5,
            weight: 2
        },
    ],
};

export const options = {
    cutout: "80%",
    radius: "90",
    rotation: "210",
    plugins: {
        legend: {
            labels: {
                boxWidth: "20", // Change box shape to circle
            },
        },
    },
}

const DoughnutChart = () => {
    const containerStyle = {
        width: '100px', // Set the desired width of the container
    };
    return (
        <div>

            <Doughnut style={containerStyle} data={data} options={options} />
        </div>
    )
}

export default DoughnutChart