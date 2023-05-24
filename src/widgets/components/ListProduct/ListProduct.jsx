import React from 'react'
import './style/listProduct.css'
import ItemProduct from '../ItemProduct/ItemProduct'



function ListProduct({products}) {

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
                products.map((product,index)=> (
                    <ItemProduct key={index} productData={product}/>
                ))
            )}
        
        </div>
    </div>
  )
}

export default ListProduct