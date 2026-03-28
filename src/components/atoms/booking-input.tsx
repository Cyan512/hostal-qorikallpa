"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

const BookingDate = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const placeholderText = `${formatDate(today)} - ${formatDate(tomorrow)}`;

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="relative" style={{ overflow: "visible" }}>
      <div className="flex items-center gap-2 focus-within:border-black transition-colors">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          minDate={new Date()}
          monthsShown={2}
          dateFormat="dd MMM, yyyy"
          className="w-full cursor-pointer text-sm font-light bg-transparent outline-none placeholder:text-black/40"
          wrapperClassName="w-full"
          popperPlacement="bottom-start"
          popperProps={{ strategy: "fixed" }}
          onFocus={(e) => e.target.blur()}
          placeholderText={placeholderText}
          showIcon={false}
        />
        <Calendar className="w-4 h-4 text-black/50 shrink-0" />
      </div>
    </div>
  );
};

export default BookingDate;
