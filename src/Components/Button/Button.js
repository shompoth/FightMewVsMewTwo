import React from "react";
import classes from "./Button.module.css";

const Button = ({ handleHit, isButtonAvaible, children, className = null }) => {
    return (
        <button
            className={`${className} ${classes.button}`}
            onClick={handleHit}
            disabled={isButtonAvaible}
        >
            {children}
        </button>
    );
};

export default Button;
