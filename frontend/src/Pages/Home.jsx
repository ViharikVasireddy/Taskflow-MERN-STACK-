import Layout from "../Components/Layout";

function Home(){

return(

<Layout>

<h1>Welcome to TaskFlow</h1>

<p style={{marginTop:"20px",maxWidth:"700px"}}>

TaskFlow is a task management system designed to help teams organize
their work efficiently. It allows users to create boards, lists, and
tasks so projects can be tracked easily.

</p>

<h2 style={{marginTop:"30px"}}>Importance of TaskFlow</h2>

<ul style={{marginTop:"15px",lineHeight:"1.8"}}>

<li>Helps teams organize project tasks</li>
<li>Improves productivity</li>
<li>Makes collaboration easier</li>
<li>Tracks project progress visually</li>
<li>Provides structured workflow management</li>

</ul>

<h3 style={{marginTop:"40px"}}>

© 2026 TaskFlow Project

</h3>

</Layout>

);

}

export default Home;