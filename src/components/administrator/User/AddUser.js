import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { postUser } from "../../redux/actions/user";
import { withRouter } from "react-router-dom";
class AddUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    status: 0,
  };

  onCreateUser = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  postUser = async (event) => {
    event.preventDefault();
    await this.props.dispatch(postUser(this.state));
    await this.props.onHide();
    await this.props.history.push("/adminuser");
  };

  render() {
    const { show, onHide } = this.props;
    return (
      <div>Add</div>
      // <Modal show={show} onHide={onHide}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>ADD USER</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>
      //     <Form onSubmit={this.postUser}>
      //       <Form.Group>
      //         <Form.Label>User Name </Form.Label>
      //         <Form.Control
      //           type="text"
      //           placeholder="Enter Name..."
      //           name="name"
      //           onChange={this.onCreateUser}
      //           required
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>Email </Form.Label>
      //         <Form.Control
      //           type="text"
      //           placeholder="Enter Email..."
      //           name="email"
      //           onChange={this.onCreateUser}
      //           required
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>Password </Form.Label>
      //         <Form.Control
      //           type="password"
      //           placeholder="Enter Password..."
      //           name="password"
      //           onChange={this.onCreateUser}
      //           required
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>Status</Form.Label>
      //         <Form.Control
      //           type="text"
      //           placeholder="Enter Status..."
      //           name="status"
      //           onChange={this.onCreateUser}
      //           as="select"
      //           required
      //         >
      //           <option selected value={0} disabled>
      //             Choose Status
      //           </option>
      //           <option value={1}>Administrator</option>
      //           <option value={2}>Cashier</option>
      //         </Form.Control>
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

export default withRouter(connect()(AddUser));
