import React, {useEffect, useState} from "react";
import { getAllProducts, changeProduct} from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Switch, Typography, useTheme } from "@mui/material"
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
		dispatch(getAllProducts());
	},[dispatch]);
 
  const [inputd, setinputd] = useState({
    idproduct: "",
    productname: "",
    trademark: "",
    price: 0,
    description: "",
    category: "",
    imageurl: "",
    disabled: "",
    stock: "",
    namedisplay: ""
  });

  const changeDisabled = (id, elemento) => {
    let findProduct = product?.find(e => e.id === id)
    // findProduct[id] = "idproduct"
    findProduct.disabled = findProduct?.disabled === false ? true : false
    setinputd({
      idproduct: id,
      productname:"hola",
      trademark: elemento.trademark,
      price: elemento.price,
      description: elemento.description,
      category: elemento.category,
      imageurl: elemento.imageurl,
      disabled: findProduct.disabled,
      stock: elemento.stock,
      namedisplay: elemento.namedisplay
    })
    // dispatch(changeProduct(inputd))
    console.log(inputd)
    // console.log(findProduct)
    // dispatch(getAllProducts())
  }




  const [data, setData] = useState(product);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [paisSeleccionado, setPaisSeleccionado] = useState({
    id: "",
    trademark: "",
    price: "",
    category: "",
    stock: "",
    namedisplay: ""
  });

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
  setModalEditar(!modalEditar)
         }  
    
    
    //  console.log(input);      

     
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
   
    console.log(product)



  
    
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
      <table className="table-fixed">
        <thead>
          
           <tr>
             
            <th >ID</th>
            <th >Name</th>
            <th >Trademark</th>
            <th >Price</th>
            <th >Stock</th>
            <th >Category</th>
            <th></th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {product.map(elemento=>(
            <tr>
              <td >{elemento.id}</td>
              <td td >{elemento.namedisplay}</td>
              <td td >{elemento.trademark}</td>
              <td td >{elemento.price}</td>
              <td td >{elemento.stock}</td>
              <td td >{elemento.category}</td>
              {/* <td td className="trademark">{elemento.imageurl}</td> */}

              <td className="btns-p-table">
              <button className="btn-p-table"  onClick={()=>seleccionarPais(elemento, 'Editar')}><TbEdit/></button> 
              


              <td><span>enabled</span></td>
              <Switch
              checked={elemento.disabled === false ? false: true}
              onChange={() =>changeDisabled(elemento.id, elemento)}
              inputProps={{ 'aria-label': 'controlled' }}/>
              <td><span>disabled</span></td>



              {/* <button className="btn-p-table " onClick={()=>setModalEliminar(true)}><TbTrash/> </button> */}
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
          Estás Seguro que deseas eliminar {input && input.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger">
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
