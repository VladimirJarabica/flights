import React from 'react'
import styled from 'styled-components'

const InfoBar = styled.div`
  padding: 6px 8px;
  background: #00C6AA;
  color: #fff;
`

const Price = styled.div`
  float: right;
`

const Duration = styled.span`
`

function BaseInfoBar({ duration, price }) {
  return (
    <InfoBar>
      <Price>{ price } €</Price>
      <Duration>Duration: { duration }</Duration>
    </InfoBar>
  )
}

export default BaseInfoBar
