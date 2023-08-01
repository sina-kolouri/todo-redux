import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import "./Header.css";
const Header = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    setText(e.target.value);
  }

  const handleAdd = () => {
    const trimmedText = text.trim();
    if (trimmedText) {
      dispatch({
        type: "todos/todoAdded",
        payload: {
          id: nanoid(),
          text: trimmedText,
          completed: false,
        },
      });
      setText("");
    }
  };

  function handleOnKeyDown(e) {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      dispatch({
        type: "todos/todoAdded",
        payload: {
          id: nanoid(),
          text: trimmedText,
          completed: false,
        },
      });
      setText("");
    }
  }

  return (
    <>
      <div className="container-navbar mb-5">
        <span className="navbar-title h3">Todo list with Redux</span>
      </div>
      <div className="container-input m-3">
        <input
          type={text}
          value={text}
          className="form-control"
          id="exampleFormControlInput"
          placeholder="What needs to be done?"
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
        />
        <button onClick={handleAdd} type="button" className="btn btn-dark ms-4">
          Add
        </button>
      </div>
    </>
  );
};

export default Header;
