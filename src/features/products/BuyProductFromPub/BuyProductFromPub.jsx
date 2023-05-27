import React from 'react'
import ButtonSimple from '../../../shared/ui/ButtonSimple/ButtonSimple'

function BuyProductFromPub() {
    const buyProduct = ()=> alert('пока не работает')
  return (
    <ButtonSimple onClickController={buyProduct}>
        Курить
    </ButtonSimple>
  )
}

export default BuyProductFromPub