import {
    format,
    lastDayOfMonth,
    startOfMonth,
    addDays,
    subDays,
} from "date-fns";
import React, { useState } from "react";

import { getMonth } from "../modules/calendar";
import Tile from "../tile";
import Navigator from "../navigator";
import WeekNames from "../weeknames";
import { tileColor, sundayColor } from "../modules/conditionalStyles";

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const data = getMonth(selectedDate)();

    function nextMonth(day) {
        setSelectedDate(addDays(lastDayOfMonth(day), 1));
    }

    function previousMonth(day) {
        setSelectedDate(subDays(startOfMonth(day), 1));
    }

    function setTodayDate() {
        setSelectedDate(new Date());
    }

    function tileClick(day) {
        setSelectedDate(day);
    }

    return (
        <React.Fragment>
            {
                <div className={"bg-white box-border flex "}>
                    <div
                        className={
                            "border rounded-xl p-2 mx-auto mt-1  shadow-md"
                        }>
                        <div className='flex justify-between my-2 mx-4'>
                            <h1 className=' text-3xl mb-2 text-gray-600 tracking-wider'>
                                <span className='font-black'>
                                    {format(selectedDate, "MMMM")}
                                </span>{" "}
                                {format(selectedDate, "yyyy")}
                            </h1>
                            <Navigator
                                day={selectedDate}
                                nextMonth={nextMonth}
                                previousMonth={previousMonth}
                                setTodayDate={setTodayDate}
                            />
                        </div>
                        <WeekNames />
                        {data.map((week) => (
                            <div key={week} className={"grid grid-cols-7 "}>
                                {week.map((day) => (
                                    <Tile
                                        key={day}
                                        onClick={() => tileClick(day)}
                                        tileColor={tileColor(day, selectedDate)}
                                        sundayColor={sundayColor(day)}
                                        day={day}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default Calendar;
