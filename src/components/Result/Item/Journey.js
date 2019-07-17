import React from 'react';
import { useState } from 'react'
import BaseInfoBar from './BaseInfoBar'
import BagInfo from './BagInfo'
import Route from './Route'
import styled from 'styled-components'
import { MoreWrap, ShowMoreButton, StyledDetails } from './components'
import TextInfo from './TextInfoContainer'

const JourneyWrap = styled.div`
  margin: 10px;
  box-shadow: 0 0 7px #d6d6d6;
  border-radius: 3px;
  overflow: hidden;
  
  font-family: helvetica;
  font-size: 13px;
`

const Routes = styled.div`
  margin: 20px;
`

const DetailsWrap = styled.div`
  padding-top: 10px;
`

function Journey({ data }) {
  let [displayInfo, setDisplpayInfo] = useState(false)
  
  const { price, baglimit, bags_price, fly_duration, route } = data
  
  const getRoutes = () => {
    let routes = []
    for (const subRoute in route) {
      routes.push(<Route data={route[subRoute]} key={route[subRoute].id} />)
    }
    return routes
  }
  
  return (
    <JourneyWrap>
      <BaseInfoBar duration={fly_duration} price={price} />
      <TextInfo data={data} />
      <DetailsWrap>
        <ShowMoreButton onClick={() => setDisplpayInfo(!displayInfo)}>
          <StyledDetails size={15} />
          Route details
        </ShowMoreButton>
        { displayInfo &&
          <MoreWrap>
            <Routes>
              { getRoutes() }
            </Routes>
          </MoreWrap>
        }
        <BagInfo baglimit={baglimit} price={bags_price} />
      </DetailsWrap>
    </JourneyWrap>
  )
}

export default Journey
