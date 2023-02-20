import React, {useEffect, useState} from "react";
import { getUser, updateUser} from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box,  Switch, Typography, useTheme } from "@mui/material";
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
  



  const changeRol = (id) => {
    let findUser = user.find(e => e.id === id)
    findUser.role = findUser.role=== "admin" ? "customer" : "admin" 
    dispatch(updateUser(findUser))
    console.log(findUser)
    dispatch(getUser())
  }

  console.log(user)



  const changeDisabled = (id) => {
    let findUser = user.find(e => e.id === id)
    findUser.disabled = findUser.disabled === false ? true : false
    dispatch(updateUser(findUser))
    console.log(findUser)
    dispatch(getUser())
  }

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
    }
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
            <th></th>
            <th>Role</th>
            <th></th>
            <th></th>
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

              <td><span>customer</span></td><Switch
              checked={elemento.role === "admin" ? true : false}
              onClick={() =>changeRol(elemento.id)}
              inputProps={{ 'aria-label': 'controlled' }}/>
              <td><span>admin</span></td>
            
              <td><span>enabled</span></td>
              <Switch
              checked={elemento.disabled === false ? false: true}
              onClick={() =>changeDisabled(elemento.id)}
              inputProps={{ 'aria-label': 'controlled' }}/>
              <td><span>disabled</span></td>
              
              
              
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
