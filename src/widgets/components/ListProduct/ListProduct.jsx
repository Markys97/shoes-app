import React from 'react'
import './style/listProduct.css'
import ItemProduct from '../ItemProduct/ItemProduct'
import { useSelector } from 'react-redux';



function ListProduct({products,hasFilter}) {
  const filterTextValue = useSelector(state => state.product.searchProductTextValue)
  let finalListProduct =products;
  if(hasFilter!== undefined && hasFilter===true){
    finalListProduct = products.filter(item => item.name.toLowerCase().includes(filterTextValue.toLowerCase()))
  }

    const shoeLoading = ()=>{
        let arr = []
        for (let index = 0; index < 8; index++) {
          arr.push(<ItemProduct  loading={true}/>)
        }

        return arr
    }

    

  return (
    <div className="list-product">
        <div className="list-product__row">
            {products=== undefined?(
               shoeLoading().map(item => item)
            ):(
              finalListProduct.map((product,index)=> (
                    <ItemProduct key={index} productData={product}/>
                ))
            )}
        
        </div>
    </div>
  )
}

export default ListProduct