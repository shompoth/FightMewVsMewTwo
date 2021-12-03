import React from "react";
import classes from "./Mew.module.css";

// Composants
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

// HOC
import countHits from "../../hoc/countHits";

// Image
import MewPic from "../../assets/mew.png";

function Mew(props) {
    // Variables
    const {
        oppenentName,
        hocStateHits,
        handleHit,
        mewLife,
        isButtonNotAvaible,
        buttonInGameNotAvaibleMew,
    } = props;

    const opacityImgStyle = mewLife > 0 ? null : { opacity: 0.3 };

    // Fonction
    const displayMessage = () => {
        return mewLife > 0 ? (
            <h2 className="win">Mew win !</h2>
        ) : (
            <h2 className="defeated">Loose...</h2>
        );
    };

    const generalButtonAvaible = () => {
        // Check if endGame disable all buttons
        if (isButtonNotAvaible) {
            return true;
        } else {
            // switch hit
            return buttonInGameNotAvaibleMew ? true : false;
        }
    };

    return (
        <div className={classes.container}>
            {isButtonNotAvaible ? displayMessage() : null}
            <img src={MewPic} style={opacityImgStyle} alt="Mew" />

            <Button
                handleHit={() => handleHit("Mew")}
                className={classes.mewButton}
                isButtonNotAvaible={generalButtonAvaible()}
                hocStateHits={hocStateHits}
            >
                Attack {oppenentName}
            </Button>

            <ProgressBar bgColor={"#fbd1d1"} life={mewLife} />
        </div>
    );
}

export default countHits(Mew);
