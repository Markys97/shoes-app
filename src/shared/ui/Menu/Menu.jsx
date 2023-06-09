import React from 'react'
import { Link } from 'react-router-dom'
import './style/menu.css'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts,getTotalPriceCart,  } from '../../../entities/cart/functions'
import { setIsOpenCart } from '../../models/slices/productSlice'

function Menu() {
    const dispatch = useDispatch()
    const listProductLiked = useSelector(state => state.product.listProductLiked)
    const cart = useSelector(state => state.product.cart)
    const listProduct = useSelector(state => state.product.listProduct)

    const productsInCart = getProducts(cart,listProduct)
    const totalPriceCart= getTotalPriceCart(productsInCart)
    const totalProductLiked = listProductLiked.length


  return (
    <nav className="menu">
        <ul className="menu__list">
            <li onClick={()=> dispatch(setIsOpenCart())} className="menu__item menu__item--cart">
                <div className="menu__item-row">
                    <div className="menu__item-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <div className="menu__item-text">
                        {totalPriceCart} руб.
                    </div>
                </div>
            </li>
            <li className="menu__item">
                <Link to="/favorite">
                <div className="menu__item-row">
                    <div className="menu__item-icon">
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z" fill="#9B9B9B"/>
                    </svg>
                    </div>
                    <div className="menu__item-text">
                        {totalProductLiked} 
                    </div>
                </div>
                </Link>
            </li>
            <li className="menu__item">
                <Link to="/user-profil">
                <div className="menu__item-row">
                    <div className="menu__item-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.98077C0 4.63275 4.579 0.115387 10 0.115387C15.421 0.115387 20 4.63275 20 9.98077C20 13.1278 18.408 15.977 16 17.7981V17.8731H15.898C14.23 19.1013 12.187 19.8462 10 19.8462C7.813 19.8462 5.77 19.1013 4.102 17.8731H4V17.7981C1.592 15.977 0 13.1268 0 9.98077ZM7.12347 15.1463C6.59154 15.5685 6.22136 16.1569 6.074 16.8145C7.242 17.4824 8.584 17.8731 10 17.8731C11.416 17.8731 12.758 17.4824 13.926 16.8145C13.7785 16.157 13.4082 15.5686 12.8764 15.1465C12.3445 14.7243 11.6827 14.4936 11 14.4922H9C8.3173 14.4934 7.6554 14.7241 7.12347 15.1463ZM13.7677 13.3465C14.5877 13.8849 15.2286 14.6499 15.61 15.5458C17.077 14.1065 18 12.1275 18 9.98077C18 5.70216 14.337 2.08846 10 2.08846C5.663 2.08846 2 5.70216 2 9.98077C2 12.1275 2.923 14.1065 4.39 15.5458C4.77144 14.6499 5.41227 13.8849 6.23227 13.3465C7.05227 12.8082 8.01501 12.5204 9 12.5191H11C11.985 12.5204 12.9477 12.8082 13.7677 13.3465ZM6 8.00769C6 5.75838 7.72 4.06154 10 4.06154C12.28 4.06154 14 5.75838 14 8.00769C14 10.257 12.28 11.9538 10 11.9538C7.72 11.9538 6 10.257 6 8.00769ZM8 8.00769C8 9.16983 8.822 9.98077 10 9.98077C11.178 9.98077 12 9.16983 12 8.00769C12 6.84555 11.178 6.03461 10 6.03461C8.822 6.03461 8 6.84555 8 8.00769Z" fill="#9B9B9B"/>
                    </svg>
                    </div>
                </div>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu