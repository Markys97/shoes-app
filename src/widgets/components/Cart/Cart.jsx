import React from 'react'
import './style/cart.css'

function Cart() {
  return (
    <div className='cart'>
      <div className="cart__container">
        <div className="cart__content">
          <h2 className="cart__title">Корзина</h2>
          <div className="cart__body">
              <div className="cart__full">
                  <div className="cart__list-product">
                      <div className="itemCartProduct">
                          <div className="itemCartProduct__content">
                              <div className="itemCartProduct__img">
                                <img src="/images/products/image 1.jpg" alt="product" />
                              </div>
                              <div className="itemCartProduct__body">
                                <div className="itemCartProduct__name">Мужские Кроссовки Nike Air Max 270</div>
                                <div className="itemCartProduct__price">12 999 руб.</div>
                              </div>
                              <div className="itemCartProduct__icon">
                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                                  <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div className="itemCartProduct">
                          <div className="itemCartProduct__content">
                              <div className="itemCartProduct__img">
                                <img src="/images/products/image 1.jpg" alt="product" />
                              </div>
                              <div className="itemCartProduct__body">
                                <div className="itemCartProduct__name">Мужские Кроссовки Nike Air Max 270</div>
                                <div className="itemCartProduct__price">12 999 руб.</div>
                              </div>
                              <div className="itemCartProduct__icon">
                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                                  <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div className="itemCartProduct">
                          <div className="itemCartProduct__content">
                              <div className="itemCartProduct__img">
                                <img src="/images/products/image 1.jpg" alt="product" />
                              </div>
                              <div className="itemCartProduct__body">
                                <div className="itemCartProduct__name">Мужские Кроссовки Nike Air Max 270</div>
                                <div className="itemCartProduct__price">12 999 руб.</div>
                              </div>
                              <div className="itemCartProduct__icon">
                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                                  <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
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
                      <button className="button button--main">
                          <div className="button--main__row">
                            <div className="button--main__text">Оформить заказ</div>
                            <div className="button--main__icon">
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                          </div>
                      </button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart