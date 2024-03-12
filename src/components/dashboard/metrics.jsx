import { ArrowUpRight, ArrowUp } from "lucide-react"
import GraphIcon from "../../assets/performance-metrics icons/graph-icon"

const data = [
    {
        title: "Followers",
        number: 93.2,
        percentage: 0.8,


    },
    {
        title: "Likes",
        number: 400,
        percentage: 1.21,


    },
    {
        title: "Comments",
        number: 289.1,
        percentage: 2.7,


    }

]

const Metrics = () => {
    return (
        <>
            {data.map((data) => {
                return (
                    <div className="flex flex-col w-1/3 bg-[#ffff] gap-4 p-5 " key={1}>
                        <div className="flex justify-between ">
                            <div className="text-gray-500">
                                {data.title}
                            </div>
                            <div className="text-gray-700 cursor-pointer hover:text-black" >
                                <ArrowUpRight />
                            </div>
                        </div>
                        <div className="text-5xl font-medium">
                            {data.number}k
                        </div>
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center text-sm text-[#0FA44A]">
                                <ArrowUp width={15} /> &nbsp; {data.percentage}% <span className="text-gray-400">&nbsp; in the last 7 days</span>
                            </div>
                            <div>
                                <GraphIcon />
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Metrics