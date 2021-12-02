import React from "react";
import classes from "./Button.module.css";

const Button = ({ handleHit, isButtonAvaible, children }) => {
    return (
        <button className={classes.button} onClick={handleHit} disabled={isButtonAvaible}>
            {children}
        </button>
    );
};

export default Button;
