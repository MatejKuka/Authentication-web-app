import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ProfileScreen from "./components/ProfileScreen";
import SignOut from "./components/auth/SignOut";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={"/"} element={<HomeScreen/>}/>
        <Route path={"/sign-up"} element={<SignUp/>}/>
        <Route path={"/sign-in"} element={<SignIn/>}/>
        <Route path={"/sign-out"} element={<SignOut/>}/>
        <Route path={"/user-profile"} element={<ProfileScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
