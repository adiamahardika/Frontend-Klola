import React from "react";
import { connect } from "react-redux";
import { deleteCategory } from "../../redux/actions/category";
import { text, button } from "../../helpers/class_name.json"
const DeleteCategory = (props) => {
  const { category, dispatch } = props;
  const onDeleteHandle = async (event) => {
    event.preventDefault();
    await dispatch(deleteCategory(category.id));
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalDeleteCategory"
        role="dialog"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className={text.h2}>Delete Category</div>
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
              <div className={text.p2}>Are you sure want to delete this category?</div>
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

export default connect()(DeleteCategory);
