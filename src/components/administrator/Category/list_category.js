import React from "react";
import { parseDate } from "../../helpers/index";
import { text, button } from "../../helpers/class_name.json"
const ListCategory = ({
  index,
  category,
  onSelectCategoryEdit,
  onSelectCategoryDelete,
}) => {
  const onClickEditCategory = (event) => {
    event.preventDefault();
    onSelectCategoryEdit(category);
  };
  const onClickDeleteCategory = (event) => {
    event.preventDefault();
    onSelectCategoryDelete(category);
  };
  return (
    <>
    <div className="number-column">{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className={`${button.danger} ${text.p3}`}
          data-toggle="modal"
          data-target="#modalDeleteCategory"
          onClick={onClickDeleteCategory}
        >
          Delete
        </button>
        <button
          type="button"
          className={`${button.primary} ${text.p3}`}
          data-toggle="modal"
          data-target="#modalEditCategory"
          onClick={onClickEditCategory}
        >
          Edit
        </button>
      </div>
      <div className="sentences-column">{category.name}</div>
      <div>{parseDate(category.date_created)}</div>
      <div>{parseDate(category.date_updated)}</div>
    </>
  );
};

export default ListCategory;
