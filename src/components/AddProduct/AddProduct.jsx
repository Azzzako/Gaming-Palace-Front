import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { getAllProducts, postProduct} from '../../Redux/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';


const validator = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = 'Please enter a name';
    }
    if (!input.difficulty) {
      errors.difficulty = 'Please enter a difficulty level';
    }
    if (input.duration < 1) {
      errors.duration = 'Please enter a duration higher';
    }
    if (!input.season) {
      errors.season = 'Please select a season';
    }
    return errors;
  }; 

const AddProduct= () => {

  const dispatch= useDispatch();

  const product = useSelector((e) => e.allProducts);

  

  const [errors, setErrors] = useState({});

  // const [showModal, setShowModal] = useState(false);
  
  const [input, setInput] = useState({
		name: '',
		price: '',
		description: '',
		trademark: '',
		products: [],
	});

  useEffect(() => {
		dispatch(getAllProducts());
	
	}, [dispatch]);


  const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postProduct(input));
		setInput({
			name: '',
			difficulty: '',
			duration: '',
			season: '',
			countries: [],
		});
		// setShowModal(true);
	};

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

  const handleSelect = (e) => {
		setInput({
			...input,
			allProducts: [...input.allProducts, e.target.value],
		});
	};
	const handleCheck = (e) => {
		setInput({
			...input,
			category: e.target.value,
		});
		setErrors(
			validator({
				...input,
				category: e.target.value,
			})
		);
	};
  return (
    <div>
    <div class="container align-items-center p-5 mt-5 bg-light">
          
    <section class="panel panel-default">
          <div class="panel-heading "> 
            <h3 class="panel-title text-dark">Product Creation Panel</h3> 
          </div> 

          <hr class="text-dark"></hr>

          <div class="panel-body">

            <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                {errors.name && (
                <div>
                  {errors.name} 
                </div>
						)}



                <div class="form-group text-dark"> 
                        
                  <label for="name" class="col-sm-3 control-label my-2">Insert name</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" name="name" id="name" placeholder="product name"></input>
                  </div>
                </div> 
                </div> 



                <div class="form-group my-3 text-dark">
                  <label for="tech" class="col-sm-3 control-label my-2">Category</label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" name="qty" id="qty" placeholder="category" onChange={(e) => handleChange(e)}>
                    <option value="Select">Select a category</option>
                    
                    {/* {product.map((i) => (
							      <option value={i.id}>{i.name}</option>
							      ))} */}

                    </input>

                  </div>
                </div> 



                <div class="form-group my-3">
                  <label for="qty" class="col-sm-3 control-label my-2 text-dark">Insert brand</label>
                  <div class="col-sm-3">
                <input type="text" class="form-control" name="qty" id="qty" placeholder="brand" onChange={(e) => handleChange(e)}></input>
                  </div>
                </div>



                <div class="form-group my-3">
                  <label for="name" class="col-sm-3 control-label my-2 text-dark">Price</label>
                  <div class="col-sm-9">
                    <input type="number" class="form-control" name="price" id="price" placeholder="US$" onChange={(e) => handleChange(e)}></input>
                  </div>
                </div>



                <div class="form-group my-3">
                  <label for="about" class="col-sm-3 control-label my-2 text-dark">Description</label>
                  <div class="col-sm-9">
                    <textarea class="form-control" id="description" placeholder="Insert a product description" onChange={(e) => handleChange(e)}></textarea>
                  </div>

                </div> 




                <div class="form-group my-3">
                  <label for="name" class="col-sm-3 control-label my-2 text-dark">Insert Image</label>
                  <div class="col-sm-3">
                  <label class="control-label small text-dark" for="file_img">Product image (jpg/png):</label> 
                    <input type="file" name="file_img" class="my-2 text-dark"></input>
                  </div>
                </div> 
               



                <hr class="text-dark"></hr>
                <div class="d-flex form-group flex-row-reverse my-3">
                  <div class="d-flex col-sm-offset-3 col-sm-9 flex-row-reverse">
                    <button type="submit" class="button btn btn-secondary" style={{width: '20rem'}}>Create</button>
                  </div>
                </div> 
            </form>
    
           </div>
      </section>
    </div> 
    </div>
  )
};

export default AddProduct