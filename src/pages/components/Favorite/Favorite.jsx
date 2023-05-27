import React from 'react'
import './style/favorite.css'
import { useSelector } from 'react-redux'
import ListProduct from '../../../widgets/components/ListProduct/ListProduct'
import { getProducts } from '../../../entities/cart/functions'
import InfoBlock from '../../../shared/ui/InfoBlock/InfoBlock'
import ButtonMain from '../../../shared/ui/ButtonMain/ButtonMain'
import { Link } from 'react-router-dom'
import ProductSection from '../../../widgets/components/ProductSection/ProductSection'


function Favorite() {
    const listProductLiked = useSelector(state=> state.product.listProductLiked)
    const listProduct = useSelector(state => state.product.listProduct)
    const products= getProducts(listProductLiked,listProduct)

  return (
        <ProductSection title="Мои покупки" products={products}>
             <InfoBlock
                img="avatar_happy.png"
                text="Вы ничего не добавляли в закладки"
                title="Закладок нет :("
                >
                <Link to="/"> 
                    <ButtonMain  type="small" position={'left'}>Вернуться назад</ButtonMain>
                </Link>
            </InfoBlock>
        </ProductSection>
  )
}

export default Favorite