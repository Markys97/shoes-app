import React from 'react'
import './style/userProfil.css'

import ListProduct from '../../../widgets/components/ListProduct/ListProduct'
import { getProducts } from '../../../entities/cart/functions'
import InfoBlock from '../../../shared/ui/InfoBlock/InfoBlock'
import ButtonMain from '../../../shared/ui/ButtonMain/ButtonMain'
import { Link } from 'react-router-dom'
import ProductSection from '../../../widgets/components/ProductSection/ProductSection'
import { useSelector } from 'react-redux'

function UserProfil() {
  const myProducts = useSelector(state=> state.product.myProducts)
  const listProduct = useSelector(state => state.product.listProduct)
  const products= getProducts(myProducts,listProduct)
  return (
    <ProductSection title="Мои покупки" products={products}>
      <InfoBlock
        img="avatar_sad.png"
        title="У вас нет    заказов"
        textWithCOl={['Вы нищеброд?','Оформите хотя бы один заказ.']}
        >
        <Link to="/"> 
            <ButtonMain  type="small" position={'left'}>Вернуться назад</ButtonMain>
        </Link>
    </InfoBlock>
  </ProductSection>
  )
}

export default UserProfil