import React from 'react';
import { useState } from 'react';
import DestinationInput from '../destinationInput/DestinationInput';
import DatePicker from 'react-datepicker/es'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

function SearchBar(props) {
  let [dateFrom, setDateFrom] = useState(new Date())
  let [dateTo, setDateTo] = useState(moment().add(2, 'days').toDate())
  let [from, setFrom] = useState('')
  let [to, setTo] = useState('')
  
  const handleSubmit = () => {
    const data = {
      dateFrom,
      dateTo,
      from,
      to
    };
    
    props.setQuery(data)
    props.findResult(data)
  }
  
  return (
    <div>
      <DestinationInput onChange={setFrom} placeholder="From" />
      <DestinationInput onChange={setTo} placeholder="To" />

      <DatePicker
        selected={dateFrom}
        selectsStart
        startDate={dateFrom}
        endDate={new Date()}
        onChange={setDateFrom}
      />

      <DatePicker
        selected={dateTo}
        selectsEnd
        startDate={dateTo}
        endDate={new Date()}
        onChange={setDateTo}
        minDate={dateFrom}
      />
      
      <button onClick={handleSubmit}>Find flights</button>
    </div>
  );
}

export default SearchBar;
