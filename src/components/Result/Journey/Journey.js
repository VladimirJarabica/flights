import React from 'react';
import BaseInfoBar from './BaseInfoBar'
import BagInfo from './BagInfo'
import Route from './Route'
import styled from 'styled-components';

const JourneyWrap = styled.div`
  margin: 10px;
  box-shadow: 0 0 7px #d6d6d6;
  border-radius: 5px;
  overflow: hidden;
`;

const Routes = styled.div`
  margin: 20px;
`;

function Journey({ data }) {
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
      <Routes>
        { getRoutes() }
      </Routes>
      <BagInfo baglimit={baglimit} price={bags_price} />
    </JourneyWrap>
  );
}

export default Journey;
