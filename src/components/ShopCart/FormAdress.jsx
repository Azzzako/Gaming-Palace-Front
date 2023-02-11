import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalPayment } from '../../Redux/Actions/actions';
import './OrderList.css'

function validateForm(input){
    const error = {};
    if(!input.adress.length) error.adress = <span style={{color:"red"}}>Address is required</span>;
    if(!input.city.length) error.city = <span style={{color:"red"}}>City is required</span>;
    if(!input.postalCode.length) error.postalCode = <span style={{color:"red"}}>Postal code is required</span>;
    
    return error;
};

const FormAdress = () => {

  const dispatch = useDispatch();
  const prodsToPay = useSelector(state=> state.totalToPay)
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
      if(!input.adress.length>0 || !input.city || !input.postalCode){
        return alert('Complete all fields');
        // setInput({
        //   adress: '',
        //   city: '',
        //   postalCode: '',
        // });
      }
      else dispatch(totalPayment(prodsToPay))
    };

console.log(prodsToPay, "payyyyy")

  return (
    // <div style={{minHeight:"100vh", display:"flex", justifyContent: "center", color:"white"}}>FormAdress</div>
    <div>
    <Form style={{ color:"white", margin:"auto", width:"10%"}}>
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
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Postal code</Form.Label>
        <Form.Control name="postalCode" value={input.postalCode} type="text" placeholder="" onChange={(e)=>handleInputChange(e)}/>
        {
          error.postalCode && <div><span>{error.postalCode}</span></div>
        }
      </Form.Group>

    </Form>
      <div className="order-actions">
            <Link to="/shopcart"><p> <BsChevronDoubleLeft/> Backdown </p></Link>
            <p onClick={()=>{handleSubmit()}}>Confirm <BsChevronDoubleRight/></p>
      {/* <Button variant="primary"  onClick={()=>handleSubmit()}>Confirm</Button> */}
      </div> 
    </div>
  )
};

export default FormAdress;