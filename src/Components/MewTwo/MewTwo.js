import React from "react";
import classes from "./MewTwo.module.css";

// Composants
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

// HOC
import countHits from "../../hoc/countHits";

// Image
import MewTwoPic from "../../assets/mewtwo.png";

const MewTwo = props => {
    // Variables
    const {
        oppenentName,
        hocStateHits,
        handleHit,
        mewTwoLife,
        isButtonNotAvaible,
        buttonInGameNotAvaibleMewTwo,
    } = props;

    const stillAlive =
        mewTwoLife > 0 ? `${mewTwoLife} %` : <span className="deadBadge">KO</span>;

    const opacityImgStyle = mewTwoLife > 0 ? null : { opacity: 0.3 };

    // Fonction
    const displayMessage = () => {
        return mewTwoLife > 0 ? (
            <h2 className="win">Mewtwo win !</h2>
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
            return buttonInGameNotAvaibleMewTwo ? true : false;
        }
    };

    return (
        <div className={classes.container}>
            {isButtonNotAvaible && displayMessage()}
            <img src={MewTwoPic} style={opacityImgStyle} alt="Mewtwo" />

            <Button
                handleHit={() => handleHit("MewTwo")}
                className={classes.mewTwoButton}
                isButtonNotAvaible={generalButtonAvaible()}
                hocStateHits={hocStateHits}
            >
                Attaquer {oppenentName}
            </Button>

            <ProgressBar bgColor={"#dad4e0"} life={mewTwoLife} />
        </div>
    );
};

export default countHits(MewTwo);
