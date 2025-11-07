import { MenuItem } from "@mui/material";
import { format, isSameDay } from "date-fns";
import { useDatePicker } from "hooks/useDatePicker";
import { MONTHS, WEEKS, YEARS } from "constants/datePicket";
import {
  DatePickerWrapper,
  CalendarDropdown,
  DayCell,
  DayHeader,
  DaysGrid,
  MonthYearSelectors,
  StyledInput,
  StyledSelect,
} from "./styles";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const DatePicker = ({
  value,
  onChange,
  placeholder = "DD/MM/YYYY",
}: DatePickerProps) => {
  const {
    isOpen,
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
  } = useDatePicker(value, onChange);

  return (
    <DatePickerWrapper ref={wrapperRef}>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        placeholder={placeholder}
      />

      {isOpen && (
        <CalendarDropdown>
          <MonthYearSelectors>
            <StyledSelect
              value={currentMonth.getMonth()}
              onChange={(e) => handleMonthChange(Number(e.target.value))}
            >
              {MONTHS.map((month, index) => (
                <MenuItem key={month} value={index}>
                  {month}
                </MenuItem>
              ))}
            </StyledSelect>

            <StyledSelect
              value={currentMonth.getFullYear()}
              onChange={(e) => handleYearChange(Number(e.target.value))}
            >
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </StyledSelect>
          </MonthYearSelectors>

          <DaysGrid>
            {WEEKS.map((day, index) => (
              <DayHeader key={index}>{day}</DayHeader>
            ))}

            {Array.from({ length: paddingDays }).map((_, index) => (
              <DayCell key={`padding-${index}`} isSelected={false} />
            ))}

            {days.map((day) => (
              <DayCell
                key={day.toString()}
                isSelected={selectedDate ? isSameDay(day, selectedDate) : false}
                onClick={() => handleDayClick(day)}
              >
                {format(day, "d")}
              </DayCell>
            ))}
          </DaysGrid>
        </CalendarDropdown>
      )}
    </DatePickerWrapper>
  );
};
