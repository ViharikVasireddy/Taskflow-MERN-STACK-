import Layout from "../Components/Layout";
import { useState } from "react";

function ProfileSettings(){

const [name,setName] = useState("Admin User");
const [email,setEmail] = useState("admin@email.com");

const addUser = () => {
alert("Add User feature can connect to backend later");
};

const editProfile = () => {

const newName = prompt("Enter new name",name);

if(newName){
setName(newName);
}

};

return(

<Layout>

<h2>Profile Settings</h2>

<div className="profile-settings">

<div className="avatar big">A</div>

<h3>{name}</h3>

<p>{email}</p>

<div style={{marginTop:"20px",display:"flex",gap:"15px"}}>

<button onClick={editProfile}>
Edit Profile
</button>

<button onClick={addUser}>
Add New User
</button>

</div>

</div>

</Layout>

);

}

export default ProfileSettings;