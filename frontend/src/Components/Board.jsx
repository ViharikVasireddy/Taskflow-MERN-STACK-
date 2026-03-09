import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import API from "../Services/api";
function Board(){
 const {id} = useParams();
 const [lists,setLists] = useState([]);
 useEffect(()=>{
   fetchLists();
 },[]);
 const fetchLists = async()=>{
   const res = await API.get(`/lists/${id}`);
   setLists(res.data);
 };
 const createList = async()=>{
   const title = prompt("Enter list title");
   const res = await API.post("/lists",{
    title,
    boardId:id
   });
   setLists([...lists,res.data]);
 };
 return(
  <div>
   <h2>Board</h2>
   <button onClick={createList}>Add List</button>
   {lists.map(list=>(
     <div key={list._id}>
       <h3>{list.title}</h3>
     </div>
   ))}
  </div>
 );
}
export default Board;