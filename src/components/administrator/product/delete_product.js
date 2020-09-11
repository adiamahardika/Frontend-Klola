import React from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/actions/product";
import { text, button } from "../../helpers/class_name.json";
import { routes } from "../../helpers/routes.json";
import { withRouter } from "react-router-dom";
const DeleteProduct = (props) => {
  const { product, dispatch, history } = props;
  const onDeleteHandle = async (event) => {
    event.preventDefault();
    await dispatch(deleteProduct(product.id));
    await history.push(routes.admin + routes.product);
  };
  return (
    <>
      <div
        className="modal fade"
        id="modalDeleteProduct"
        role="dialog"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className={text.h2}>Delete Product</div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className={text.p2}>
                Are you sure want to delete this product?
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className={`${button["outline-primary"]} ${text.p3}`}
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className={`${button.danger} ${text.p3}`}
                onClick={onDeleteHandle}
                data-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(connect()(DeleteProduct));
