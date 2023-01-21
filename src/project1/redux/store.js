import {configureStore} from  "@reduxjs/toolkit"
import  profileslice  from "../../profilelogics"
import  cartslice  from "../../addtocartlogics"
export default configureStore({
    reducer:{
    profile:profileslice,
    cart:cartslice

    }
})