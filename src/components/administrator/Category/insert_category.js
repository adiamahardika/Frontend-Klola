import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { text, button } from "../../helpers/class_name.json";
import { postCategory } from "../../redux/actions/category";
import { routes } from "../../helpers/routes.json";
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
    this.props.history.push(routes.admin + routes.category);
  };

  render() {
    const SubmitButton = () => {
      if (this.state.name !== "") {
        return (
          <button
            type="submit"
            className={`${button.primary} ${text.p3}`}
            onClick={this.postCategory}
            data-dismiss="modal"
          >
            Submit
          </button>
        );
      } else {
        return (
          <button
            type="submit"
            className={`${button.primary} ${text.p3} btn`}
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
          id="modalInsertCategory"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Insert Category</div>
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
                      name="name"
                      type="text"
                      className={`${text.p2} form-control`}
                      onChange={this.onCreateCategory}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-dismiss="modal"
                  className={`${text.p3} ${button["outline-primary"]}`}
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
