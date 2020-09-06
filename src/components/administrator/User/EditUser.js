import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { patchUser } from "../../redux/actions/user";
import './User.css'
class EditUser extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    status: "",
  };

  componentWillReceiveProps({ user }) {
    this.onSetValue(user);
  }

  onSetValue = (user) => {
    this.setState({
      id: user.id,
      name: user.name,
      email: user.email
    });
  };

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  patchUser = async (event) => {
    event.preventDefault();
    const id = this.props.user.id;
    const data = {
      name: this.state.name,
      email: this.state.email,
      status: this.state.status,
    };
    await this.props.dispatch(patchUser(data, id));
    await this.props.onHide();
  };

  render() {
    const { show, onHide } = this.props;
    return (
      <div>Delete</div>
      // <Modal show={show} onHide={onHide}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>EDIT USER</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>
      //     <Form onSubmit={this.patchUser}>
      //       <Form.Group>
      //         <Form.Label>NAME</Form.Label>
      //         <Form.Control
      //           type="text"
      //           placeholder="Insert Name"
      //           name="name"
      //           onChange={this.onChangeValue}
      //           value={this.state.name}
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>EMAIL</Form.Label>
      //         <Form.Control
      //           type="text"
      //           placeholder="Insert Email"
      //           name="email"
      //           onChange={this.onChangeValue}
      //           value={this.state.email}
      //           required
      //         />
      //       </Form.Group>
      //       <Form.Group>
      //         <Form.Label>STATUS</Form.Label>
      //         <Form.Control
      //           type="text"
      //           name="status"
      //           defaultValue={"DEFAULT"}
      //           onChange={this.onChangeValue}
      //           value={this.state.status}
      //           as="select"
      //           required
      //         >
      //           <option value="DEFAULT">
      //             Choose..
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
export default connect()(EditUser);
