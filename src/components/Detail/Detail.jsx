import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'



export default function Detail({name, brand, image, price, description}) {
    
    return (
      <div className='bkg'>
      <div className='container align-items-center p-5 mt-5'>

        <div className="row detailsContainer d-flex flex-column align-items-center">

            <div className="card row detailsContainer d-flex flex-column align-items-center">
              


                <div className=" col-12 d-flex flex-sm-column flex-md-row align-items-center justify-content-center">
                    
                        
                  <div className="d-flex justify-content-center" style={{ width: '65%' }}>
                    <img src="https://www.venex.com.ar/products_images/1631561987_1630939756_1628167777_asus_x515_m515_product_photo__1g_slate_gray_08.png"  className="img w-75" alt="img" />
                  </div>
                       
                    
                  <div className="container-title">
                      <div className="container-6 p-3 d-flex flex-column align-items-start justify-content-around border-start border-dark border-opacity-10 my-5">
                            
                            <div className="d-flex flex-column align-items-start justify-content-around" >

                              <div className='d-grid gap-3 col-10 mx-auto'>
                                  <h6 className='text-muted'>ASUS {brand}</h6>
                                  <h2 className="d-flex flex-column align-items-start tx4 my-3">NOTEBOOK ASUS X515EA I3 1115G4 8GB SSD 256GB 15.6"{name}</h2>
                                    <h6 className='text-muted'>Description, description description description, Description, descriptiondescription description, descriptiondescription{description}</h6>
                              </div>

                            </div>

                            <div class=" form-outline item col-10 mx-auto " >
                           
                              <h3 className='my-3'>US$80{price} </h3>
                              <div className='d-flex gap-2 my-3'>

                                <input step="10" value="1" type="number" id="typeNumber" class="form-control form" style={{width: '5rem'}} />
                                <button class="button btn btn-secondary like">♥</button>

                              </div>

                            </div>

                            <div className='d-grid gap-3 col-10 mx-auto'>
                              <button type="button" class="btn btn-outline-secondary my-3">Shop Now</button>
                              <button type="submit" className="button btn btn-secondary">Add to cart</button>
                            </div>

                      </div>

                  </div>

                    
                </div>

                
            </div> 
            
        </div>

      </div>
      </div>
  
	);
};

