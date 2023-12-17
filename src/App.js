import Home from "./components/routes/Home"
import { Routes, Route} from "react-router-dom"
import NavigationBar from "./components/routes/NavigationBar";
import RegisterForm from "./components/routes/RegisterForm";
import { observer } from "mobx-react-lite";
import LoginForm from "./components/routes/LoginForm";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<Home/>} />
        <Route path="register" element={<RegisterForm/>} />
        <Route path="login" element={<LoginForm/>} />
      </Route>      
    </Routes>
  );
}

export default observer(App);
