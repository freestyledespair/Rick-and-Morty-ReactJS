import React, { useState } from "react";
import "./modal.css";
const Modal = ({ character, hide }) => {
  console.log(character);
  const [isVisible, setVisible] = useState("modal_page");

  const func = () => {
    hide();
    setVisible("modal_none");
  };
  return (
    <div className={isVisible}>
      <div className="modal_window">
        <img src={character.image} alt="" />
        <h1 style={{ color: "blue" }}>{character.name}</h1>
        <h2>{character.gender}</h2>
        <h3>{character.status}</h3>
        <button className="btn_more" onClick={() => func()}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
