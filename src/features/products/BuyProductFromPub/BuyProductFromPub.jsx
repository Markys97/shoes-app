import React from 'react'
import ButtonSimple from '../../../shared/ui/ButtonSimple/ButtonSimple'

function BuyProductFromPub() {
    const buyProduct = ()=> alert('mama')
  return (
    <ButtonSimple onClickController={buyProduct}>
        Курить
    </ButtonSimple>
  )
}

export default BuyProductFromPub