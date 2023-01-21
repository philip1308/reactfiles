import React from "react";
import { Link } from "react-router-dom";
import './product.css'

function Products(){

    return(
        <>
        <div className="product-sep">
            <div className="product-img">
                <img 
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/Brazil%20Fashion%20Ellus_Kand(4).jpg"
                className="img-fluid"
                />
                <h1><Link to="/items?q=mens">View more</Link></h1>
            </div>
            <div className="product-img">
                <img 
                src="https://www.superiorwallpapers.com/girls-and-models/erin-heatherton-an-american-fashion-model-and-actress_600x1024.jpg"
                className="img-fluid"
                />
                <h1><Link to="/items?q=womens">View more</Link></h1>
            </div>
            <div className="product-img">
                <img 
                src="https://cdn.shopify.com/s/files/1/1373/6229/products/KD100-Black-Main_S_1024x1024.jpg?v=1606462963"
                className="img-fluid"
                />
                 <h1><Link to="/items?q=kids">View more</Link></h1>
            </div>
            <div className="product-img">
                <img 
                src="https://www.zastavki.com/pictures/600x1024/2013/_Iphone_5C__cheerful_picture_046182_28.png"
                className="img-fluid"
                />
                <h1><Link to="/items?q=electronics">View more</Link></h1>
            </div>
        </div>
        </>
    )
}

export default Products