import styled from 'styled-components'
import DatePicker from 'react-datepicker/es'
import { PlaneDeparture } from 'styled-icons/fa-solid/PlaneDeparture'
import { PlaneArrival } from 'styled-icons/fa-solid/PlaneArrival'

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

export const StyledDatePickerWrap = styled.div`
  border: 1px solid #aaa;
  border-radius: 4px;
  width: 200px;
  box-sizing: border-box;
  float: left;
  padding: 6px 13px;
`

export const StyledDatePickerWrapArrival = styled(StyledDatePickerWrap)`
	margin-left: 8px
`

export const StyledDatePicker = styled(DatePicker)`
  font-weight: 300;
  font-size: 16px;
  outline: none;
  border: 0;
  width: 120px;
  margin-left: 10px;
`

export const ReturnStyledDatePicker = styled(StyledDatePicker)`
	margin-left: 7px;
`

export const SubmitButtonWrap = styled.div`
	clear: both;
	text-align: center;
	padding-top: 10px;
`

export const SubmitButton = styled.button`
	border: none;
	background: #02BAB9;
	border-radius: 3px;
	padding: 9px 16px;
	font-size: 15px;
	cursor: pointer;
	outline: none;
	color: #fff;
`

export const ReturnWrap = styled.label`
	margin-left: 10px;
  margin-top: 8px;
  float: left;
  cursor: pointer;
`

export const GrayPlaneDeparture = styled(PlaneDeparture)`
  color: #aaa;
`

export const GrayPlaneArrival = styled(PlaneArrival)`
  color: #aaa;
`
