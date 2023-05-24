import React from 'react'
import ItemProduct_tpl from '../../../entities/products/components/ItemProduct_tpl/ItemProduct_tpl'
import LikeProduct from '../../../features/products/LikeProduct/LikeProduct'
import AddProductInCart from '../../../features/products/AddProductInCart/AddProductInCart'

function ItemProduct({productData,loading}) {
    const id = productData?.id

  return (
    <ItemProduct_tpl
        likeProduct={<LikeProduct idProduct={id}/>}
        addProductInCart={<AddProductInCart idProduct={id}/>}
        data={productData}
        loading={loading}
     />
  )
}

export default ItemProduct