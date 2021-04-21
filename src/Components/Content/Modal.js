import React from "react";

export const Modal = ({ open, onClose, children }) => {
  return (
    open && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    )
  );
};
