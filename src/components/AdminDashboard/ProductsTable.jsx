import { Box, Typography, useTheme } from "@mui/material";
import React, {useEffect} from "react";
import { getAllProducts } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "./theme";
import ProductsActions from './ProductsActions';

import SideBar from "./SideBar";

const ProductsTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch()
  const product = useSelector((state) => state.allProducts)
    

	useEffect(() => {
		dispatch(getAllProducts(product));
	},[dispatch]);

  console.log("product:", product)
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "trademark",
      headerName: "Trademark",
      flex: 1,
    },
    
    {
      field:  "price",
      headerName: "Price (US$)",
      flex: 1,
    },

    {
      field:  "actions",
      headerName: "Actions",
      type: 'actions',
      width: 150,
        renderCell : (params) =>(
          <ProductsActions {...{product}}/>
        )
    },
  
  ];

  return (
    <Box display="flex">
      <SideBar/>
      <Box
           display="grid"
           height="70vh"
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
        <DataGrid checkboxSelection rows={product} columns={columns} />
      </Box>
    </Box>
  );
};

export default ProductsTable;
