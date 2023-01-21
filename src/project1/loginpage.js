import React, { useEffect } from "react";
import {Link, useHistory} from "react-router-dom"
import {useState} from 'react'
import './login.css'
function Login (){

    const [error, setError] = useState("")
    const [user, setuser] = useState({
        email: '',
        password: '',
    })


function form(e){
    let obj_1 = {}
obj_1[e.target.name]=e.target.value
setuser({...user,...obj_1})
}
const [value,SetValue]=useState([])
useEffect(()=>{
if(sessionStorage.getItem("user"))
{
SetValue(JSON.parse(sessionStorage.getItem("user")))
}
},[])

console.log(value);
console.log(user);

const history = useHistory()

function login()
{
    if(value.length !== 0)
    {
        if(value.email == user.email)
        {
            setError("")
           history.push("/home")
        }
        else
        {
            setError("email or password not found")
        }
    }
    
}

    return(
<><div className='align'>
    <div className='login'>
   
<h1 className="email">email <input type ="text" name ="email" placeholder="Enter email" onChange={form}></input></h1>

<h1>password <input type = "password"  name = "password" placeholder="Enter password" onChange={form}></input></h1>

<br></br>
<small>{error}</small>
<div className='login-btn'>
<button><Link to ='/Reg'>CreateAccount</Link></button>
<br></br>
<button onClick={login}>Login</button>
</div>
</div>
</div>
</>



    )
}

export default Login