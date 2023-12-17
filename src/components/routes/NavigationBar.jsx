import React, { useContext, useEffect } from "react"
import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../../styles/Link.css"
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const NavigationBar = () => {
    const {store} = useContext(Context)

    useEffect(() => {
      if(localStorage.getItem("access-token") && localStorage.getItem("refresh-token")) {
        store.checkAuth()
      }
    }, [])

    console.log(store.id)
    console.log(store.isAuth)
    console.log(store.isRegistered)
    
    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{backgroundColor: "black"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="link" to="/">Машины</Link>
            </Typography>
            {store.isAuth 
              ? <Button color="inherit" onClick={() => store.logout()}>
                  Выйти
                </Button>
              : <Button color="inherit">
                <Link className="link" to="/login">Войти</Link>            
                </Button>
            }
            {store.isAuth
              ? <Typography sx={{marginLeft: "10px"}}>
                  Зарегистрирован
                </Typography>
              : <Button style={{marginLeft: "5px"}} color="inherit">
                <Link className="link" to="/register">Зарегистрироваться</Link>
                </Button>
            }
          </Toolbar>
        </AppBar>
        <Outlet/>
        </Box>
    )
}

export default observer(NavigationBar);
