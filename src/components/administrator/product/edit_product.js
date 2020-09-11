import React, { Component } from "react";
import { connect } from "react-redux";
import { patchProduct } from "../../redux/actions/product";
import { withRouter } from "react-router";
import { text, button } from "../../helpers/class_name.json";
import { routes } from "../../helpers/routes.json";
import { getAllCategory } from "../../redux/actions/category";
class EditProduct extends Component {
  state = {
    id: "",
    name: "",
    description: "",
    image: "",
    price: 0,
    quantity: 0,
    category: 0,
  };

  componentWillReceiveProps({ product }) {
    this.setState({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
    });
  }
  componentDidMount() {
    this.props.dispatch(getAllCategory());
  }
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
      this.props.history.push(routes.admin + routes.product);
    } else {
      const id = this.state.id;
      await this.props.dispatch(patchProduct(id, data));
      this.props.history.push(routes.admin + routes.product);
    }
  };
  render() {
    console.log(this.state)
    const { categories } = this.props;
    const SubmitButton = () => {
      if (
        Object.values(this.state).every(
          (values) => values !== "" && values !== null
        )
      ) {
        return (
          <button
            type="submit"
            className={`${button.primary} ${text.p3}`}
            onClick={this.patchProduct}
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
          id="modalEditProduct"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Edit Product</div>
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
                    <div className={text.p1}>Name :</div>
                    <input
                      value={this.state.name}
                      name="name"
                      type="text"
                      className={`${text.p2} form-control`}
                      onChange={this.onChangeValue}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className={text.p1}>Description :</div>
                    <input
                      value={this.state.description}
                      name="description"
                      type="text"
                      className={`${text.p2} form-control`}
                      onChange={this.onChangeValue}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className={text.p1}>Image :</div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={this.onChangeImage}
                      className={`${text.p2} form-control`}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className={text.p1}>Price :</div>
                    <input
                      value={this.state.price}
                      name="price"
                      type="number"
                      className={`${text.p2} form-control`}
                      onChange={this.onChangeValue}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className={text.p1}>Quantity :</div>
                    <input
                      value={this.state.quantity}
                      name="quantity"
                      type="number"
                      className={`${text.p2} form-control`}
                      onChange={this.onChangeValue}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className={text.p1}>Category :</div>
                    <select
                      className={`${text.p2} form-select`}
                      onChange={this.onChangeValue}
                      defaultValue={"default"}
                      name="category"
                    >
                      <option className={text.p2} value={"default"} disabled>
                        Choose category..
                      </option>
                      {categories.map((category, index) => (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
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
const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  };
};
export default withRouter(connect(mapStateToProps)(EditProduct));
