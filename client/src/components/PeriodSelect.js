import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PeriodSelect({ onPeriodChange }) {
    const [selectedYear, setSelectedYear] = useState(2024);
    const [selectedMonth, setSelectedMonth] = useState(0);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        onPeriodChange(event.target.value, selectedMonth);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        onPeriodChange(selectedYear, event.target.value);
    };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="year-select">Year</InputLabel>
        <Select
            value={selectedYear}
            onChange={handleYearChange}
            label="Year"
            inputProps={{
                name: 'year',
                id: 'year-select',
            }}
        >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="month-select">Month</InputLabel>
        <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            label="Month"
            inputProps={{
                name: 'month',
                id: 'month-select',
            }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}