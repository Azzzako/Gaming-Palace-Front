import React, {useEffect} from "react";
import { getUser} from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "./theme";
import SideBar from "./SideBar";

const Sales = () => {
  const theme = useTheme();

  
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users)
    

  useEffect(() => {
		dispatch(getUser(user));
	},[dispatch]);
  
  

    return (
      <div className="P">
      <Box  display="flex" >
      <SideBar/>
      <Box
        display="grid"
        height="30vh"
        width="2000px"
        margin="30px"
      >
  
      {/* ///////////////////////////////// TABLA */}
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Trademark</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {user.Carts?.map(elemento=>(
              <tr>
                <td className="price">{elemento.id}</td>
                <td td className="trademark">{elemento.name}</td>
                <td td className="trademark">{elemento.trademark}</td>
                <td td className="price">{elemento.price}</td>
                <td td className="price">{elemento.stock}</td>
                <td td className="trademark">{elemento.category}</td>
  
              </tr>
            ))
            }
          </tbody>
        </table>
  </Box>
  </Box>
  {/* //////////////////////////////////////////////////// */}
  
  
        
      </div>
    );
};

export default Sales;
