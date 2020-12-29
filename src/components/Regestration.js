import React, { useState } from 'react';


const Regestration =() =>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirm_password,setConfirmPAsword]=useState("");
    const [error, setError]=useState(null);

    const clear=()=>{
        
       
        if(password===confirm_password){
setError("")    
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPAsword("");
        }
        else 
        {

            setError("password not matched")
            
        }
    }   
    console.log(confirm_password)
    console.log(password)
    console.log(email)
    console.log(name)
    return(
        <div>
            Name
            
            <input placeholder="Name" value={name} onChange={omer=>setName(omer.target.value)}/>
            <br/>
            Email
            
            <input placeholder="Email here"value={email} onChange={event=>setEmail(event.target.value)}/>
            <br/>
             password
            <input placeholder="Password here" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <br/>
            confirm  Password
             <input placeholder="Confirm Pass" value={confirm_password} onChange={(event) =>setConfirmPAsword(event.target.value)}/>
             <br/>
             {error}
           
             <button onClick ={clear}>Submitt</button>
        </div>
    )
}

export default Regestration;