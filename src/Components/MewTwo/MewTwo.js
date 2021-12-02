import React from "react";
import classes from "./MewTwo.module.css";

// Composant
import Separator from "../Separator/Separator";

// HOC
import countHits from "../../hoc/countHits";

// Image
import MewTwoPic from "../../assets/mewtwo.png";

const MewTwo = props => {
    // Variables
    const { oppenentName, hocStateHits, handleHit, mewTwoLife, isButtonAvaible } = props;

    const stillAlive =
        mewTwoLife > 0 ? `${mewTwoLife} %` : <span className="deadBadge">Mort</span>;

    const opacityImgStyle = mewTwoLife > 0 ? null : { opacity: 0.3 };

    return (
        <div className={classes.container}>
            <img src={MewTwoPic} style={opacityImgStyle} alt="Mew" />
            <button onClick={handleHit} disabled={isButtonAvaible}>
                Frapper {oppenentName}
            </button>
            {isButtonAvaible && mewTwoLife ? <h2>MewTwo a gagné ce combat</h2> : null}

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
};

export default countHits(MewTwo, 15);
