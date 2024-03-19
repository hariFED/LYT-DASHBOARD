import Navbar from '../components/dashboard/navbar'
import AudienceDemography from './audience-demography'
import Dashboardheader from './dashboardHeader'
import EngagementRates from './engagement-rates'
import PerformenceMetrics from './perfomence-metrics'
import PostActivity from './post-activity'

const Dashboard = () => {
  return (
    <div className='flex flex-row  bg-[#fbfbfb] poppins  mx-auto'>
      <div className='w-[20%] '>
        <Navbar />
      </div>
      <div className='flex flex-col w-full '>
        <div className='border bg-[#ffff] '>
          <Dashboardheader />
        </div>
        <div className='px-10 mt-5 '>
          <PerformenceMetrics />
        </div>
        <div className='flex'>
          <div className='w-[60%] h-1/4 px-10 my-5 flex flex-col '>
            <div>
              <EngagementRates />
            </div>
            <div>
              <PostActivity />
            </div>
          </div>
          <div>
            <AudienceDemography />
          </div>
        </div>
        <AudienceDemography />
      </div>

    </div>
  )
}

export default Dashboard