import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getAllCategories, postNewProduct } from '../../Redux/Actions/actions';
import "./AddProduct.css";


export default function AddProduct() {


  const dispatch = useDispatch();

  const p = useSelector((state) => state.allProducts)



  const [input, setInput] = useState({
		name: '',
    trademark:'', 
    price: '',
    description:'',
    category: [],
	}); 

  

  const handleChange = (e) => {   //////////////hadle para input text
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		// setErrors(
		// 	validator({
		// 		...input,
		// 		[e.target.name]: e.target.value,
		// 	})
		// );
	};

  const handleCheck= (e) => {
		setInput({
			...input,
			category: e.target.value,
		});
		// setErrors(
		// 	validator({
		// 		...input,
		// 		season: e.target.value,
		// 	})
		// );
	};

	// const handleSelect = (e) => {              
	// 	setInput({
	// 		...input,
	// 		allCategories: [...input.allCategories, e.target.value],
	// 	});
	// };


	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postNewProduct(input));
		setInput({
      name: '',
      trademark:'', 
      price: '',
      description:'',
      category: [],
		});
		// setShowModal(true);
	};

  
  return (
    <div className="container">

      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-header">
          <h1 className="form-title">Create your product</h1>
        </div>

        <label className="form-label">Name</label>
        <input type="text" id="name" className="form-input" placeholder="Name of product" onChange={(e) => handleChange(e)}></input>

        <label className="form-label">Price</label>
        <input type="number" id="price" className="form-input" placeholder="Price in US$" onChange={(e) => handleChange(e)}></input>

        <label className="form-label">Brand</label>
        <input type="text" id="brand" className="form-input" placeholder="Brand" onChange={(e) => handleChange(e)}></input>

        <label className="form-label">Category</label>
        <select className="form-input" id="category" required onChange={(e) => handleCheck(e)}>

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

        <label className="form-label">Description</label>
        <textarea id="description" className="form-textarea" placeholder="Description" onChange={(e) => handleChange(e)}></textarea>

        <label className="form-label">Upload image</label>
        <input type="file" id="img" className="form-input"></input>

        <input type="submit" className="btn-submit" value="create"></input>
        
      </form>
    </div>
    
  )
}