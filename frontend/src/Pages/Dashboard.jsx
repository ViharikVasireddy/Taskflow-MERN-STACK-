import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import "../App.css";

function Dashboard() {

const navigate = useNavigate();

const [boards,setBoards] = useState([
{ id:1 , title:"Project Board", color:"#4f46e5"},
{ id:2 , title:"Development", color:"#059669"}
]);

const createBoard = () => {

const title = prompt("Enter Board Name");

if(!title) return;

const newBoard = {
id: boards.length + 1,
title,
color:"#4f46e5"
};

setBoards([...boards,newBoard]);

};

return(

<Layout>

<div className="topbar">

<h2>Your Boards</h2>

</div>

<button
className="create-btn"
onClick={createBoard}
>

Create Board

</button>

<div className="boards">

{boards.map(board=>(
<div
key={board.id}
className="board-card"
style={{background:board.color}}
onClick={()=>navigate(`/boards/${board.id}`)}
>

{board.title}

</div>
))}

</div>

<button
className="members-btn"
onClick={()=>navigate("/members")}
>

View Members

</button>

</Layout>

);

}

export default Dashboard;