import React, {Component} from 'react'
import { Modal, Button, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import {checkout} from '../redux/actions/order'
import { cancelCart } from '../redux/actions/cart'
import './order.css'
class Checkout extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            name: localStorage.getItem('name'),
            id: parseInt(localStorage.getItem('user-id')),
        }
    }

    parseToRupiah(number) {
    var rupiah = '';		
    var numberrev = number.toString().split('').reverse().join('')
    for(var i = 0; i < numberrev.length; i++) if(i%3 === 0) rupiah += numberrev.substr(i,3)+'.'
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async checkout(cart) {
        const data = {
            user: this.state.id,
            product: this.props.carts,
            total: this.props.total
        }
        await this.props.dispatch(checkout(data))
        await this.props.dispatch(cancelCart(cart))
        this.props.onHide()
    }

    render(){
        const {carts, total} = this.props
        return(
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Row>
                            <Col>Name</Col>
                            <Col style={{textAlign:'center'}}>Quantity</Col>
                            <Col>Price</Col>
                        </Row>
                    {carts.map(cart => (
                        <Row>
                            <Col>{cart.name}</Col>
                            <Col style={{textAlign:'center'}}>{cart.qty}</Col>
                            <Col>{this.parseToRupiah(cart.price * cart.qty)}</Col>
                        </Row>
                    ))}
                    <Row>Total : {this.parseToRupiah(total)}</Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>Cashier: {this.state.name}</Row>
                    <Button onClick={()=> this.checkout(carts)}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        carts: state.carts.carts,
    total: state.carts.total
    }
}
export default connect(mapStateToProps)(Checkout)