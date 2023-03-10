import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function validateForm(input){
    const error = {};
    if(!input.adress.length) error.adress = <span style={{color:"red"}}>Adress is required</span>;
    if(!input.city.length) error.city = <span style={{color:"red"}}>City is required</span>;
    if(!input.postalCode.length) error.postalCode = <span style={{color:"red"}}>Postal code is required</span>;
    
    return error;
};

const FormAdress = () => {

    const [input, setInput] = useState({
        adress: '',
        city: '',
        postalCode: '',
    });

const [error, setError] = useState({});


    function handleInputChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        setError(validateForm({
            ...input,
            [e.target.name]: e.target.value
        })
        )
    };

    function handleSubmit(){
      // e.preventDefault();
      if(!input.adress.length>0 && !input.city && !input.postalCode){
        return alert('Complete all fields');
        // setInput({
        //   adress: '',
        //   city: '',
        //   postalCode: '',
        // });
      }
      else window.location.pathname = "/inconstruction"
    };



  return (
    // <div style={{minHeight:"100vh", display:"flex", justifyContent: "center", color:"white"}}>FormAdress</div>
    <Form style={{minHeight:"100vh", color:"white", margin:"auto", width:"10%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control name="adress" value={input.adress} type="text" placeholder="" onChange={(e)=>handleInputChange(e)}/>
        {
          error.adress && <div><span>{error.adress}</span></div>
        }
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control name="city" value={input.city} type="text" placeholder="" onChange={(e)=>handleInputChange(e)}/>
        {
          error.city && <div><span>{error.city}</span></div>
        }
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Postal code</Form.Label>
        <Form.Control name="postalCode" value={input.postalCode} type="text" placeholder="" onChange={(e)=>handleInputChange(e)}/>
        {
          error.postalCode && <div><span>{error.postalCode}</span></div>
        }
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      {/* <Link to="inconstruction"></Link> */}
      <Button variant="primary"  onClick={()=>handleSubmit()}>Confirm</Button>
        
    </Form>
  )
};

export default FormAdress;