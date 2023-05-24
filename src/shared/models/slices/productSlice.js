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
            name:'Мужские Кроссовки Nike Blazer Mid Suede',
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
            name:'Мужские Кроссовки Nike Blazer Mid Suede',
            price: 4999,
            img:'image 5.jpg',
        },
    ]
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    }
})