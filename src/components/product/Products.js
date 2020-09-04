import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getAllProduct, modifyProduct } from '../redux/actions/product'
import { addCart } from '../redux/actions/cart'
import CardProduct from '../product/CardProduct'
import Sidenav from '../layout/Sidenav'
import Cart from './Cart'
import { withRouter } from "react-router"
class Products extends Component {
      state = {
          product: [],
          category: '',
          selectProduct: null
      }

  actSelectProduct = (products) => {
    this.setState({
        selectProduct: products
    })
  }

  getAllProduct () {
    this.props.dispatch(getAllProduct())
  }

  componentDidMount () {
   this.getAllProduct()
  }
  addCart=(data)=>{
    this.props.dispatch(addCart(data))
  }

  parseToRupiah(number) {
	var rupiah = '';		
	var numberrev = number.toString().split('').reverse().join('')
	for(var i = 0; i < numberrev.length; i++) if(i%3 === 0) rupiah += numberrev.substr(i,3)+'.'
	return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
  }
  paginationProduct = (event) => {
    this.props.history.push(`/adminproduct?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${this.state.name}&category=${this.props.category}&page=${event.target.id}`)

    this.props.dispatch(modifyProduct( this.state.sortBy, this.state.orderBy, this.state.name, this.state.category, event.target.id));
  }

  render () {
    const { products } = this.props
    const showProduct = products && products.map((item, index) => {
      return (
        <CardProduct product={item} key={index} selectProductItem={this.actSelectProduct} addCart= {this.addCart} parseToRupiah={this.parseToRupiah}/>
      )
    })
    return (
      <Fragment>
      <Sidenav filterProduct={this.filterProduct}/>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row' style={{display:'flex', overflowY:'scroll', height:'90vh'}}>
              {showProduct}
            </div>
          </div>
          <div className='col-lg-3' >
            <Cart parseToRupiah={this.parseToRupiah}/>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    pagination: state.products.pagination
  }
}

export default withRouter(connect(mapStateToProps)(Products))
