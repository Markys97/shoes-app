import React from 'react'
import ItemProduct_tpl from '../../../entities/products/components/ItemProduct_tpl/ItemProduct_tpl'
import LikeProduct from '../../../features/products/LikeProduct/LikeProduct'
import AddProductInCart from '../../../features/products/AddProductInCart/AddProductInCart'

function ItemProduct() {
  return (
    <ItemProduct_tpl
        likeProduct={<LikeProduct/>}
        addProductInCart={<AddProductInCart/>}
     />
  )
}

export default ItemProduct