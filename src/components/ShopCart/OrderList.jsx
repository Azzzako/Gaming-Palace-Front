import React from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { totalPayment } from '../../Redux/Actions/actions'
import './OrderList.css'




const OrderList = () => {

    const prodsPay = useSelector(state=> state.totalToPay);
    const dispatch = useDispatch();

  return (
    <div className='order-list'>

      {/* <div className="page-nav">
        <h1>Mi tienda</h1>
        <button className="button-checkout" onclick="showOrder()">Carrito</button>
      </div> */}

      {/* <div className="page-content"> */}
        
        {/* <div className="product-cards"></div> */}

        {/* <div className="order">
          <h1>Orden</h1>
          <h2 id="order-total">Total: $150</h2>
        </div> */}

        <div>
          <table className="order-table">
            <tr>
              <th>Detalle</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td>Pesas</td>
              <td>2</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Banco ajustable</td>
              <td>1</td>
              <td>100</td>
            </tr>
          </table>
        </div>

        <h1 className='direccion-envio'>Dirección de envío:</h1>

          <div className="order-shipping">

            <div className="form-group">
              <label for="name">Nombre completo:</label>
              <input type="text" name="name" id="name"/>
            </div>

            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" name="email" id="email"/>
            </div>

            <div className="form-group">
              <label for="phone">Teléfono:</label>
              <input type="text" name="phone" id="phone"/>
            </div>

            <div className="form-group">
              <label for="addressLine1">Dirección Linea 1:</label>
              <input type="text" name="addressLine1" id="addressLine1"/>
            </div>

            <div className="form-group">
              <label for="addressLine2">Dirección Linea 2:</label>
              <input type="text" name="addressLine2" id="addressLine2"/>
            </div>

            <div className="form-group">
              <label for="city">Ciudad:</label>
              <input type="text" name="city" id="city"/>
            </div>

            <div className="form-group">
              <label for="postalCode">Código postal:</label>
                <input type="text" name="postalCode" id="postalCode"/>
            </div>

            <div className="form-group">
              <label for="state">Provincia:</label>
              <input type="text" name="state" id="state"/>
            </div>

            <div className="form-group">
              <label for="country">País:</label>
              <input type="text" name="country" id="country"/>
            </div>
          </div>

          <div className="order-actions">
            <Link to="/shopcart"><p> <BsChevronDoubleLeft/> Volver </p></Link>
            <p onClick={()=>{dispatch(totalPayment(prodsPay))}}>Confirmar <BsChevronDoubleRight/></p>
          </div>
    </div>
  )
}

export default OrderList;