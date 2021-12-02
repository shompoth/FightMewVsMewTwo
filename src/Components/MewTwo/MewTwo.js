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
    const { oppenentName, hocStateHits, handleHit, mewTwoLife } = props;

    const stillAlive =
        mewTwoLife > 0 ? `${mewTwoLife} %` : <span className="deadBadge">Mort</span>;

    return (
        <div className={classes.container}>
            <img src={MewTwoPic} alt="Mew" />
            <button onClick={handleHit}>Frapper {oppenentName}</button>
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
