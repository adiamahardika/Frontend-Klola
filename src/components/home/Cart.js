import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {addCart, addQuantity, reduceQuantity, deleteCart, cancelCart} from '../redux/actions/cart'
import Checkout from '../order/Checkout'
import empty from '../../images/empty-cart.png'
import { parseToRupiah } from "../helpers/index"
class Cart extends Component {
    state ={
        show: false,
        count: 0,
        id: parseInt(localStorage.getItem('user-id')),
        name: localStorage.getItem('name')
    }
    addCart=(data)=>{
        this.props.dispatch(addCart(data))
    }
    addQuantity=(carts) => {
        if(carts.quantity > carts.qty){
          this.props.dispatch(addQuantity(carts.id))
         }
         else(
           alert('Stock unsufficient!')
         )
    }
    reduceQuantity=(id) => {
        this.props.dispatch(reduceQuantity(id))
    }
    deleteCart=(cart) => {
        this.props.dispatch(deleteCart(cart))
    }
    cancelCart=(data) => {
        this.setState({
            show: false
        })
        this.props.dispatch(cancelCart(data))
    }
    handleShow = () => {
        this.setState({
            show:true
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    
    render(){
        const {carts, total} = this.props
        return(
            <Fragment>
                {carts.length !== 0 ?
            <div style={{marginTop:'25px'}}>
                <div>
                {carts.map((cart) =>
                    <li class="media" style={{ marginBottom: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
                        <img src={cart.image} class="mr-3" alt="" style={{height:'64px', width:'64px', borderRadius:'12px 12px 12px 12px'}} />
                        <div class="media-body">
                        <h5 class="mt-0 mb-1"><strong>{cart.name}</strong></h5>
                        {parseToRupiah(cart.price)} 
                        <div className="flex-container" style={{display: 'flex', justifyContent : 'center', alignItems: 'baseline', flexWrap:'wrap'}}>
                        <button type="button" className='fa fa-fw fa-minus' style={{border: 'none', backgroundColor: 'transparent', color: '#e91e63'}} onClick={()=>(this.reduceQuantity(cart.id))} />
                        <div type="text" class="form-control" style={{width:'40px', display:'inline', backgroundColor:'transparent', border:'none'}} aria-describedby="basic-addon1" > {cart.qty} </div>
                        <button type="button" className='fa fa-fw fa-plus' style={{border: 'none', backgroundColor: 'transparent', color: '#e91e63'}} onClick={()=>(this.addQuantity(cart))}/>
                        <div>
                        <button type="button" className='fa fa-fw fa-trash' style={{border: 'none', backgroundColor: 'transparent', color: '#e91e63'}} onClick={()=>this.deleteCart(cart)}/>
                        </div>
                        </div>
                        </div>
                    </li> 
                )}
                </div>
                    <Row style={{ fontWeight: "bold" }}>
                    <Col sm={2} style={{ fontSize: "25px" }}>Total: </Col>
                    <Col sm={10} style={{ fontSize: "25px", textAlign:'right' }}>{parseToRupiah(total)}</Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign:'center'}}><button type="button" class="btn btn-sm btn-outline" style={{borderRadius:25, fontSize:'10px', color:'#4285f4', border: '1px solid #4285f4'}} onClick={this.cancelCart}>Cancel</button></Col>
                        <Col style={{textAlign:'center'}}><button type="button" class="btn btn-sm" style={{borderRadius:25, fontSize:'10px', color:'white', backgroundColor:'#4285f4', border: 'none'}} onClick={this.handleShow}>Checkout</button></Col>
                    </Row>
                    <Checkout show={this.state.show} onHide={this.handleClose}/>
                </div>
            :
            <div style={{textAlign:'center', marginTop:'100px'}}>
                <img src={empty} style={{maxWidth: 250}} alt='empty-cart'/>
                <h4>Your Cart is Empty</h4>
            </div>
            }
        </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
    carts: state.carts.carts,
    total: state.carts.total
    }
}
export default connect(mapStateToProps)(Cart)