import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

const navigate = useNavigate();

return (

<div className="sidebar">

<h2 className="logo">TaskFlow</h2>

<div className="menu">

<button onClick={()=>navigate("/home")}>Home</button>

<button onClick={()=>navigate("/dashboard")}>Boards</button>

<button onClick={()=>navigate("/members")}>Members</button>

<button onClick={()=>navigate("/settings")}>Settings</button>

</div>

<div className="logout">

<button onClick={() => navigate("/")}>Logout</button>

</div>

</div>

);

}

export default Sidebar;