import React from 'react'
import styled from 'styled-components'

const InfoWrap = styled.div`
  padding: 10px;
`

function TextInfo({ data, isReturn }) {
  const { cityFrom, flyFrom, countryFrom, cityTo, flyTo, countryTo } = data
  
  console.log()
  
  return (
    <InfoWrap>
      Fligt from {cityFrom}({flyFrom}), {countryFrom.name} to {cityTo}({flyTo}), {countryTo.name}
      { isReturn && ' and back'}
    </InfoWrap>
  )
}

export default TextInfo
