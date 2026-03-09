import { AppBar,Toolbar,Typography,Box } from "@mui/material";

function Navbar(){

 return(

  <AppBar
   position="fixed"
   sx={{
    background:"#2563eb",
    zIndex:1201
   }}
  >

   <Toolbar>

    <Typography variant="h6">
      TaskFlow
    </Typography>

    <Box sx={{flexGrow:1}}/>

    <Typography>
      Welcome User
    </Typography>

   </Toolbar>

  </AppBar>

 );

}

export default Navbar;