import React from 'react';
import styled from 'styled-components';

const InfoBar = styled.div`
  padding: 10px;
  background: #d6eaff;
`;

const Price = styled.div`
  float: right
`;

const Duration = styled.span`
`;

function BaseInfoBar({ duration, price }) {
  return (
    <InfoBar>
      <Price>{ price } EUR</Price>
      <Duration>Duration: { duration }</Duration>
    </InfoBar>
  );
}

export default BaseInfoBar;
