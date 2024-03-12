import {
    LayoutDashboard,
    BarChart2,
    UsersRound,
    Bell,
    MessageCircleQuestion,
    Settings,
    LogOut
} from "lucide-react"

import { Media } from "../../assets/icons/Media"
import Logo from "../../assets/Logo"

const navItems = [
    {
        name: "Dashboard",
        icon: <LayoutDashboard />
    },
    {
        name: "Analytics",
        icon: <BarChart2 />
    },
    {
        name: "Communities",
        icon: <UsersRound />
    },
    {
        name: "Notifications",
        icon: <Bell />
    },
    {
        name: "Media",
        icon: <Media />
    },
    {
        name: "Support",
        icon: <MessageCircleQuestion />
    },
    {
        name: "Settings",
        icon: <Settings />
    },


]


const Navbar = () => {
    return (
        <>
            <div className="flex flex-col justify-between h-screen border poppins">
                <div className="flex flex-col text-center " >
                    <div className="flex items-center justify-center py-10 text-4xl">
                        <Logo />
                    </div>

                    <div className="w-full ">
                        {navItems.map((items) => {
                            return (
                                <>
                                    <div key={items.name} className="px-[15%] flex gap-4  py-4 cursor-pointer hover:text-[#ffffff] hover:bg-[#0fa44a]">
                                        <div>
                                            {items.icon}
                                        </div>
                                        <div>{items.name}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                <div className="flex  cursor-pointer text-[#0fa44a] gap-3 items-center px-[25%] py-10">
                    <LogOut />
                    <div>
                        Log-out
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar