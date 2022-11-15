import React from "react";

function Filter() {
    return (
        <div className="w-full text-black">
            <div className="container m-auto">
                <div
                    class="inline-flex  bg-gray-100 bg-opacity-30 mx-auto">
                    <button class=" rounded-l-lg sm:py-2 px-[12px] sm:px-6 inline-flex items-center justify-center font-medium border border-gray-300 text-center focus:bg-primary text-white text-sm sm:text-base capitalize bg-green-400"
                    >
                        Dates
                    </button>
                    <button class="sm:py-2 px-[12px] sm:px-6 inline-flex items-center justify-center font-medium border border-gray-300 text-center focus:bg-primary text-black text-sm sm:text-base capitalize bg-white"
                    >
                        Price
                    </button>
                    <button class="sm:py-2 px-[12px] sm:px-6 inline-flex items-center justify-center font-medium border border-gray-300 text-center focus:bg-primary text-black text-sm sm:text-base capitalize bg-white"
                    >
                        Keyword
                    </button>
                    <button class=" rounded-r-lg sm:py-2 px-[12px] sm:px-6 inline-flex items-center justify-center font-medium border border-gray-300 text-center focus:bg-primary text-black text-sm sm:text-base capitalize bg-white"
                    >
                        More Filters
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Filter