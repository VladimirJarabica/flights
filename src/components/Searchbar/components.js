import styled from 'styled-components'
import DatePicker from 'react-datepicker/es'

export const PlaceWrap = styled.div`
  width: 500px;
  margin: 0 auto;
`

export const DestWrap = styled.div`
	float: left;
`

export const ArrowWrap = styled(DestWrap)`
	float: left;
	padding: 10px 30px;
`

export const DateWrap = styled.div`
  width: 500px;
  margin: 0 auto;
  clear: both;
`

export const StyledDatePicker = styled(DatePicker)`
  padding: 10px 15px;
  font-weight: 300;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 4px;
  outline: none;
`

