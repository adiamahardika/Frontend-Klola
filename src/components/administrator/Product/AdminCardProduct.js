import React, { Fragment } from 'react'
import './AdminProduct.css'
const AdminCardProduct = ({product, onSelectProductDelete, onSelectProductEdit, parseToRupiah}) => {
  const onClickDelete = (event) => {
    event.preventDefault()
    onSelectProductDelete(product)
  }

  const onClickEdit = (event) => {
    event.preventDefault()
    onSelectProductEdit(product)
  }

  return(
    <Fragment>
      <tr>
      <td className='manageProduct'>
        <button type="button" className="btn btn-md btn-outline-delete" data-toggle='modal' data-target='#deleteModal' onClick={onClickDelete} data-dismiss='modal'>Delete</button>
        <button type="button" className="btn btn-md btn-edit" data-toggle='modal' data-target='#editModal' onClick={onClickEdit}>Edit</button>
    </td>
    <td className='itemProduct'>{product.id}</td>
    <td className='itemProduct'>{product.name}</td>
    <td className='descProduct'>{product.description}</td>
    <td className='itemProduct'><img src={product.image}alt={product.image} style={{ maxHeight: 50 }}/></td>
    <td className='itemProduct'>{product.category}</td>
    <td className='itemProduct'>{product.quantity}</td>
    <td className='itemProduct'>{parseToRupiah(product.price)}</td>
    <td className='descProduct'>{product.date_created}</td>
    <td className='descProduct'>{product.date_updated}</td>
    </tr>
    </Fragment>
  )
}
export default AdminCardProduct