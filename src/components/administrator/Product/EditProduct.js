import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { patchProduct } from "../../redux/actions/product";
import { withRouter } from "react-router-dom";

class EditProduct extends Component {
  state = {
    id: "",
    name: "",
    description: "",
    image: "",
    price: "",
    quantity: "",
    category: "",
  };

  componentWillReceiveProps({ product }) {
    this.onSetValue(product);
  }

  onSetValue = (product) => {
    this.setState({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    });
  };

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeImage = (event) => {
    this.setState({
      image: event.target.files[0],
    });
  };

  patchProduct = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("description", this.state.description);
    data.append("image", this.state.image);
    data.append("price", this.state.price);
    data.append("quantity", this.state.quantity);
    data.append("category", this.state.category);
    if (this.state.image === "") {
      data.delete("image");
      const id = this.state.id;
      await this.props.dispatch(patchProduct(id, data));
      await this.props.onHide();
      this.props.history.push("/adminproduct");
    } else {
      const id = this.state.id;
      await this.props.dispatch(patchProduct(id, data));
      await this.props.onHide();
      this.props.history.push("/adminproduct");
    }
  };
  render() {
    const { show, onHide, categories } = this.props;
    return (
      <div>Edit</div>
      // <Modal show={show} onHide={onHide}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>Edit Product</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>
      //     <Form onSubmit={this.patchProduct} encType="multipart/form-data">
      //       <Form.Group>
      //         <Form.Label>NAME</Form.Label>
      //         <Form.Control
      //           type="text"
      //           name="name"
      //           onChange={this.onChangeValue}
      //           value={this.state.name}
      //           required
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>DESCRIPTION</Form.Label>
      //         <Form.Control
      //           type="text"
      //           name="description"
      //           onChange={this.onChangeValue}
      //           value={this.state.description}
      //           required
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>PRICE</Form.Label>
      //         <Form.Control
      //           type="number"
      //           name="price"
      //           onChange={this.onChangeValue}
      //           value={this.state.price}
      //           required
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>STOCK</Form.Label>
      //         <Form.Control
      //           type="number"
      //           name="quantity"
      //           onChange={this.onChangeValue}
      //           value={this.state.quantity}
      //           required
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>CATEGORY</Form.Label>
      //         <Form.Control
      //           type="text"
      //           placeholder="Enter Category"
      //           defaultValue={"DEFAULT"}
      //           name="category"
      //           onChange={this.onChangeValue}
      //           value={this.state.category}
      //           as="select"
      //         >
      //           <option value="DEFAULT" disabled>
      //             Choose..
      //           </option>
      //           {categories.map((category, index) => (
      //             <option key={index} value={category.id}>
      //               {category.name}
      //             </option>
      //           ))}
      //         </Form.Control>
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>IMAGE</Form.Label>
      //         <Form.Control
      //           type="file"
      //           name="image"
      //           onChange={this.onChangeImage}
      //         />
      //       </Form.Group>
      //       <Button variant="primary" type="submit">
      //         SUBMIT
      //       </Button>
      //     </Form>
      //   </Modal.Body>
      // </Modal>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  };
};
export default withRouter(connect(mapStateToProps)(EditProduct));
