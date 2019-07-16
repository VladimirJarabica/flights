import React from 'react';
import { useState } from 'react';
import DestinationInput from '../destinationInput/DestinationInput';
import DatePicker from 'react-datepicker'
import moment from 'moment'

function App(props) {
  let [dateFrom, setDateFrom] = useState(new Date())
  let [dateTo, setDateTo] = useState(moment().add(7, 'days').toDate())
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

export default App;
