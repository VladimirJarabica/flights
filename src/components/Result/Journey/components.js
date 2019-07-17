import styled from 'styled-components'
import { ShoppingBag } from 'styled-icons/boxicons-regular/ShoppingBag/ShoppingBag'
import { PriceTags } from 'styled-icons/icomoon/PriceTags/PriceTags'
import { ArrowsAlt } from 'styled-icons/fa-solid/ArrowsAlt/ArrowsAlt'
import { WeightHanging } from 'styled-icons/fa-solid/WeightHanging/WeightHanging'
import { Detail } from 'styled-icons/boxicons-regular/Detail'

export const MoreWrap = styled.div`
  overflow: auto;
  box-shadow: inset 0px 22px 14px -22px rgba(0,0,0,0.1);
`

export const BagWrap = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding: 10px;
  line-height: 1.6;
`

export const ShowMoreButton = styled.span`
  padding: 5px;
  cursor: pointer;
`

export const StyledShoppingBag = styled(ShoppingBag)`
  padding: 0 5px 4px;
`

export const StyledDetails = styled(Detail)`
  padding: 0 7px 4px;
`

export const BagHeader = styled.strong`
  color: #00C6AA;
`

export const SizeIcon = styled(ArrowsAlt)`
  padding-right: 5px;
`

export const PriceIcon = styled(PriceTags)`
  padding-right: 5px;
`

export const WeightIcon = styled(WeightHanging)`
  padding-right: 5px;
`
