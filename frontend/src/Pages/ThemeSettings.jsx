import Sidebar from "../Components/Sidebar";

function ThemeSettings(){

const setDark=()=>{
document.body.style.background="#0f172a";
document.body.style.color="white";
};

const setLight=()=>{
document.body.style.background="#f8fafc";
document.body.style.color="black";
};

return(

<div className="layout">

<Sidebar/>

<div className="content">

<h2>Theme Settings</h2>

<div style={{marginTop:"30px"}}>

<button
onClick={setLight}
style={{
marginRight:"20px",
padding:"10px 20px",
borderRadius:"6px"
}}
>

Light Theme

</button>

<button
onClick={setDark}
style={{
padding:"10px 20px",
borderRadius:"6px"
}}
>

Dark Theme

</button>

</div>

</div>

</div>

);

}

export default ThemeSettings;