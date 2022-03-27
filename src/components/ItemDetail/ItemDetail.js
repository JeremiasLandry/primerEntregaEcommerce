import React from 'react'
import {useNavigate } from 'react-router-dom';
import ItemDetailStyle from './ItemDetail.css'

const ItemDetail = ({productDetail}) => {
  const {id, title, price, pictureurl,stock} = productDetail;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <div style={{margin:50 + 'px'}}>
        <h2>{title}</h2>
        <div className="d-flex">
          <img style={{maxWidth:250 + 'px'}} src={pictureurl} alt={title}/>
          <div className="d-flex flex-column">
            <p style={{margin:20 + 'px',fontSize:50 + 'px'}}>${price}</p>
            <span className="stockInfo">Stock: {stock}</span>
            <button onClick={handleNavigate} type="button" className="getBack-btn">Volver</button>
          </div>
        </div>

    </div>
  )
}

export default ItemDetail