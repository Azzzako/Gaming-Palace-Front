import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import Sidebar from "./SideBar"


const AdminDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return ( 
    <div>
    <Box  display="flex">

     <Sidebar/>
  
      {/* GRID & CHARTS */}
      <Box
       marginLeft="30px"
       marginRight="30px"
       marginTop="80px"
       display="grid"
       gridTemplateColumns="repeat(60, 1fr)"
       gridAutoRows="140px"
       width="2000px"
       gap="20px"
     >
       
        
        {/* ROW 1 */}
      <Box
          gridColumn="span 40"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
        <Box
          mt="20px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
          >
          <Box>
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              >
                Text Text
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
              >
                $59,342.32
            </Typography>
          </Box>
        </Box>
      </Box>



      <Box
          gridColumn="span 20"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
          
        >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        colors={colors.grey[100]}
        p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Text Text
          </Typography>
        </Box>
      </Box>



        {/* ROW 2 */}
      <Box
          gridColumn="span 40"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
        <Typography variant="h5" fontWeight="600">
            Text
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
          >
        </Box>
      </Box>
       
    
      </Box>
    </Box>
  </div>
    
  );
};

export default AdminDashboard;
