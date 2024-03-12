import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (
        <div>
            <div className={`relative flex h-12 pl-5 items-center gap-5 border ${isFocused ? 'border-gray-400' : ''}`}>
                <Search className="text-gray-400" />
                <input
                    className="w-full outline-none h-9"
                    placeholder="Search.."
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                {isFocused && (
                    <div className="absolute left-0 w-full p-2 bg-white border border-gray-300 cursor-pointer top-full">
                        <div className="border-b hover:bg-gray-200">
                            Empty
                        </div>
                        <div className="border-b hover:bg-gray-200">
                            Empty
                        </div>
                        <div className="border-b hover:bg-gray-200">
                            Empty
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
