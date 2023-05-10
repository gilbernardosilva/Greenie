import React from "react";
import "./FloatingButton.css";
import logoButton from './logoButton.png';
function FloatingButton(props) {
  const handleClick = () => {
    props.handleClick();
  };

  return (
    <button
      className={`floating-button ${props.isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <img src={logoButton} alt="Botão com imagem" style={{ maxWidth: '100%', borderRadius: '50%' }} />
    </button>
  );
}

export default FloatingButton;
