import React, { useState } from "react";

import { Link } from "react-router-dom";
import Example from "./module";
import { useEffect } from "react";
import './registration.css'
function Reg (){
const[success,setSuccess] = useState("")
const clicktologin=()=>{
setSuccess("created successfully")
}
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
const [existUser,setExistUser] = useState([
{
    name: 'philip',
    email: 'email',
    phone: '9344802084',
    password: 'philip',
    re_password: 'philip'
}
])
function checkHandeler(e) {


    let obj = {}
    obj[e.target.name] = e.target.value
    setForm({ ...form, ...obj })
    
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
        else if (key === "password") {

            let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\w!@#$%^&]{8,100}$/

            if (pass.test(form[key])) {

                obj_1[key + "Err"] = ""

            }
            else {

                obj_1[key + "Err"] = "Weak password"

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
    setError(obj_1)
}
useEffect(()=>{
existUser.push(form)
}
,[form])

    return(
<>
<div className='sign-up-bg'>
                <div className='sign-up'>
<h1>{success}</h1>
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
<button ><Link to ='/'>create Account</Link></button>
<br></br>
<Example/>
</div>
</div>
</>


    )
}

export default Reg