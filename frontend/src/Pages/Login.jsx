import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = (e) => {

e.preventDefault();

if(email && password){
navigate("/home");
}

};

return(

<div className="auth-container">

<div className="auth-box">

<h1 className="project-title">TaskFlow</h1>

<h2>Login</h2>

<form onSubmit={handleLogin}>

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

<button type="submit">Login</button>

</form>

<p className="signup-text">

Don't have an account? 

<span onClick={()=>navigate("/register")}>
 Sign Up
</span>

</p>

</div>

</div>

);

}

export default Login;