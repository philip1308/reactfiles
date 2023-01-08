import React from "react";
import {Link} from "react-router-dom"
import {useState} from 'react'
import './login.css'
function Login (){

    const [error, setError] = useState({
        emailErr: '',
        passwordErr: '',
    })
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    return(
<><div className='align'>
    <div className='login'>
   
<h1 className="email">email <input type ="text" name ="email" placeholder="Enter email"></input></h1>

<h1>password <input type = "password"  name = "password" placeholder="Enter password"></input></h1>

<br></br>
<div className='login-btn'>
<button><Link to ='/Reg'>CreateAccount</Link></button>
<br></br>
<button><Link to='/Home' >Login</Link></button>
</div>
</div>
</div>
</>



    )
}

export default Login