import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Members from "./Pages/Members";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import BoardPage from "./Pages/BoardPage";
import ProfileSettings from "./Pages/ProfileSettings";
import ThemeSettings from "./Pages/ThemeSettings";
function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Login />} />
<Route path="/register" element={<Register />} />

<Route path="/dashboard" element={<Dashboard />} />
<Route path="/members" element={<Members />} />
<Route path="/settings" element={<Settings />} />
<Route path="/profile" element={<Profile />} />
<Route path="/boards/:id" element={<BoardPage/>}/>
<Route path="/profile-settings" element={<ProfileSettings/>}/>
<Route path="/theme-settings" element={<ThemeSettings/>}/>
<Route path="/home" element={<Home/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;