import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listProduct:[
        {
            id:1,
            name:'Мужские Кроссовки Nike Blazer Mid Suede',
            price: 12999,
            img:'image 1.jpg',
        },
        {
            id:2,
            name:'Мужские Кроссовки Nike Air Max 270',
            price: 2999,
            img:'image 2.jpg',
        },
        {
            id:3,
            name:'Мужские Кроссовки Nike Blazer Mid Suede',
            price: 3999,
            img:'image 3.jpg',
        },
        {
            id:4,
            name:'Кроссовки Puma X Aka Boku Future Rider',
            price: 4999,
            img:'image 5.jpg',
        },
        {
            id:5,
            name:'Мужские Кроссовки Under Armour Curry 8',
            price: 5999,
            img:'image 5.jpg',
        },
        {
            id:6,
            name:'Мужские Кроссовки Nike Kyrie 7',
            price: 6999,
            img:'image 6.jpg',
        },
        {
            id:7,
            name:'Мужские Кроссовки Jordan Air Jordan 11',
            price: 7999,
            img:'image 7.jpg',
        },
        {
            id:8,
            name:'Мужские Кроссовки Nike LeBron XVIII',
            price: 8999,
            img:'image 8.jpg',
        },
        {
            id:9,
            name:'Мужские Кроссовки Nike Kyrie Flytrap IV',
            price: 9999,
            img:'image 9.jpg',
        },
        {
            id:10,
            name:'Мужские Кроссовки Nike Lebron XVIII Low',
            price: 10999,
            img:'image 10.jpg',
        },
        {
            id:11,
            name:'Мужские Кроссовки Nike Blazer Mid Suede',
            price: 11999,
            img:'image 11.jpg',
        },
        {
            id:12,
            name:'Кроссовки Puma X Aka Boku Future Rider',
            price: 12999,
            img:'image 12.jpg',
        },
        
    ],
    cart:[],
    listProductLiked:[],
    searchProductTextValue:'',
    isCartOpen:false
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProductInCart:(state,action)=>{
            let id = action.payload
            let cart = state.cart

            if(!cart.includes(id)){
                cart = [...cart,id]
            }

            state.cart =cart

            return state
        },

        removeProductInCart:(state,action)=>{
            let id = action.payload
            let cart = state.cart
            let newCart = cart.filter(item => item !== id);
            state.cart =newCart
            return state
        },

        likeProduct: (state,action)=>{
            let id = action.payload
            if(!state.listProductLiked.includes(id)){

              state.listProductLiked = [...state.listProductLiked,id]

            }


            return state
        },
         
        removeLikeProduct: (state,action)=>{
            let id = action.payload
            state.listProductLiked = state.listProductLiked.filter(item => item !== id)
            return state
        },
        setSearchProductTextValue:(state,action)=> state= {...state,searchProductTextValue:action.payload},
        setIsOpenCart: (state,action)=> state={...state,isCartOpen:!state.isCartOpen}
        
    }
})

export const {
    addProductInCart,
    removeProductInCart,
    likeProduct,
    removeLikeProduct,
    setSearchProductTextValue,
    setIsOpenCart,
} = productSlice.actions