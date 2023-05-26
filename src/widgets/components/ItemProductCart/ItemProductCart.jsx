import React from 'react'
import ItemProductCart_tpl from '../../../entities/cart/ItemProductCart_tpl/ItemProductCart_tpl'
import RemoveProductToCart from '../../../features/cart/RemoveProductToCart/RemoveProductToCart'

function ItemProductCart({idItem}) {
  return (
    <ItemProductCart_tpl idItem={idItem}>
        <RemoveProductToCart idItem={idItem}/>
    </ItemProductCart_tpl>
  )
}

export default ItemProductCart