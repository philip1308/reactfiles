import { createSlice } from "@reduxjs/toolkit";

export const profileslice=createSlice({

    name:"profile",
    initialState:{
        profileAddress:[
            {
                houseno:"65",
                city:"chennai",
                pincode:"600234"
            }
        ]
    }
    ,
    reducers:{
        add:(state,action)=>{
     state.profileAddress=[...state.profileAddress,{
        houseno:action.payload.houseno,
        city:action.payload.city,
        pincode:action.payload.pincode
     }]
        }
        ,
        remove:(state,action)=>{
            state.profileAddress=[...state.profileAddress].filter((val)=> val.houseno != action.payload)
        }
        ,
        update:(state,action)=>{

            let change =state.profileAddress.map((val)=>{

                if(val.houseno === action.payload.id){

                    val.houseno = action.payload.houseno
                    val.city = action.payload.city
                    val.pincode = action.payload.pincode
                    
                }

                return val

            })

            state.profileAddress = change

        }
    }


})

export const {add,remove,update} = profileslice.actions

export const user = (state)=>state.profile.profileAddress

export default profileslice.reducer

