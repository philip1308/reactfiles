import React from "react";
import Title from "./hometitle";
import { totalitems } from "../addtocartlogics";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../addtocartlogics";
import './cart.css'
import Footer from "../footer";
function Cart() {

    const items = useSelector(totalitems)
    const dispatch = useDispatch()
    return (
        <>
            <Title />
            {
                items.map((val) => {
                    return (
                        <div className="cart-sep">
                            <img src={val.img} height="300" />
                            <div>
                                <h1>${val.productprice}.00</h1>
                                <h1>{val.productname}</h1>
                            </div>
<button onClick={()=>dispatch(removeFromCart(val.img))} className="btn btn-danger">remove</button>
                        </div>
                    )
                })
            }
<Footer/>
        </>
    )
}

export default Cart