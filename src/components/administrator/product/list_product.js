import React from "react";
import { parseToRupiah, parseDate } from "../../helpers/index";
import { text, button } from "../../helpers/class_name.json";
const ListProduct = ({
  product,
  index,
  onSelectProductDelete,
  onSelectProductEdit,
}) => {
  const onClickDelete = (event) => {
    event.preventDefault();
    onSelectProductDelete(product);
  };

  const onClickEdit = (event) => {
    event.preventDefault();
    onSelectProductEdit(product);
  };

  return (
    <>
      <div>{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className={`${button.danger} ${text.p3}`}
          data-toggle="modal"
          data-target="#modalDeleteProduct"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className={`${button.primary} ${text.p3}`}
          data-toggle="modal"
          data-target="#modalEditProduct"
          onClick={onClickEdit}
        >
          Edit
        </button>
      </div>
      <div>
        <img src={product.image} alt="" className="product-image" />
      </div>
      <div className="sentences-column">{product.name}</div>
      <div className="sentences-column">{product.category_name}</div>
      <div>{product.quantity}</div>
      <div className="sentences-column">{parseToRupiah(product.price)}</div>
      <div>{parseDate(product.date_created)}</div>
      <div>{parseDate(product.date_updated)}</div>
    </>
  );
};
export default ListProduct;
