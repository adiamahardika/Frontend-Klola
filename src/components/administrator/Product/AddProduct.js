import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { postProduct } from '../../redux/actions/product'
import { getAllCategory } from '../../redux/actions/category'
import {withRouter} from 'react-router-dom'
class AddProduct extends Component {
    state = {
        name:'',
        category: 0,
        description:'',
        price: 0,
        quantity: 0,
        image:''
    } 

    onCreateProduct = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeImage = event => {
        const image = event.target.files[0]
        if (image.size > 1024 * 1024 * 3)
        return alert('Cannot upload image with size more than 3MB')
        const imageArray = image.name.split(".");
        const imageExtension = imageArray[imageArray.length - 1].toLowerCase();
        if (
        imageExtension !== "png" &&
        imageExtension !== "jpg" &&
        imageExtension !== "jpeg" &&
        imageExtension !== "gif"
        )
        return alert("Only can upload image!!")
        this.setState({
            image:image
        })
    }

    postProduct = async (event) => {
        event.preventDefault();
        let data = new FormData();
        
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        data.append("price", this.state.price);
        data.append("quantity", this.state.quantity);
        data.append("category", this.state.category);

        await this.props.dispatch(postProduct(data));
        this.props.onHide();
        this.props.history.push('/adminproduct')
    }

    componentDidMount () {
        this.props.dispatch(getAllCategory())
    }
    render() {
        const { show, onHide, categories } = this.props
        return (
            <div>Add</div>
            // <Modal show={show} onHide={onHide}>
            //     <Modal.Header closeButton>
            //         <Modal.Title>ADD PRODUCT</Modal.Title>
            //     </Modal.Header>
            //     <Modal.Body>
            //         <Form onSubmit={this.postProduct} encType="multipart/form-data">
            //             <Form.Group>
            //                 <Form.Label>Product Name </Form.Label>
            //                 <Form.Control type="text" placeholder="Enter Product..." name="name" onChange={this.onCreateProduct} required/>
            //             </Form.Group>
            //             <Form.Group>
            //                 <Form.Label>Description </Form.Label>
            //                 <Form.Control type="text" placeholder="Enter Description..." name="description" onChange={this.onCreateProduct} required/>
            //             </Form.Group>
            //             <Form.Group>
            //                 <Form.Label>Price </Form.Label>
            //                 <Form.Control type="number" placeholder="Enter Price..." name="price" onChange={this.onCreateProduct} required/>
            //             </Form.Group>
            //             <Form.Group>
            //                 <Form.Label>Quantity</Form.Label>
            //                 <Form.Control type="number" placeholder="Enter Quantity..." name="quantity" onChange={this.onCreateProduct} required/>
            //             </Form.Group>
            //             <Form.Group>
            //                 <Form.Label>Category</Form.Label>
            //                 <Form.Control type="text" placeholder="Enter Category..."  name="category" onChange={this.onCreateProduct} as="select" required>
            //                 <option selected value={0} disabled>Choose Category</option>

            //                 {categories.map((category,index) => 
            //                 <option key={index} value={category.id}>{category.name}</option>
            //                 )}
                           
            //                 </Form.Control>
            //             </Form.Group>
            //             <Form.Group>
            //                 <Form.Label>IMAGE</Form.Label>
            //                 <Form.Control type="file" name="image" onChange={this.onChangeImage} required/>
            //             </Form.Group>
            //             <Button variant="primary" type="submit">
            //                 SUBMIT
            //             </Button>
            //         </Form>
            //     </Modal.Body>
            // </Modal>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.category.categories
    }
}


export default withRouter(connect(mapStateToProps)(AddProduct));