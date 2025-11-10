import { useState, useRef, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  setMonth,
  setYear,
} from "date-fns";
import { YEARS } from "constants/datePicket";

export const useDatePicker = (
  value: string,
  onChange: (value: string) => void,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [inputValue, setInputValue] = useState(value);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value);

    if (value) {
      const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      const match = value.match(dateRegex);
      if (match) {
        const [, day, month, year] = match;
        const parsedDate = new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day),
        );
        if (!isNaN(parsedDate.getTime())) {
          setCurrentMonth(parsedDate);
        }
      }
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isInsideWrapper =
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node);
      const isInsideMuiPopover = !!(event.target as HTMLElement).closest(
        ".MuiPopover-root, .MuiMenu-root",
      );

      if (isInsideWrapper && !isInsideMuiPopover) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputClick = () => setIsOpen(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");

    if (val.length > 2) val = val.slice(0, 2) + "/" + val.slice(2);
    if (val.length > 5) val = val.slice(0, 5) + "/" + val.slice(5, 9);
    if (val.length > 10) val = val.slice(0, 10);
    setInputValue(val);

    const match = val.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (match) {
      const [, dayStr, monthStr, yearStr] = match;
      const day = parseInt(dayStr, 10);
      const month = parseInt(monthStr, 10);
      const year = parseInt(yearStr, 10);

      const maxDays = new Date(year, month, 0).getDate();

      if (month < 1 || month > 12) return;
      if (day < 1 || day > maxDays) return;
      if (year < YEARS[YEARS.length - 1] || year > YEARS[0]) return;

      const parsedDate = new Date(year, month - 1, day);

      if (!isNaN(parsedDate.getTime())) {
        onChange(val);
        setCurrentMonth(parsedDate);
      }
    }
  };

  const handleDayClick = (day: Date) => {
    const formatted = format(day, "dd/MM/yyyy");
    setInputValue(formatted);
    onChange(formatted);
    setIsOpen(false);
  };

  const handleMonthChange = (monthIndex: number) => {
    setCurrentMonth(setMonth(currentMonth, monthIndex));
  };

  const handleYearChange = (year: number) => {
    setCurrentMonth(setYear(currentMonth, year));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const firstDayOfWeek = monthStart.getDay();
  const paddingDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  const selectedDate = value
    ? (() => {
        const [day, month, year] = value.split("/");
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      })()
    : null;

  return {
    isOpen,
    setIsOpen,
    wrapperRef,
    inputValue,
    handleInputClick,
    handleInputChange,
    handleDayClick,
    handleMonthChange,
    handleYearChange,
    currentMonth,
    days,
    paddingDays,
    selectedDate,
  };
};
