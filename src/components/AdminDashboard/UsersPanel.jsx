import React, {useEffect} from "react";
import { getUser} from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "./theme";
// import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SideBar from "./SideBar";
import './UsersPanel.css'

const UsersPanel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users)
    

  useEffect(() => {
		dispatch(getUser(user));
	},[dispatch]);
  

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div className="Q">

    <Box  display="flex">

      <SideBar/>

      <Box
        display="grid"
        height="30vh"
        width="2000px"
        margin="30px"
        
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
         <table className="table">
        <thead>
          <tr>
           
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Adress</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user.map(elemento=>(
            <tr>
              <td className="a">{elemento.id}</td>
              <td className="b">{elemento.name}</td>
              <td className="b">{elemento.email}</td>
              <td className="a">{elemento.address}</td>
              <td className="a">{elemento.role}</td>
              <td className="b">{elemento.disabled}</td>
               {/* CONDICIONAR PARA QUE RENDERICE UN ICON */}

              

              {/* <td>
              <button  onClick={()=>seleccionarPais(elemento, 'Editar')}><TbEdit/> </button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarPais(elemento, 'Eliminar')}><TbTrash/> </button>
              </td> */}
            </tr>
          ))
          }
        </tbody>
      </table>
      </Box>
    </Box>
    </div>
  );
};

export default UsersPanel;
