import React from 'react'
import styled from 'styled-components'
import { SmsFailed } from 'styled-icons/material/SmsFailed'

const NoWrap = styled.div`
  text-align: center;
  margin-top: 30px;
`

const NoResultIcon = styled(SmsFailed)`
  color: #dd0000;
`

function NoResult() {
  return (
    <NoWrap>
      <NoResultIcon size={50} />
      <h1>Sorry, no results!</h1>
    </NoWrap>
  )
}

export default NoResult
