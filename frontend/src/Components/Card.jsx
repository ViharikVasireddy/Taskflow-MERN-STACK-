function Card({card}){
 return(
  <div
   style={{
 background:"white",
 padding:"12px",
 marginTop:"10px",
 borderRadius:"8px",
 boxShadow:"0 2px 4px rgba(0,0,0,0.1)"
}}
  >
   {card.title}
  </div>
 );
}
export default Card;