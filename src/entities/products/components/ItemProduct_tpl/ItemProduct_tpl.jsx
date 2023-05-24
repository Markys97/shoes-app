import React from 'react'
import './style/itemProduct.css'

function ItemProduct_tpl({isLoading, likeProduct ,addProductInCart}) {
  return (
    <div className="product ">
        <div className="product__content">
            <div className="product__header">
                {likeProduct}
                <div className="product__img">
                    <img src="/images/products/image 1.jpg" alt="" />
                </div>
            </div>

            <div className="product__name">
                Мужские Кроссовки Nike Blazer Mid Suede
            </div>
            
            <div className="product__footer">
                <div className="product__footer-row">
                    <div className="product__price">
                        <div className="product__price-title">Цена:</div>
                        <div className="product__price-number">12 999 руб.</div>
                    </div>
                   {addProductInCart}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemProduct_tpl