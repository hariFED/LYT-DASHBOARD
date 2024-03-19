import Posts from '../components/dashboard/posts'

const data = [
    {
        avatar: "/src/assets/posts/Rectangle 21.png",
        content: "Success can be achieved by being bold enough..",
        date: "May 30",
        views: 1.1
    },
    {
        avatar: "/src/assets/posts/Rectangle 22.png",
        content: "Knowing what to do can never be okay, you have to...",
        date: "May 30",
        views: 3.1
    }
]

const PostActivity = () => {
    return (
        <>
            <div className='text-[#1A1A1A] text-[20px] font-medium mt-5 '>
                Post Activity
            </div>
            <div className='bg-white'>
                {data.map((items, index) => {
                    return <Posts avatar={items.avatar} content={items.content} date={items.date} views={items.views} key={index} />
                })}

            </div>
        </>
    )
}

export default PostActivity