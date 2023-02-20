import { ButtonBase } from '@mui/material'
import React from 'react'
import { BsCashCoin } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { sendNMailer } from '../../Redux/Actions/actions'
import FormAdress from './FormAdress'
import './OrderList.css'




const OrderList = () => {

  const totalBuy = useSelector(state => state.totalBuy);
  const totalBuyOk = totalBuy.length>1 ? totalBuy.reduce((acc, curr)=> acc+curr) : totalBuy;
    const prodsPay = useSelector(state=> state.totalToPay);
console.log(prodsPay, "payyyy")

const dispatch = useDispatch();

const sendEmail = () => {
  dispatch(sendNMailer({destiny: "eliaspiolatto77@hotmail.com", prodsPay: prodsPay}))
}




  return (
    <div className='order-list'>

      <div >
        <h1 className="page-nav">MY ORDER</h1>

        <ButtonBase onClick={()=> sendEmail()}>Enviar orden al email</ButtonBase>

        <p className='in-cart'>In cart: US$ {totalBuyOk}<BsCashCoin color='green'/></p>
      </div>

      {/* <div className="page-content"> */}
        
        {/* <div className="product-cards"></div> */}

        {/* <div className="order">
          <h1>Orden</h1>
          <h2 >Total: $150</h2>
        </div> */}

        <div>
          <table className="order-table">
            <tbody>
            <tr>
              <th>Detail</th>
              <th>Quantity</th>
              <th>Unit price</th>
            </tr>
            {
              prodsPay?.map(prod=>{
                return <tr key={prod.name}>
                <td>{prod.name}</td>
                <td>{prod.quantity}</td>
                <td>{prod.price}</td>
              </tr>
              })
            }
            </tbody>
          </table>
        </div>

        <h1 className='direccion-envio'>Shipping Address:</h1>
          
          <FormAdress/>
          {/* <div className="order-shipping">

            <div className="form-group">
              <label for="name">Nombre completo:</label>
              <input type="text" name="name" value="name"/>
            </div>

            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" name="email" value="email"/>
            </div>

            <div className="form-group">
              <label for="phone">Teléfono:</label>
              <input type="text" name="phone" value="phone"/>
            </div>

            <div className="form-group">
              <label for="addressLine1">Dirección Linea 1:</label>
              <input type="text" name="addressLine1" value="addressLine1"/>
            </div>

            <div className="form-group">
              <label for="addressLine2">Dirección Linea 2:</label>
              <input type="text" name="addressLine2" value="addressLine2"/>
            </div>

            <div className="form-group">
              <label for="city">Ciudad:</label>
              <input type="text" name="city" value="city"/>
            </div>

            <div className="form-group">
              <label for="postalCode">Código postal:</label>
                <input type="text" name="postalCode" value="postalCode"/>
            </div>

            <div className="form-group">
              <label for="state">Provincia:</label>
              <input type="text" name="state" value="state"/>
            </div>

            <div className="form-group">
              <label for="country">País:</label>
              <input type="text" name="country" value="country"/>
            </div>
          </div> */}

          {/* <div className="order-actions">
            <Link to="/shopcart"><p> <BsChevronDoubleLeft/> Backdown </p></Link> */}
            {/* <p onClick={()=>{dispatch(totalPayment(prodsPay))}}>Confirmar <BsChevronDoubleRight/></p> */}
          {/* </div> */}
    </div>
  )
}

export default OrderList;