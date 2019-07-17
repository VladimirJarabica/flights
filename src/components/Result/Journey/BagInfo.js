import React from 'react'
import { useState } from 'react'
import {
  BagHeader,
  MoreWrap,
  BagWrap,
  PriceIcon,
  ShowMoreButton,
  SizeIcon,
  StyledShoppingBag,
  WeightIcon
} from './components'


function BagInfo({ baglimit, price }) {
  let [displayInfo, setDisplpayInfo] = useState(false)
  
  const { hand_height, hand_length, hand_width, hand_weight, hold_height, hold_length, hold_width, hold_weight } = baglimit
  
  return (
    <div>
      <ShowMoreButton onClick={() => setDisplpayInfo(!displayInfo)}>
        <StyledShoppingBag size={20} />
        Luggage info
      </ShowMoreButton>
      { displayInfo &&
        <MoreWrap>
          <BagWrap>
            <BagHeader>Cabin luggage</BagHeader><br />
            <SizeIcon size={15} />
            { hand_height }cm x { hand_length }cm x { hand_width }cm <br />
            <WeightIcon size={15} />
            { hand_weight } Kg<br />
          </BagWrap>
          <BagWrap>
            <BagHeader>Checked luggage</BagHeader><br />
            <SizeIcon size={15} />
            { hold_height }cm x { hold_length }cm x { hold_width }cm<br />
            <WeightIcon size={15} />
            { hold_weight } Kg<br />
            <PriceIcon size={15} />
            { price[1] } EUR
          </BagWrap>
        </MoreWrap>
      }
    </div>
  )
}

export default BagInfo
