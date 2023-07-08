import React from "react"

export default function Register(){
    const [email,setEmail] = React.useState('');
    const [password,setPassword]= React.useState('');
    
    function handleSubmitClick(){
        let url ='http://localhost:3000/users/signup'
        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username':email,
                'password':password
            })

        }).then((res)=>res.json())
        .then((data)=>{
            alert(data.message)
            localStorage.setItem('token',data.token)
        
        })
    }

    return (
        <>
        <h1>signUp Page</h1>
        <label htmlFor="email">Email :</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" />
         <br />
        <label htmlFor="password">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" />
         <button onClick={handleSubmitClick} >Submit</button>

        </>
    )
}