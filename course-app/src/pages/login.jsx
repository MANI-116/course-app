
import React from "react"
export default function Login(){
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    function handleSubmitClick(){
        fetch('http://localhost:3000/users/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'username':email,
                'password':password    
            }
           
        }).then(res => res.json())
        .then((data)=>{
            alert(data.message);
            localStorage.setItem('token',data.token)
        })
    }

    return (
        <>
        <h1>Login Page</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e)=> setPassword(e.target.value)} id="password" />
        <br />
        <button onClick={handleSubmitClick}>Submit</button>
        </>
    )
}