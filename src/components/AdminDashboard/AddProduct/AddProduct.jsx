import React, { useState , useEffect} from 'react';
import { Box} from "@mui/material";

import {useDispatch,} from 'react-redux';
import { postNewProduct } from '../../../Redux/Actions/actions';
import validator from './ValidatorForm';
import s from "./AddProduct.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './ModalForm';
import Button from 'react-bootstrap/Button';
import SideBar from '../SideBar';









export default function AddProduct() {

  

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({}); //se setea el objeto vacío de errores

  const [modalShow, setModalShow] = React.useState(false);
  


  const [input, setInput] = useState({
		name:"",
    trademark:"", 
    price:0,
    description:"",
    category:"",
    imageurl:""
	}); 

  

  const handleChange = (e) => {  
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validator({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

  const handleSelect= (e) => {
		setInput({
			...input,
			category: e.target.value,
		});
		setErrors(
			validator({
				...input,
				season: e.target.value,
			})
		);
	};




	const handleSubmit = (e) => {
		e.preventDefault();
    if(!input.name || !input.price || !input.trademark || !input.description || !input.category || !input.imageurl){ return alert("INFORMATION REQUIRED, PLEASE COMPLETE ALL FIELDS", setModalShow(false))} 
    // if (!input.name){ return alert("INFORMATION REQUIRED", setModalShow(false))} 
    // if
    else{  
    console.log(input)
        setErrors(
          validator({
            ...input,
          [e.target.name]: e.target.value
          })
        );
        
        if(Object.keys(errors).length === 0){
          dispatch(postNewProduct(input));
         
  
            setInput({
              name:"",
              trademark:"", 
              price:"",
              description:"",
              category:"",
              imageurl:""
            });
        } }  
      }

      const [image, setImage] = useState("");
  const [minImage, setMiniImage] = useState("");

  useEffect(() => {
    if (image) {
      uploadImage();
    }
  }, [image]);

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gamepalace");
    data.append("cloud_name", "ddxezv6as");
    fetch("https://api.cloudinary.com/v1_1/ddxezv6as/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInput({
          ...input,
          imageurl: data.url,
        });
        setMiniImage(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("INPUT ES");
  console.log(input);
	
	 
  

  

  
  return (
    <Box display="flex">
      
    
    <SideBar className="sidebar"/>
    <Box  display="grid"
        height="70vh"
        width="2000px"
        margin="30px">
      <div className={s.container}>

        <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={s.formheader}>
            <h1 className={s.formtitle}>NEW PRODUCT</h1>
          </div>

        <div>
              {errors.name && (
              <div className={s.error}>
                {errors.name} 
              </div>
              )}
            <label className={s.formlabel}>Name</label>
            <input type="text" id="name" value={input.name} name= "name" className={s.forminput} placeholder="Name of product" onChange={(e) => handleChange(e)}></input>
        </div>


        <div>
              {errors.price && (
              <div className={s.error}>
                {errors.price} 
              </div>
              )}
          <label className={s.formlabel}>Price</label>
          <input type="number" id="price" value={input.price} name= "price" className={s.forminput} placeholder="Price in US$" onChange={(e) => handleChange(e)}></input>
        </div>


        <div> 
        {errors.trademark && (
              <div className={s.error}>
                {errors.trademark} 
              </div>
              )}     
          <label className={s.formlabel}>Brand</label>
          <input type="text" id="brand" value={input.trademark} name= "trademark" className={s.forminput} placeholder="Brand" onChange={(e) => handleChange(e)}></input>
        </div>  

        <div>
        {errors.category && (
              <div className={s.error}>
                {errors.select} 
              </div>
              )}
          <label className={s.formlabel}>Category</label>
          <select className={s.forminput} id="category" value={input.category} name= "category" required onChange={(e) => handleSelect(e)}>

            <option value="select">Select category</option>
            
            <option value="Powerbank">Powerbank</option>
            <option value="wireless network card">wireless network card</option>
            <option value="videocard">videocard</option>
            <option value="Harddrive">Harddrive</option>
            <option value="Monitor">Monitor</option>
            <option value="Mouse pad">Mouse pad</option>
            <option value="coolers">coolers</option>
            <option value="processors">processors</option>
            <option value="mouse">mouse</option>
            <option value="motherboard">motherboard</option>
            <option value="memory RAM">memory RAM</option>
            <option value="Tower">Tower</option>
            <option value="SSD">SSD</option>
            <option value="GAMING CHAIR">GAMING CHAIR</option>
            <option value="keyboard">keyboard</option>
            <option value="Headset">Headset</option>
          </select>
        </div>


        <div>
            <div>
              <label className={s.formlabel}>Image</label>

              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
              {/* <button onClick={uploadImage}>Upload</button> */}
            </div>
          </div>



        <div>
        {errors.description && (
              <div className={s.errordescription}>
                {errors.description} 
              </div>
              )}
          <label className={s.formlabel}>Description</label>
          <textarea id="description" value={input.description} name= "description" className={s.formtextarea} placeholder="Description" onChange={(e) => handleChange(e)}></textarea>
        </div>


          
          
          <Button  type="submit" id="create" name= "create" className={s.btnsubmit} value="create" onClick={() => setModalShow(true)}>CREATE</Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
      />


        </form>

      </div>
      </Box>
    </Box>
    
  )

      }