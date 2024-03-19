import Metrics from "../components/dashboard/metrics"

const PerformenceMetrics = () => {
    return (
        <>
            <div>
                <div className="flex flex-row justify-between ">
                    <div className="text-2xl">
                        Performence Metrics
                    </div>
                    <div className="text-sm text-[#0FA44A] underline decoration-dotted cursor-pointer underline-offset-4">
                        Download Summary
                    </div>
                </div>
                <div className="flex justify-between gap-5 mt-5">
                    <Metrics />
                </div>
            </div>
        </>
    )
}

export default PerformenceMetrics