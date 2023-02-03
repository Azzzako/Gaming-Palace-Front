import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const AddProduct= () => {
  return (
    <div>
    <div class="container align-items-center p-5 mt-5 bg-light">
          
    <section class="panel panel-default">
          <div class="panel-heading "> 
            <h3 class="panel-title text-dark">Product Creation Panel</h3> 
          </div> 

          <hr class="text-dark"></hr>

          <div class="panel-body">

            <form >

                <div class="form-group text-dark"> 
                  <label for="name" class="col-sm-3 control-label my-2">Insert name</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" name="name" id="name" placeholder="product name"></input>
                  </div>
                </div> 

                <div class="form-group my-3 text-dark">
                  <label for="tech" class="col-sm-3 control-label my-2">Category</label>
                  <div class="col-sm-3">
                    <select class="form-control">
                    <option value="Select">Select a category</option>
                    <option value="Accesories">Accesories</option>
                    <option value="Chairs">Chairs</option>
                    <option value="Coolers">Coolers</option>
                    <option value="Desk">Desk</option>
                    <option value="Headset">Headset</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Motherboard">Motherboard</option>
                    <option value="Processor">Processor</option>
                    <option value="RAM Mmemory">RAM Memory</option>
                    <option value="SSD">SSD</option>
                    <option value="Tower">Tower</option>
                    </select>
                  </div>
                </div> 

                <div class="form-group my-3">
                  <label for="qty" class="col-sm-3 control-label my-2 text-dark">Insert brand</label>
                  <div class="col-sm-3">
                <input type="text" class="form-control" name="qty" id="qty" placeholder="brand"></input>
                  </div>
                </div>

                <div class="form-group my-3">
                  <label for="name" class="col-sm-3 control-label my-2 text-dark">Price</label>
                  <div class="col-sm-9">
                    <input type="number" class="form-control" name="name" id="name" placeholder="US$"></input>
                  </div>
                </div>

                <div class="form-group my-3">
                  <label for="about" class="col-sm-3 control-label my-2 text-dark">Description</label>
                  <div class="col-sm-9">
                    <textarea class="form-control" id="description" placeholder="Insert a product description"></textarea>
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