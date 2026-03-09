import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Layout({children}){

const navigate = useNavigate();

return(

<div className="layout">

<Sidebar/>

<div className="content">

<div className="topbar">

<h2>TaskFlow</h2>

<div
className="profile"
onClick={()=>navigate("/profile")}
>

<div className="avatar">A</div>
<span>Admin</span>

</div>

</div>

{children}

</div>

</div>

);

}

export default Layout;