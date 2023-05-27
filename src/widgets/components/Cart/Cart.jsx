import React, { useEffect ,useRef, useState} from 'react'
import './style/cart.css'
import ButtonMain from '../../../shared/ui/ButtonMain/ButtonMain'
import {useSelector,useDispatch} from 'react-redux'
import { setIsOpenCart } from '../../../shared/models/slices/productSlice'
import ItemProductCart from '../ItemProductCart/ItemProductCart'
import InfoBlock from '../../../shared/ui/InfoBlock/InfoBlock'
import { getFinalTotalPriceCart,getTotalPriceCart,getProducts } from '../../../entities/cart/functions'
import { cleanCart,setOrder } from '../../../shared/models/slices/productSlice'






function Cart() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.product.cart);
  const listProduct = useSelector(state => state.product.listProduct);
  const isCartOpen =  useSelector(state => state.product.isCartOpen);

  const isEmptyCart = cart.length===0?true:false;
  const totalPriceWithTaxe = getFinalTotalPriceCart(cart,listProduct,5)
  const totalPrice = getTotalPriceCart(getProducts(cart,listProduct))
  const [isOrderSuccess, setIsOrderSuccess] = useState(false)

  const saveOrder = () =>{
    dispatch(setOrder(cart))
   
    dispatch(cleanCart())
    setIsOrderSuccess(true)

  }
  
 

  const closeCartOnWindow = e => {
    if(! e.target.closest('.cart__content')){
      dispatch(setIsOpenCart())
    }
   
  }

  const closeCart = ()=> dispatch(setIsOpenCart())

  const closeCartOnSuccessOrder = ()=>{
  
    dispatch(setIsOpenCart())
    setIsOrderSuccess(false)
  }

  useEffect(()=>{

    if(isOrderSuccess&&isEmptyCart ){
      setIsOrderSuccess(false)
    }

  },[isCartOpen])
  





  return (isCartOpen===true) && (
    <div className='cart'>
      <div onClick={(e)=> closeCartOnWindow(e)} className="cart__container">
        <div className={`cart__content`}>
          <h2 className="cart__title">Корзина</h2>
          <div className="cart__body">
              {
                  isOrderSuccess===false?(isEmptyCart===false?(
                    <div className="cart__full">

                        <div className="cart__list-product-wrapper">
                            <div className="cart__list-product">
                                {
                                  cart.map((item,index) =>  <ItemProductCart key={index} idItem={item} /> )
                                }
                            </div>
                        </div>
                       

                        <div className="cart__detals">

                          <div className="cart__detals-price">
                            <div className="cart__detals-price-title">Итого:</div>
                            <div className="cart__detals-price-separator"></div>
                            <div className="cart__detals-price-number">{totalPrice} руб. </div>
                          </div>

                          <div className="cart__detals-price">
                            <div className="cart__detals-price-title">Налог 5%:</div>
                            <div className="cart__detals-price-separator"></div>
                            <div className="cart__detals-price-number">{totalPriceWithTaxe} руб. </div>
                          </div>
                        </div>

                        <div className="cart__order-button">
                            <ButtonMain handlerClick={saveOrder}>Оформить заказ</ButtonMain>
                        </div>
                    </div>
                ):(
                 <InfoBlock
                  img="box.png"
                  text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                  title="Корзина пустая"
                 >
                    <ButtonMain handlerClick={closeCart} type="small" position={'left'}>Вернуться назад</ButtonMain>
                 </InfoBlock>
                )):(
                  <div className="cart__success">
                    <InfoBlock
                      img="valide.png"
                      text="Ваш заказ #18 скоро будет передан курьерской доставке"
                      title="Заказ оформлен!"
                      type="green"
                    >
                      <ButtonMain handlerClick={closeCartOnSuccessOrder} type="small" position={'left'}>Вернуться назад</ButtonMain>
                  </InfoBlock>
                  </div>
                )
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart