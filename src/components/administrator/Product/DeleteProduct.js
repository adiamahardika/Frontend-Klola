import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/actions/product";

const DeleteProduct = (props) => {
  const { product, show, onHide, dispatch } = props;

  const onCancelDelete = (event) => {
    event.preventDefault();
    onHide();
  };
  const onDeleteProduct = async (event) => {
    event.preventDefault();
    await dispatch(deleteProduct(product.id));
    await onHide();
  };
  return (
    <Modal show={show} onHide={onHide} variant="lg">
      <Modal.Body>
        <p>
          Are you sure want to delete this {product ? product.name : ""} product
          ?
        </p>
      </Modal.Body>
      <Modal.Body align="right">
        <Button
          style={{ background: "#4285f4", marginRight: "10px" }}
          size="sm"
          onClick={onCancelDelete}
        >
          Cancel
        </Button>
        <Button variant="light" size="sm" onClick={onDeleteProduct}>
          Delete
        </Button>
      </Modal.Body>
    </Modal>
  );
};
export default connect()(DeleteProduct);
