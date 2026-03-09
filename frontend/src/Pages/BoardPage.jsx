import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import "./Boards.css";

function BoardPage(){

const { id } = useParams();

/* BOARD COLORS */

const boardColors = {
1:"#dbeafe",   // blue
2:"#dcfce7",   // green
3:"#fef3c7"    // yellow
};

const boardColor = boardColors[id] || "#dbeafe";

/* DEFAULT LISTS */

const [lists,setLists] = useState([
{
title:"To Do",
cards:["Create UI","Setup Backend"]
},
{
title:"In Progress",
cards:["Build Dashboard"]
}
]);

const [listTitle,setListTitle] = useState("");

/* ADD LIST */

const addList = () => {

if(listTitle.trim()==="") return;

setLists([...lists,{title:listTitle,cards:[]}]);

setListTitle("");

};

/* ADD CARD */

const addCard = (index,text) => {

if(text.trim()==="") return;

const updated=[...lists];

updated[index].cards.push(text);

setLists(updated);

};

return(

<Layout>

<h2 className="board-title">Project Board</h2>

{/* LIST ROW */}

<div
className="lists-row"
style={{background:boardColor}}
>

{lists.map((list,index)=>(
<List
key={index}
list={list}
index={index}
addCard={addCard}
/>
))}

</div>

{/* ADD LIST ROW */}

<div className="add-list-row">

<div className="add-list-card">

<input
type="text"
placeholder="Enter list name"
value={listTitle}
onChange={(e)=>setListTitle(e.target.value)}
/>

<button onClick={addList}>
Add List
</button>

</div>

</div>

</Layout>

);

}

/* LIST COMPONENT */

function List({list,index,addCard}){

const [cardText,setCardText] = useState("");

return(

<div className="list">

<h3>{list.title}</h3>

{list.cards.map((card,i)=>(
<div key={i} className="card">
{card}
</div>
))}

<input
type="text"
placeholder="New card"
value={cardText}
onChange={(e)=>setCardText(e.target.value)}
/>

<button
onClick={()=>{
addCard(index,cardText);
setCardText("");
}}
>

Add Card

</button>

</div>

);

}

export default BoardPage;