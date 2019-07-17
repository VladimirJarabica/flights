import React from 'react';
import { useState } from 'react';
import DestinationInput from './destinationInput/DestinationInput';
import DatePicker from 'react-datepicker/es'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

function SearchBar(props) {
  let [dateFrom, setDateFrom] = useState(new Date())
  let [dateTo, setDateTo] = useState(moment().add(7, 'days').toDate())
  let [from, setFrom] = useState('')
  let [to, setTo] = useState('')
  let [isReturn, setIsReturn] = useState(false)
  
  const handleSubmit = () => {
    const data = {
      dateFrom,
      dateTo,
      from,
      to,
      isReturn
    };
    
    props.setQuery(data)
  }
  
  const handleReturnCheck = (event) => {
    const target = event.target;
    setIsReturn(target.checked)
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
        onChange={e => setDateFrom(e)}
      />
  
      {
        isReturn &&
        <DatePicker
          selected={dateTo}
          selectsEnd
          startDate={dateTo}
          endDate={new Date()}
          onChange={e => setDateTo(e)}
          minDate={dateFrom}
        />
      }
      
      <input
        name="return"
        type="checkbox"
        checked={isReturn}
        onChange={handleReturnCheck}
      />
      Return flight
      
      <button onClick={handleSubmit}>Find flights</button>
    </div>
  );
}

export default SearchBar;
