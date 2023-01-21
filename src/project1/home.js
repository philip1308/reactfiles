import React from "react";
import Footer from "../footer";
import Trending from "../trending";
import BasicExample from "./card";
import UncontrolledExample from "./curosil";
import Slidechange from "./curosil";
import Title from "./hometitle";
import Products from "./product";
function Home(){

    return(

        <>
        <Title/> 
        <UncontrolledExample/> 
        <Products/>
        <Trending/>
        <Footer/>
        
        </>
    )
}

export default Home