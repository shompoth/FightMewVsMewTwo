import React from "react";
import classes from "./Button.module.css";

const Button = ({ handleHit, isButtonNotAvaible, children, className = null }) => {
    return (
        <button
            className={`${className} ${classes.button}`}
            onClick={handleHit}
            disabled={isButtonNotAvaible}
        >
            {children}
        </button>
    );
};

export default Button;
