import React from "react";
import Title from "./hometitle";
import { totalitems } from "../addtocartlogics";
import { useSelector } from "react-redux";
import './cart.css'
import Footer from "../footer";
function Cart() {

    const items = useSelector(totalitems)
    console.log(items);
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

                        </div>
                    )
                })
            }
<Footer/>
        </>
    )
}

export default Cart