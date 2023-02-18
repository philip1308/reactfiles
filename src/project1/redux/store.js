import {configureStore} from  "@reduxjs/toolkit"
import  profileslice  from "../../profilelogics"
import  cartslice  from "../../addtocartlogics"
import  homeSlice from "../homeSearchLogics"
export default configureStore({
    reducer:{
    profile:profileslice,
    cart:cartslice,
    searchFilter:homeSlice
    }
})