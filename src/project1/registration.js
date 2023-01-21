import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link,useHistory } from 'react-router-dom'
import { useEffect } from "react";
import './registration.css';

function Reg(){

const [error, setError] = useState({
    nameErr: '',
    emailErr: '',
    phoneErr: '',
    passwordErr: '',
    re_passwordErr: ''
})
const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    re_password: ''
})
const [existUser,setExistUser] = useState({})

function checkHandeler(e) {


    let obj = {}
    obj[e.target.name] = e.target.value
    setForm({ ...form, ...obj })
    
   
}
const history = useHistory()
function userletin(){


let obj_1 = {}

for (let key in form) {

    if (form[key].trim().length === 0) {

        obj_1[key + "Err"] = "Mandatory"

    }
    else if (key === "email") {

        let mail = /^([A-Za-z0-9_\.\-]+)@([A-Za-z]+).([a-zA-Z]{3})$/

        if (mail.test(form[key])) {

            obj_1[key + "Err"] = ""

        }
        else {

            obj_1[key + "Err"] = "invalid email"

        }

    }
    else if (key === "phone") {

        if (form[key].trim().length === 10) {
            
            obj_1[key + "Err"] = ""

        }
        else {

            obj_1[key + "Err"] = "Invalid phone number"

        }

    }
    else {

        obj_1[key + "Err"] = ""

    }
}

if(Object.values(obj_1).filter((val)=>Boolean(val)).length==0){
    history.push("/")
sessionStorage.setItem("user",JSON.stringify(form))
}
else
{
    setError(obj_1)
}
}


    return(
<>
<div className='sign-up-bg'>
                <div className='sign-up'>
<h1>username <input type = "text" name="name" placeholder="enter username" onChange={checkHandeler}/></h1>
<br></br>
<small>{error.nameErr}</small>
<h1>email <input type = "e-mail" name="email" placeholder="enter email" onChange={checkHandeler}/></h1>
<br></br>
<small>{error.emailErr}</small>
<h1>phone <input type = "number" name="phone" placeholder="+91" onChange={checkHandeler}/></h1>
<br></br>
<small>{error.phoneErr}</small>
<h1>password <input type ="password" name = "password" placeholder="enter password" onChange={checkHandeler}/></h1>
<br></br>
<small>{error.passwordErr}</small>
<h1>re password <input type="password" name="re_password" placeholder="enter re-type password" onChange={checkHandeler}/></h1>
<br></br>
<small>{error.re_passwordErr}</small>
<br></br>
<button onClick={userletin}>submit</button>
<br></br>

</div>
</div>
</>


    )
}

export default Reg