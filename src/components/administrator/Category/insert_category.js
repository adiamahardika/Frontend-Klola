import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { postCategory } from "../../redux/actions/category";
class InsertCategory extends Component {
  state = {
    name: "",
  };

  onCreateCategory = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  postCategory = async (event) => {
    event.preventDefault();
    await this.props.dispatch(postCategory(this.state));
    this.props.history.push("/admin/category");
  };

  render() {
    const SubmitButton = () => {
      if (this.state.name !== "") {
        return (
          <button
            type="submit"
            className="button-primary"
            onClick={this.postCategory}
            data-dismiss="modal"
          >
            Submit
          </button>
        );
      } else {
        return (
          <button type="submit" className="btn button-primary" disabled>
            Submit
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalInsertCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Insert Category</h5>
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
                    <div>
                      <label>Category Name:</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control paragraph-2"
                        onChange={this.onCreateCategory}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-dismiss="modal"
                  className="button-outline-primary"
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

export default withRouter(connect()(InsertCategory));
