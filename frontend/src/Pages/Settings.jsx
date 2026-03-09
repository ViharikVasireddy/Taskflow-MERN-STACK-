import Layout from "../Components/Layout";
import { useNavigate } from "react-router-dom";

function Settings(){

const navigate = useNavigate();

return(

<Layout>

<h2>Settings</h2>

<div style={{display:"flex",gap:"20px",marginTop:"20px"}}>

<div
style={{
background:"white",
padding:"20px",
borderRadius:"10px",
cursor:"pointer"
}}
onClick={()=>navigate("/profile-settings")}
>

Profile Settings

</div>

<div
style={{
background:"white",
padding:"20px",
borderRadius:"10px",
cursor:"pointer"
}}
onClick={()=>navigate("/theme-settings")}
>

Theme Settings

</div>

</div>

</Layout>

);

}

export default Settings;