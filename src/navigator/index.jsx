import React from "react";

function Navigator({ day, nextMonth, previousMonth, setTodayDate }) {
    return (
        <div className={"flex justify-between items-center w-36 h-8"}>
            <div
                onClick={() => previousMonth(day)}
                className={
                    "w-10 h-8 border border-gray-300 rounded-md flex justify-center items-center  hover:shadow-sm cursor-pointer hover:bg-gray-100"
                }>
                <img
                    className={"w-4 h-4"}
                    src={"/svg/leftChevron.svg"}
                    alt='left'
                />
            </div>
            <div
                onClick={() => setTodayDate()}
                className={
                    " border border-gray-300 rounded-md text-lg h-8 w-auto px-4 hover:shadow-sm cursor-pointer hover:bg-gray-100"
                }>
                Today
            </div>
            <div
                onClick={() => nextMonth(day)}
                className={
                    "w-10 h-8 border border-gray-300 rounded-md flex justify-center items-center hover:shadow-sm cursor-pointer hover:bg-gray-100"
                }>
                <img
                    className={"w-4 h-4"}
                    src='/svg/rightChevron.svg'
                    alt='right'
                />
            </div>
        </div>
    );
}

export default Navigator;
