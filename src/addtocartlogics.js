import { createSlice } from "@reduxjs/toolkit";

export const cartslice=createSlice({
    name:"cart",
    initialState:{
        item : [],
        Filter:""
    },
    reducers:{

       Addtocart :(state,action)=>{
         let check = state.item.findIndex((val)=>val.img == action.payload.img)
         if(check == -1)
         {
            state.item=[...state.item,{
                img:action.payload.img,
                productname:action.payload.productName,
                productprice:action.payload.Price
             }]
         }
        }
    }

})

export const {Addtocart}=cartslice.actions
export const totalitems=(state)=>state.cart.item
export const search=(state)=>state.cart.Filter
export default cartslice.reducer