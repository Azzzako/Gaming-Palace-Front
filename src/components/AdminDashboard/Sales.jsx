import React, {useEffect, useState} from "react";
import { getStats, getAllProducts, getByMonth, getByYear} from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import SideBar from "./SideBar";

const Sales = () => {

  
  const dispatch = useDispatch()
  const stats = useSelector((state) => state.allStats)
  const products = useSelector((state) => state.allProducts)


  const [input, setInput] = React.useState('');


  const sales = useSelector(state => state.salesByMonth)
  const salesY = useSelector(state => state.salesByYear)

  const handleChangeYear = (event) => {
    event.preventDefault()
    setInput(event.target.value);
    dispatch(getByYear(event.target.value))
    console.log("EL INPUT ES")
    console.log(event.target.value)
  };

  const handleChangeMonth = (event) => {
    event.preventDefault()
    setInput(event.target.value)
    dispatch(getByMonth(event.target.value))
    console.log("EL OTRO INPUT ES")
    console.log(event.target.value)
  }

    console.log("estado mes:", sales)


  let meses = [1,2,3,4,5,6,7,8,9,10,11,12]
  let años = [2019, 2020, 2021, 2022, 2023]

  
// console.log(sales)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getStats())
},[dispatch]);

console.log("estado por año:",salesY )

 
  let price = []
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < stats.length; j++) {
        if(products[i].id === stats[j].idproduct){
          price.push({price:products[i].price, namedisplay:products[i].namedisplay})
          stats.forEach(element => {  
            element["pricee"] = products[i].price})
            stats.forEach(element => {  
              element["namedisplayy"] = products[i].namedisplay})
        } 
      }
    }

  //  console.log(input)
  
    
    

    return (
      <div className="P">

    

      <Box  display="flex">
      <SideBar/>
      <Box
        display="grid"
        height="30vh"
        width="2000px"
        margin="30px"
      >
         <div className="filter">

    <div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-standard-label">Month</InputLabel>
    <Select
    labelId="demo-simple-select-standard-label"
    id="demo-simple-select-standard"
    value={input}
    onChange={handleChangeMonth}
    
    >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    {meses.map( elemento => {
      return(
        <MenuItem value={elemento}>{elemento}</MenuItem>
      )
    })}

  </Select>
  </FormControl>
  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
  <Select
  labelId="demo-simple-select-filled-label"
  id="demo-simple-select-filled"
  value={input}
  onChange={handleChangeYear}
  >
  <MenuItem value="">
    <em>None</em>
  </MenuItem>
  {años.map( elemento => {
    return(
      <MenuItem value={elemento}>{elemento}</MenuItem>
    )
  })}


  </Select>
  </FormControl>
  </div>
  </div>


        
  
      {/* ///////////////////////////////// TABLA */}



        <table className="table">
          <tbody>
          
            <tr>

              
              
              <th>ID User</th>
              <th>ID Product</th>  
              <th>Name</th> 
              <th>Price</th>
              <th>Month</th>
              <th>Year</th>
          
              
            </tr>
            {/* {(sales.length>0 ? sales.map((elemento)=>(

            )))} */}
            {stats?.map((elemento)=> (
           
           <tr>
                
                
                <td>{elemento.userid}</td>
                <td>{elemento.idproduct}</td>
                <td>{elemento.namedisplayy}</td>
                <td>{elemento.pricee}</td>
                
                <td>{elemento.month}</td>
                <td>{elemento.year}</td>
                </tr>
                
                )
            )}

            
          
            
          </tbody>
        </table>
  </Box>
  </Box>
  {/* //////////////////////////////////////////////////// */}
  
  
        
      </div>
    );
};

export default Sales;
