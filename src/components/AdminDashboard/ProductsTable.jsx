import React, {useEffect, useState} from "react";
import { getAllProducts, changeProduct} from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "./theme";
import './ProductsTable.css';
import { TbEdit } from "react-icons/tb"
import { TbTrash } from "react-icons/tb"
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import SideBar from './SideBar';


function ProductsTable() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.allProducts)
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
////////////////trae productos a la tabla
  useEffect(() => {
		dispatch(getAllProducts(product));
	},[dispatch]);
 

  const [data, setData] = useState(product);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);


  ////////////////////estados de la info tabla(input)
  const [input, setinput] = useState({
    idproduct: "",
    name: "",
    trademark: "",
    price: 0,
    description: "",
    category: "",
    imageurl: "",
    disabled: false,
    stock: "",
    namedisplay: ""
  });

  ///////////////////////////////////////////////////
 const handleChange = (e) => {  
		setinput({
			...input,
			[e.target.name]: e.target.value,
      
		});
  }

  const handleSubmit = (e) => {

    dispatch(changeProduct(input));
         
            setinput({
              idproduct: product.id,
              name:"",
              trademark:"", 
              price:"",
              description:"",
              category:"",
              imageurl:"",
              disbled:false,
              stock: "",
              namedisplay: ""
            });

         }  
    
    
     console.log(input);      

     
      /////////mostrar segun cual sea 
  const seleccionarPais=(elemento, caso)=>{
    setinput( {idproduct: elemento.id,
    name: elemento.name,
    trademark: elemento.trademark,
    price: elemento.price,
    description: elemento.description,
    category: elemento.category,
    imageurl: elemento.imageurl,
    disabled: elemento.disabled,
  stock: elemento.stock,
  namedisplay: elemento.namedisplay})

     setModalEditar(true)
      }
    







      // const editar=()=>{
      //   var dataNueva=data;
      //   dataNueva.map(product=>{
      //     if(product.idproduct===input.idproduct){
      //       product.name=input.name;
      //       product.trademark=input.trademark;
      //       product.imageurl=input.imageurl;
      //       product.price=input.price;
      //       product.description=input.description;
      //       product.stock=input.stock;
      //       product.disabled=input.disabled;
      //     }
      //   });
      //   setData(dataNueva);
      //   setModalEditar(false);
      // }
    
      const eliminar =()=>{
        setData(data.filter(product=>product.id!==input.id));
        setModalEliminar(false);
      }
    
    
    
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
            {/* <th>Image (URL)</th> */}
          </tr>
        </thead>
        <tbody>
          {product.map(elemento=>(
            <tr>
              <td className="price">{elemento.id}</td>
              <td td className="trademark">{elemento.name}</td>
              <td td className="trademark">{elemento.trademark}</td>
              <td td className="price">{elemento.price}</td>
              <td td className="price">{elemento.stock}</td>
              <td td className="trademark">{elemento.category}</td>
              {/* <td td className="trademark">{elemento.imageurl}</td> */}

              <td>
              <button  onClick={()=>seleccionarPais(elemento, 'Editar')}><TbEdit/> </button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarPais(elemento, 'Eliminar')}><TbTrash/> </button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
</Box>
{/* //////////////////////////////////////////////////// */}


      <Modal isOpen={modalEditar}>
        <ModalHeader>
          
          <div>
            <h3>Edit Product</h3>
          </div>
        </ModalHeader>


        <ModalBody>

          <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="idproduct"
              id="idproduct"
              value={input.idproduct}
            />
            <br />

            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <br />

            <label>Trademark</label>
            <input
              className="form-control"
              type="text"
              name="trademark"
              id="trademark"
              value={input && input.trademark}
              onChange={(e) => handleChange(e)}
            />
            <br />

            <label>Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              id="price"
              value={input && input.price}
              onChange={(e) => handleChange(e)}
            />

            <label>Stock</label>
            <input
              className="form-control"
              type="text"
              name="stock"
              id="stock"
              value={input && input.stock}
              onChange={(e) => handleChange(e)}
            />

            <br /> <label>Category</label>
            <input
              className="form-control"
              type="text"
              name="category"
              id="category"
              value={input && input.category}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              value={input && input.description}
              onChange={(e) => handleChange(e)}
            />
            <br />

            <label>Image</label>
            <input
              className="form-control"
              type="text"
              name="imageurl"
              id="imageurl"
              value={ input && input.imageurl}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label>Disabled</label>
            <input
              className="form-control"
              type="text"
              name="disable"
              id="disabled"
              value={ input && input.disabled}
              onChange={(e) => handleChange(e)}
            />
            <br />

          </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button type="submit" id="edit" name= "edit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el país {input && input.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


     </Box>  
    </div>
  );
}

export default ProductsTable;
