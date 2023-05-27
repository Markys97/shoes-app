import React from 'react'
import './style/productSection.css'
import { Link } from 'react-router-dom'
import ButtonMain from '../../../shared/ui/ButtonMain/ButtonMain'
import ListProduct from '../ListProduct/ListProduct'
import InfoBlock from '../../../shared/ui/InfoBlock/InfoBlock'
import { getProducts } from '../../../entities/cart/functions'

function ProductSection({products,children,title}) {

    const hasProductLiked = products.length!==0?true:false
  return (
        <div className="product-section">
            <div className="product-section__container wrapper">
                <div className="product-section__content">
                    {
                        hasProductLiked ===true?(
                            <div className="product-section__full">
                                <div className="product-section__title">
                                    <Link to="/">
                                        <div className="product-section__title-icon">
                                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="34" height="34" rx="7.5" fill="white" stroke="#F2F2F2"/>
                                            <path d="M19 22L14 17L19 12" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="product-section__title-text">{title!==undefined && title}</div>
                                </div>
                                <div className="product-section__products">
                                    <ListProduct products={products}/>
                                </div>
                            </div>
                        ):(
                            <div className="product-section__empty">
                               {children}
                            </div>
                        )
                    }
                    

                </div>
            </div>
        </div>
  )
}

export default ProductSection