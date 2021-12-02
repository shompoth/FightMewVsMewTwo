import React from "react";

const Button = ({ handleHit, isButtonAvaible, children }) => {
    return (
        <button onClick={handleHit} disabled={isButtonAvaible}>
            {children}
        </button>
    );
};

export default Button;
