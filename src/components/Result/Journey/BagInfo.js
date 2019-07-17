import React from 'react';
import styled from 'styled-components';

const BagWrap = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding: 10px;
  background: #f1f1f1;
`;

function BagInfo({ baglimit, price }) {
  const { hand_height, hand_length, hand_width, hand_weight, hold_height, hold_length, hold_width, hold_weight } = baglimit
  
  return (
    <div>
      Luggage info >
      <div>
        <BagWrap>
          <h3>Cabin luggage</h3>
          { hand_height } x { hand_length } x { hand_width } ({ hand_weight } Kg)
        </BagWrap>
        <BagWrap>
          <h3>Trunk luggage</h3>
          { hold_height } x { hold_length } x { hold_width } ({ hold_weight } Kg)
          { price[1] } EUR
        </BagWrap>
      </div>
    </div>
  );
}

export default BagInfo;
