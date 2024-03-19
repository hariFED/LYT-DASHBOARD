import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Chart from '../components/dashboard/chartBar';

function DropdownMenu() {
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = () => {
        setVisible(!visible);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setVisible(false);
    };

    const menuItems = ["Weekly", "Monthly", "Daily", "Yearly"];

    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='text-[18px]'>
                    Engagement Rates
                </div>
                <div className="relative text-sm text-center cursor-pointer">
                    <div className="flex bg-[#e3f2e9] items-center gap-1 justify-center w-[100px] h-8 border rounded-[4px]" onClick={handleClick}>
                        {selectedItem || menuItems[0]}
                        <ChevronDown width={15} />
                    </div>
                    <div className={`absolute   text-center bg-white border top-8 rounded-[4px] ${visible ? "block" : "hidden"} left-0`}>
                        <ul >
                            {menuItems.map((item, index) => (
                                <li key={index} className='h-8 w-[99px] border-b text-center flex items-center justify-center hover:bg-[#e3f2e9]' onClick={() => handleItemClick(item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            <div className='p-5 mt-5 bg-white'>
                <Chart />
            </div>
        </>
    );
}

export default DropdownMenu;
