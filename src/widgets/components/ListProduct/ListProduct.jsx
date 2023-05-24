import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct'



function ListProduct({products}) {

    const shoeLoading = ()=>{
        let arr = []
        for (let index = 0; index < 5; index++) {
          arr.push(<ItemProduct  loading={true}/>)
        }

        return arr
    }

    console.log(shoeLoading())
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