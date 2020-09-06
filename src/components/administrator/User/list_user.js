import React from "react";
import { text, button } from "../../helpers/class_name.json";
import { parseDate } from "../../helpers/index";
const ListUser = ({ index, user, onSelectUserEdit, onSelectUserDelete }) => {
  const onClickSelectUserEdit = (event) => {
    event.preventDefault();
    onSelectUserEdit(user);
  };
  const onClickSelectUserDelete = (event) => {
    event.preventDefault();
    onSelectUserDelete(user);
  };
  return (
    <>
      <div>{index + 1}</div>
      <div className="manage-column">
        <button
          type="button"
          className={`${button.danger} ${text.p3}`}
          data-toggle="modal"
          data-target="#modalDeleteUser"
          onClick={onClickSelectUserDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className={`${button.primary} ${text.p3}`}
          data-toggle="modal"
          data-target="#modalEditUser"
          onClick={onClickSelectUserEdit}
        >
          Edit
        </button>
      </div>
      <div className="sentences-column">{user.name}</div>
      <div className="sentences-column">{user.email}</div>
      <div className="sentences-column">{user.status}</div>
      <div>{parseDate(user.date_created)}</div>
      <div>{parseDate(user.date_updated)}</div>
    </>
  );
};

export default ListUser;
