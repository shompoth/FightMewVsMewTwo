import React from "react";
import classes from "./MewTwo.module.css";

// Composant
import Button from "../Button/Button";

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
        buttonInGameAvaibleMewTwo,
    } = props;

    const stillAlive =
        mewTwoLife > 0 ? `${mewTwoLife} %` : <span className="deadBadge">Mort</span>;

    const opacityImgStyle = mewTwoLife > 0 ? null : { opacity: 0.3 };

    // Fonction
    const displayMessage = () => {
        return mewTwoLife > 0 ? (
            <h2 className="win">Mewtwo a gagné !</h2>
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
            return buttonInGameAvaibleMewTwo ? true : false;
        }
    };

    return (
        <div className={classes.container}>
            {isButtonNotAvaible && displayMessage()}

            <img src={MewTwoPic} style={opacityImgStyle} alt="Mew" />

            <Button
                handleHit={handleHit}
                className={classes.mewTwoButton}
                isButtonNotAvaible={generalButtonAvaible()}
            >
                Frapper {oppenentName}
            </Button>

            <hr className="rounded" />

            <table>
                <tbody>
                    <tr>
                        <th>Coups</th>
                        <th>Vie</th>
                    </tr>

                    <tr>
                        <td>{hocStateHits}</td>
                        <td>{stillAlive}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default countHits(MewTwo);
