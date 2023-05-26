import React from 'react'
import './style/itemProductCart.css'
import { getProductById } from '../functions'
import {useSelector} from 'react-redux'

function ItemProductCart_tpl({idItem,children}) {
    const listProduct = useSelector(state => state.product.listProduct) 
    const {id,name,price,img} = getProductById(idItem,listProduct)

  return (
    <div className="itemCartProduct">
        <div className="itemCartProduct__content">
            <div className="itemCartProduct__img">
            <img src={`/images/products/${img}`} alt={name} />
            </div>
            <div className="itemCartProduct__body">
            <div className="itemCartProduct__name">{name}</div>
            <div className="itemCartProduct__price">{price} руб.</div>
            </div>
            {children}
        </div>
    </div>
  )
}

export default ItemProductCart_tpl