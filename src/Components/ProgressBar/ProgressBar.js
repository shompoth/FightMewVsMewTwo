import React from "react";

const ProgressBar = ({ bgColor, life }) => {
    let colorLife = 0;
    if (life <= 29) {
        colorLife = "red";
    } else if (life <= 69) {
        colorLife = "orange";
    } else {
        colorLife = "green";
    }

    // Styles
    const containerBarStyles = {
        height: 20,
        width: "70%",
        backgroundColor: "#e0e0de",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 30,
    };

    const fillerStyles = {
        height: "100%",
        width: `${life}%`,
        backgroundColor: colorLife,
        borderRadius: 5,
        transition: "width 1s ease-in-out",
        textAlign: "right",
    };

    const labelStyles = {
        padding: 5,
        color: "white",
        fontWeight: "bold",
    };

    const labelStylesKo = {
        padding: 5,
        fontSize: 16,
        fontWeight: "bold",
    };

    const alive =
        life > 0 ? (
            <span style={labelStyles}>{`${life}%`}</span>
        ) : (
            <span style={labelStyles}>KO</span>
        );

    return (
        <div style={containerBarStyles}>
            <div style={fillerStyles}>
                {/* <span style={labelStyles}>{`${life}%`}</span> */}
                {alive}
            </div>
        </div>
    );
};

export default ProgressBar;
