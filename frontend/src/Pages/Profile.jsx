import Sidebar from "../Components/Layout";
import "./Profile.css";
function Profile(){

return(

<div className="layout">

<Sidebar/>

<div className="content">

<h2>Admin Profile</h2>

<div className="member-card">

<div className="avatar">A</div>

<div>

<h3>Viharika</h3>
<p>Email: viharika@email.com</p>
<p>Role: Project Admin</p>

</div>

</div>

<h3 style={{marginTop:"30px"}}>About Project</h3>

<p>
TaskFlow is a task management system built using React,
Node.js, Express and MongoDB.
</p>

<p style={{marginTop:"20px"}}>

© 2026 TaskFlow  
Developed by: Your Name

</p>

</div>

</div>

);

}

export default Profile;