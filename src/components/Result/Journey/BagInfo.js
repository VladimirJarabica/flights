import React from 'react';

function BagInfo({ baglimit, price }) {
  const { hand_height, hand_length, hand_width, hand_weight, hold_height, hold_length, hold_width, hold_weight } = baglimit
  
  return (
    <div>
      <h3>Cabin luggage</h3>
      { hand_height } x { hand_length } x { hand_width } ({ hand_weight } Kg)
  
      <h3>Trunk luggage</h3>
      { hold_height } x { hold_length } x { hold_width } ({ hold_weight } Kg)
  
      { price[1] } EUR
    </div>
  );
}

export default BagInfo;
