import Navbar from '../components/dashboard/navbar'
import Dashboardheader from './dashboardHeader'
import EngagementRates from './engagement-rates'
import PerformenceMetrics from './perfomence-metrics'

const Dashboard = () => {
  return (
    <div className='flex flex-row  bg-[#fbfbfb]  mx-auto'>
      <div className='w-[20%] '>
        <Navbar />
      </div>
      <div className='flex flex-col w-full '>
        <div className='border bg-[#ffff] '>
          <Dashboardheader />
        </div>
        <div className='px-10 mt-10 '>
          <PerformenceMetrics />
        </div>
        <div>
          <EngagementRates />
        </div>
      </div>
    </div>
  )
}

export default Dashboard