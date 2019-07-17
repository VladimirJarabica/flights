import React from 'react'
import { useState } from 'react'
import DestinationInput from './destinationInput/DestinationInput'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import {
  ArrowWrap,
  DateWrap,
  DestWrap,
  PlaceWrap,
  ReturnStyledDatePicker,
  ReturnWrap,
  StyledDatePicker,
  StyledDatePickerWrap,
  SubmitButton,
  SubmitButtonWrap,
  GrayPlaneArrival,
  GrayPlaneDeparture,
  StyledDatePickerWrapArrival
} from './components'
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
        <StyledDatePickerWrap>
          <GrayPlaneDeparture size={15} />
          <StyledDatePicker
            selected={dateFrom}
            selectsStart
            startDate={dateFrom}
            endDate={new Date()}
            onChange={e => setDateFrom(e)}
          />
        </StyledDatePickerWrap>
        {
          isReturn &&
            <StyledDatePickerWrapArrival>
              <GrayPlaneArrival size={15} />
              <ReturnStyledDatePicker
                selected={dateTo}
                selectsEnd
                startDate={dateTo}
                endDate={new Date()}
                onChange={e => setDateTo(e)}
                minDate={dateFrom}
              />
            </StyledDatePickerWrapArrival>
        }
        
        <ReturnWrap>
          <input
            name="return"
            type="checkbox"
            checked={isReturn}
            onChange={handleReturnCheck}
          />
          Return
        </ReturnWrap>
      </DateWrap>
      <SubmitButtonWrap>
        <SubmitButton onClick={handleSubmit}>Find flights</SubmitButton>
      </SubmitButtonWrap>
    </div>
  )
}

export default SearchBar
