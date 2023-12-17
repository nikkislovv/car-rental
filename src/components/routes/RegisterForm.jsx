import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { useState } from "react";
import { Context } from "../../index";
import Input from "../Input";
import Loader from "../Loader";

const RegisterForm = () => {
    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')  
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')    

    const {store} = useContext(Context)


  if(store.isLoading) {
    return <div style={{display: 'flex',justifyContent: 'center', marginTop: 50}}><Loader/></div>
  }

  if(store.isRegistered) {
    return (
      <h1 style={{textAlign: "center"}}>Вы зарегистрированы</h1>
    )
  }

  return (
    <div style={{ marginTop:"20px",display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column"}}>
      <Input
        type="text" 
        placeholder="UserName"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <Input
        type="text" 
        placeholder="FullName"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />
      <Input
        type="password" 
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Input
        type="email" 
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="text" 
        placeholder="PhoneNumber"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <button style={{border:"4px solid black", minHeight: "30px", minWidth:"100px"}} onClick={() => store.registration(userName,fullName, password, email, phoneNumber)}>Зарегистрироваться</button>
    </div>
  )
};

export default observer(RegisterForm);
