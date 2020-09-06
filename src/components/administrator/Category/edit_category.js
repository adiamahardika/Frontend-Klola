import React, { Component } from "react";
import { connect } from "react-redux";
import { patchCategory } from "../../redux/actions/category";
import { text, button } from "../../helpers/class_name.json";
class EditCategory extends Component {
  state = {
    id: "",
    name: "",
  };
  componentWillReceiveProps({ category }) {
    this.setState({
      id: category.id,
      name: category.name,
    });
  }
  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  patchCategory = async (event) => {
    event.preventDefault();
    const id = this.state.id;
    const data = {
      name: this.state.name,
    };
    await this.props.dispatch(patchCategory(data, id));
  };

  render() {
    const SubmitButton = () => {
      if (this.state.name !== "") {
        return (
          <button
            type="submit"
            className={`${button.primary} ${text.p3}`}
            onClick={this.patchCategory}
            data-dismiss="modal"
          >
            Submit
          </button>
        );
      } else {
        return (
          <button
            type="submit"
            className={`${button.primary} btn ${text.p3}`}
            disabled
          >
            Submit
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalEditCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Edit Category</div>
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
                <form className="needs-validation" noValidate>
                  <div className="form-group">
                    <div className={text.p1}>Category Name :</div>
                    <input
                      value={this.state.name}
                      name="name"
                      type="text"
                      className={`${text.p2} form-control`}
                      onChange={this.onChangeValue}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-dismiss="modal"
                  className={`${button["outline-primary"]} ${text.p3}`}
                >
                  Cancel
                </button>
                <SubmitButton />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(EditCategory);
