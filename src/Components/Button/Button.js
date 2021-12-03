import React from "react";
import classes from "./Button.module.css";

const Button = ({
    handleHit,
    isButtonNotAvaible,
    children,
    hocStateHits,
    className = null,
}) => {
    return (
        <button
            className={`${className} ${classes.button}`}
            onClick={handleHit}
            disabled={isButtonNotAvaible}
        >
            <div style={{ marginBottom: 3 }}>{children}</div>
            <span style={{ fontWeight: 400 }}>{hocStateHits}</span>
        </button>
    );
};

export default Button;
