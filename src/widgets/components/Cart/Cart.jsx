import React from 'react'
import './style/cart.css'
import ButtonMain from '../../../shared/ui/ButtonMain/ButtonMain'
import ItemProductCart_tpl from '../../../entities/cart/ItemProductCart_tpl/ItemProductCart_tpl'
import {useSelector,useDispatch} from 'react-redux'
import { setIsOpenCart } from '../../../shared/models/slices/productSlice'
import ItemProductCart from '../ItemProductCart/ItemProductCart'
import InfoBlock from '../../../shared/ui/InfoBlock/InfoBlock'



function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.product.cart);
  const isCartOpen =  useSelector(state => state.product.isCartOpen);
  const isEmptyCart = cart.length===0?true:false;

  const closeCart = e => {
    if(! e.target.closest('.cart__content')){
      dispatch(setIsOpenCart())
    }
   
  }

  return (isCartOpen===true) && (
    <div className='cart'>
      <div onClick={(e)=> closeCart(e)} className="cart__container">
        <div className="cart__content">
          <h2 className="cart__title">Корзина</h2>
          <div className="cart__body">
              
              {
                isEmptyCart===false?(
                    <div className="cart__full">
                        <div className="cart__list-product">
                            {
                              cart.map((item,index) =>  <ItemProductCart key={index} idItem={item} /> )
                            }
                        </div>

                        <div className="cart__detals">

                          <div className="cart__detals-price">
                            <div className="cart__detals-price-title">Итого:</div>
                            <div className="cart__detals-price-separator"></div>
                            <div className="cart__detals-price-number">21498 руб. </div>
                          </div>

                          <div className="cart__detals-price">
                            <div className="cart__detals-price-title">Налог 5%:</div>
                            <div className="cart__detals-price-separator"></div>
                            <div className="cart__detals-price-number">1074 руб. </div>
                          </div>
                        </div>

                        <div className="cart__order-button">
                            <ButtonMain>Оформить заказ</ButtonMain>
                        </div>
                    </div>
                ):(
                  <InfoBlock/>
                )
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart