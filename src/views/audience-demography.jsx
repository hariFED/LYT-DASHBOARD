import DoughnutChart from "../components/dashboard/dougntchar"
import StackedChart from "../components/dashboard/stackedChart"

const AudienceDemography = () => {
    return (
        <>
            <div className="text-[18px]">
                Audience Demography
            </div>
            <div className="flex items-center mt-5">
                <div className="flex flex-col">
                    <p className="font-medium ">Gender</p>
                    <DoughnutChart />
                </div>
                <div className="w-[150%]">
                    <StackedChart />
                </div>
            </div>

        </>
    )
}

export default AudienceDemography