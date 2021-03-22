import { isSameMonth, isSameDay, isSunday } from "date-fns";

export function tileColor(day, selectedDate) {
    if (!isSameMonth(day, selectedDate)) return "text-gray-400";

    if (isSameDay(day, selectedDate)) return "bg-blue-200";
}

export function sundayColor(day) {
    if (isSunday(day)) return "bg-gray-100";
}
