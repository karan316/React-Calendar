import React from "react";
import { format, isToday } from "date-fns";

const Tile = ({ tileColor, day, onClick, sundayColor }) => {
    function dateColor(day) {
        if (isToday(day)) return "text-white bg-red-500 transform scale-90";
    }

    return (
        <div
            onClick={onClick}
            className={`h-32 w-24 grid grid-rows-6  border border-gray-200 hover:shadow-lg ${tileColor} ${sundayColor}`}>
            <div className={"grid grid-cols-4 row-span-1"}>
                <div
                    className={`text-sm rounded-full h-6 w-6 flex items-center justify-center col-span-1 ${dateColor(
                        day
                    )} `}>
                    {format(day, "dd")}
                </div>
            </div>
        </div>
    );
};

export default Tile;
