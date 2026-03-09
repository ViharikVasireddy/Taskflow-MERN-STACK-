import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleRegister = (e) => {

e.preventDefault();

if(name && email && password){
navigate("/home");
}

};

return(

<div className="auth-container">

<div className="auth-box">

<h1 className="project-title">TaskFlow</h1>

<h2>Register</h2>

<form onSubmit={handleRegister}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">Sign Up</button>

</form>

<p className="signup-text">

Already have an account?

<span onClick={()=>navigate("/")}>
 Login
</span>

</p>

</div>

</div>

);

}

export default Register;