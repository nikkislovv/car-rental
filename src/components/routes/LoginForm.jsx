import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react"
import { Context } from "../../index";
import Input from "../Input";
import Loader from "../Loader";

const LoginForm = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {store} = useContext(Context)


    if(store.isLoading) {
      return <div style={{display: 'flex',justifyContent: 'center', marginTop: 50}}><Loader/></div>
    }
  
    if(store.isAuth) {
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
            type="password" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <button style={{border:"4px solid black", minHeight: "30px", minWidth:"100px"}} onClick={() => store.login(userName, password)}>Войти</button>
        </div>
    )
};

export default observer(LoginForm);
