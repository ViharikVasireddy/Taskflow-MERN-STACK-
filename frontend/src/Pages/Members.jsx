import {useState} from "react";
import Layout from "../Components/Layout";
import "./Dashboard.css";
import "./Members.css";

function Members(){

const [members,setMembers]=useState([
{name:"John",role:"Manager"},
{name:"Sarah",role:"Frontend"},
{name:"David",role:"Backend"}
]);

return(
<Layout>
<div className="dashboard">

<h2>Team Members</h2>

<div className="members">

{members.map((m,i)=>(
<div key={i} className="member-card">

<div className="avatar">{m.name[0]}</div>

<div>
<h3>{m.name}</h3>
<p>{m.role}</p>
</div>

</div>
))}

</div>

</div>
</Layout>
);

}

export default Members;