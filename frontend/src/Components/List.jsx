import { useEffect,useState } from "react";
import API from "../Services/api";
import Card from "./Card";
import { Droppable,Draggable } from "@hello-pangea/dnd";
import { TextField,Button } from "@mui/material";
function List({list,index}){
 const [cards,setCards] = useState([]);
 const [title,setTitle] = useState("");
 useEffect(()=>{
   fetchCards();
 },[]);
 const fetchCards = async()=>{
   const res = await API.get(`/cards/${list._id}`);
   setCards(res.data);
 };
 const createCard = async()=>{
   if(!title) return;
   const res = await API.post("/cards",{
     title,
     listId:list._id
   });
   setCards([...cards,res.data]);
   setTitle("");
 };
 return(
  <Draggable draggableId={list._id} index={index}>
  {(provided)=>(
   <div
    ref={provided.innerRef}
    {...provided.draggableProps}
    style={{
 background:"#f1f5f9",
 padding:"15px",
 width:"280px",
 borderRadius:"10px",
 boxShadow:"0 3px 6px rgba(0,0,0,0.1)"
}}
   >
   <h3 {...provided.dragHandleProps}>{list.title}</h3>
   <Droppable droppableId={list._id} type="card">
   {(provided)=>(
    <div ref={provided.innerRef} {...provided.droppableProps}>
    {cards.map((card,index)=>(
      <Draggable
       key={card._id}
       draggableId={card._id}
       index={index}
      >
      {(provided)=>(
       <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
       >
        <Card card={card}/>
       </div>
      )}
      </Draggable>
    ))}
    {provided.placeholder}
    <TextField
     size="small"
     label="Add Card"
     value={title}
     onChange={(e)=>setTitle(e.target.value)}
     fullWidth
     style={{marginTop:10}}
    />
    <Button
     variant="contained"
     size="small"
     style={{marginTop:5}}
     onClick={createCard}
    >
     Add
    </Button>
    </div>
   )}
   </Droppable>
   </div>
  )}
  </Draggable>
 );
}
export default List;