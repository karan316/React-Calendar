import React from "react";

function WeekNames() {
    return (
        <div className={"grid grid-cols-7 rounded-xl"}>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (dayName) => (
                    <div
                        key={dayName}
                        className={
                            " w-24 flex items-center justify-end text-lg"
                        }>
                        {dayName}
                    </div>
                )
            )}
        </div>
    );
}
export default WeekNames;
