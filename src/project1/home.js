import React from "react";
import Footer from "../footer";
import Trending from "../trending";
import BasicExample from "./card";
import UncontrolledExample from "./curosil";
import Slidechange from "./curosil";
import Title from "./hometitle";
import Products from "./product";
import { userValue } from "./homeSearchLogics";
import { useSelector } from "react-redux";
function Home(){

    const value = useSelector(userValue)
console.log(value);
    return(
        <>
        <Title/> 
        <UncontrolledExample /> 
        <Products/>
        <Trending/>
        <Footer/>
        
        </>
    )
}

export default Home