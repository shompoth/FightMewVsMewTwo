import React from "react";
import classes from "./Mew.module.css";

// Composant
import Button from "../Button/Button";

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
        isButtonAvaible,
        buttonInGameAvaibleMew,
    } = props;

    const stillAlive =
        mewLife > 0 ? `${mewLife} %` : <span className="deadBadge">Mort</span>;

    const opacityImgStyle = mewLife > 0 ? null : { opacity: 0.3 };

    // Fonction
    const displayMessage = () => {
        return mewLife > 0 ? (
            <h2 className="win">Mew a gagné !</h2>
        ) : (
            <h2 className="defeated">Loose...</h2>
        );
    };

    const generalButtonAvaible = () => {
        // Check if endGame disable all buttons
        if (isButtonAvaible) {
            return true;
        } else {
            // switch hit
            return buttonInGameAvaibleMew ? true : false;
        }
    };

    return (
        <div className={classes.container}>
            {isButtonAvaible ? displayMessage() : null}
            <img src={MewPic} style={opacityImgStyle} alt="Mew" />

            <Button
                handleHit={handleHit}
                className={classes.mewButton}
                isButtonAvaible={generalButtonAvaible()}
            >
                Frapper {oppenentName}
            </Button>

            <hr class="rounded" />
            <table>
                <tr>
                    <th>Coups</th>
                    <th>Vie</th>
                </tr>
                <tr>
                    <td>{hocStateHits}</td>
                    <td>{stillAlive}</td>
                </tr>
            </table>
        </div>
    );
}

export default countHits(Mew);
