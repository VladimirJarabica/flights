import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const PathWrap = styled.div`
  clear: both;
  border-bottom: 1px dotted #ccc;
  padding: 5px;
`

const Place = styled.div`

`

function Path({ data }) {
  const { cityFrom, cityTo, flyFrom, flyTo, aTime, dTime } = data
  
  return (
    <PathWrap>
      <Place>{ moment.unix(dTime).format('DD/MM/YYYY HH:mm') }: { cityFrom } ({ flyFrom })</Place>
      <Place>{ moment.unix(aTime).format('DD/MM/YYYY HH:mm') }: { cityTo } ({ flyTo })</Place>
    </PathWrap>
  )
}

export default Path
