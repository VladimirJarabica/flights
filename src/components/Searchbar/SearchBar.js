import React from 'react'
import { useState } from 'react'
import DestinationInput from './destinationInput/DestinationInput'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import { ArrowWrap, DateWrap, DestWrap, PlaceWrap, StyledDatePicker } from './components'
import { LongArrowAltRight } from 'styled-icons/fa-solid/LongArrowAltRight'

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
    }
    
    props.setQuery(data)
  }
  
  const handleReturnCheck = (event) => {
    const target = event.target
    setIsReturn(target.checked)
  }
  
  return (
    <div>
      <PlaceWrap>
        <DestWrap>
          <DestinationInput onChange={setFrom} placeholder="From" />
        </DestWrap>
        <ArrowWrap>
          <LongArrowAltRight size={25} />
        </ArrowWrap>
        <DestWrap>
          <DestinationInput onChange={setTo} placeholder="To" />
        </DestWrap>
      </PlaceWrap>
      
      <DateWrap>
        <StyledDatePicker
          selected={dateFrom}
          selectsStart
          startDate={dateFrom}
          endDate={new Date()}
          onChange={e => setDateFrom(e)}
        />
    
        {
          isReturn &&
          <StyledDatePicker
            selected={dateTo}
            selectsEnd
            startDate={dateTo}
            endDate={new Date()}
            onChange={e => setDateTo(e)}
            minDate={dateFrom}
          />
        }
        
        <label>
          <input
            name="return"
            type="checkbox"
            checked={isReturn}
            onChange={handleReturnCheck}
          />
          Return
        </label>
  
      </DateWrap>
      <button onClick={handleSubmit}>Find flights</button>
    </div>
  )
}

export default SearchBar
