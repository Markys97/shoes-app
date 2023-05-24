import React from 'react'
import './style/itemProduct.css'

function ItemProduct_tpl({loading, likeProduct ,addProductInCart,data }) {

    // const {id,name,price,img} = data
    const id = data?.id
    const name = data?.name
    const price = data?.price
    const img = data?.img
  return (
    <div className={`product ${loading ===true?'loading':''}`}>
        <div className="product__content">
            <div className="product__header">
                {likeProduct}
                <div className="product__img">
                    <img src={`/images/products/${img}`} alt={name} />
                </div>
            </div>

            <div className="product__name">
               {name}
            </div>

            <div className="product__footer">
                <div className="product__footer-row">
                    <div className="product__price">
                        <div className="product__price-title">Цена:</div>
                        <div className="product__price-number">{price} руб.</div>
                    </div>
                   {addProductInCart}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemProduct_tpl