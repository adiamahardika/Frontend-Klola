import React from 'react'
import { parseToRupiah } from "../helpers/index"
const CardProduct = ({ product, addCart }) => {
  const selectProduct = (event) => {
      event.preventDefault()
      addCart(product)
    }
  return (
      <div key={product.id}>
        <div className='card' style={{borderRadius:'20px'}}>
          <div className='view'>
            <img src={product.image} width={400} height={150} className='card-img-top' alt='...' style={{borderRadius:'20px'}}/>
            </div>
          <div className='card-body card-body-cascade'>
          <h8 className="pink-text"><i className="fas fa-utensils"></i> {product.category}</h8>
            <h4 className="card-title" style={{color:'#4285f4'}}><strong>{product.name}</strong></h4>
            <h5 className="pb-2"><strong>{parseToRupiah(product.price)}</strong></h5>
            <h6 className="pb-2">Stock: {product.quantity}</h6>
            <div style={{ float: 'right', marginTop: '-15px' }}>
              <button className='badge badge-pill btn btn-lg btn-primary ' onClick={selectProduct}>ADD</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CardProduct