import React, { useState } from 'react';
import styled from "styled-components";


const Input = styled.input`
 background-color: white;
`
const Custombutton = styled.button`
background-color:light-grey;
height:20px;
padding:15px;
`
const Customdiv=styled.div`
background-color:grey;
text-align:centre;
font-family:Arial;
padding:40px;
`


const emailCheck= 'email@gmail.com';
const  passCheck = '123ABC'

const Login=()=>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[ghalti,setGhalti]=useState(null);
    console.log(email);
    console.log(password)
    const check=()=>{
    if(email===emailCheck&&password===passCheck){
    alert("succefull");
    setGhalti("");
    }
    else {
        setGhalti("Error expected");
    }
}
    return(
    <Customdiv id="custom">
        Email
        <Input placeholder= "Email" value={email} onChange={email=>setEmail(email.target.value)}/>
        <br/>
        
        password
        <Input placeholder="password" value={password}onChange= {pass=>setPassword(pass.target.value)} />
        <br/>
        {ghalti}
        <Custombutton onClick ={check}>login</Custombutton>

    </Customdiv>
    )}
    export default Login;

