export const getProductsInCart = (cart,listProduct)=> listProduct.filter(item => cart.includes(item.id))

export const getTotalPriceCart = (productsInCart)=> productsInCart.reduce((acc,current)=>{
    return acc += current.price
},0)

export const getProductById = (id,listProduct)=> listProduct.find(product => product.id === id)