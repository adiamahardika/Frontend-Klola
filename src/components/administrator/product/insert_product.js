import React, { Component } from "react";
import { connect } from "react-redux";
import { postProduct } from "../../redux/actions/product";
import { getAllCategory } from "../../redux/actions/category";
import { withRouter } from "react-router";
import { text, button } from "../../helpers/class_name.json";
import { routes } from "../../helpers/routes.json";
class InsertProduct extends Component {
  state = {
    name: "",
    category: null,
    description: "",
    price: null,
    quantity: null,
    image: "",
  };

  componentDidMount() {
    this.props.dispatch(getAllCategory());
  }
  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onChangeImage = (event) => {
    const image = event.target.files[0];
    if (image.size > 1024 * 1024 * 3)
      return alert("Cannot upload image with size more than 3MB");
    const imageArray = image.name.split(".");
    const imageExtension = imageArray[imageArray.length - 1].toLowerCase();
    if (
      imageExtension !== "png" &&
      imageExtension !== "jpg" &&
      imageExtension !== "jpeg" &&
      imageExtension !== "gif"
    )
      return alert("Only can upload image!!");
    this.setState({
      image: image,
    });
  };
  postProduct = async (event) => {
    event.preventDefault();
    let data = new FormData();

    data.append("name", this.state.name);
    data.append("description", this.state.description);
    data.append("image", this.state.image);
    data.append("price", this.state.price);
    data.append("quantity", this.state.quantity);
    data.append("category", this.state.category);

    await this.props.dispatch(postProduct(data));
    this.props.history.push(routes.admin + routes.product);
  };
  render() {
    console.log(this.state);
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
            onClick={this.postProduct}
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
          id="modalInsertProduct"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Insert Product</div>
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
                      name="category"
                      defaultValue={"default"}
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

export default withRouter(connect(mapStateToProps)(InsertProduct));
