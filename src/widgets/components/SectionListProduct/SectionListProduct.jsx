import React from 'react'
import './style/sectionListProduct.css'
import SearchProductInpuct_tpl from '../../../entities/products/components/SearchProductInpuct_tpl/SearchProductInput_tpl'
import ItemProduct_tpl from '../../../entities/products/components/ItemProduct_tpl/ItemProduct_tpl'
import ListProduct from '../ListProduct/ListProduct'
import { useSelector } from 'react-redux'


function SectionListProduct() {
    const listProduct = useSelector(state => state.product.listProduct)

  return (
    <section className="home-main">
        <div className="home-main__header">
            <h2 className="home-main__title">Все кроссовки</h2>
            {/* component InputSearch */}
            <form className="form">
                <div className="form__item">
                        <SearchProductInpuct_tpl/>
                </div>
            </form>
        </div>

        {/* component ListProduct */}
       <ListProduct products={undefined}/>

    </section>
  )
}

export default SectionListProduct