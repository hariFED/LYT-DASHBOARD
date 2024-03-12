import AccountAvatar from "../components/dashboard/accountavatar"
import SearchBar from "../components/dashboard/searchbar"

const Dashboardheader = () => {
    return (
        <div className='flex items-center justify-between h-20 px-20 '>
            <div className='text-xl poppins'>
                Metrics looking good, Snow!
            </div>
            <div className=" w-96">
                <SearchBar />
            </div>
            <div>
                <AccountAvatar name="Snow Olohijere" source="/src/assets/avatar.png" email="uch231@gmail.com" />
            </div>
        </div>
    )
}

export default Dashboardheader