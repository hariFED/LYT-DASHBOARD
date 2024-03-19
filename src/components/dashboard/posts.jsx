import { Ellipsis, Eye } from 'lucide-react'

const Posts = ({ avatar, content, date, views }) => {
    return (
        <div className='flex items-center justify-between px-4 py-2 mt-4 border-b'>
            <div className='flex items-center gap-4'>
                <img src={avatar} alt="" />

                <p className='w-[15em] text-sm '>{content}</p>
            </div>
            <div>
                {date}
            </div>
            <div className='flex gap-2 '>
                <Eye className='bg-[#0fa44a] text-white rounded-full  ' />
                {views}k
            </div>
            <div className='cursor-pointer'>
                <Ellipsis />
            </div>
        </div>
    )
}


export default Posts