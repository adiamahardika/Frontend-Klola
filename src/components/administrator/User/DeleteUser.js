import React from 'react'
import { Modal, Button } from 'react-bootstrap';

import {connect} from 'react-redux'
import {deleteUser} from '../../redux/actions/user'
const DeleteUser = (props) => {
    const { user, show, onHide, dispatch } = props;

    const onCancelHandle = (event) => {
        event.preventDefault();
        onHide();
    }

    const onDeleteHandle = async (event) => {
        event.preventDefault();
        await dispatch(deleteUser(user.id));
        onHide();
    }

    return(
        <div>Delete</div>
        // <Modal show={show} onHide={onHide} variant="lg">
        //     <Modal.Header>
        //         <p>Are you sure want to delete this  user {user ? user.name : ""} ?</p>
        //     </Modal.Header>
        //     <Modal.Body align='right'>
        //         <Button variant="primary" size="md" onClick={onCancelHandle} style={{ marginRight: "10px" }}>Cancel</Button>
        //         <Button variant="outline-primary" size="md" onClick={onDeleteHandle}>Delete</Button>
        //     </Modal.Body>
        // </Modal>
    )

}
export default connect()(DeleteUser)