import React from "react";
import classes from "./Mew.module.css";

// Composant
import Separator from "../Separator/Separator";

// HOC
import countHits from "../../hoc/countHits";

// Image
import MewPic from "../../assets/mew.png";

function Mew(props) {
    // Variables
    const { oppenentName, hocStateHits, handleHit, mewLife } = props;

    const stillAlive =
        mewLife > 0 ? `${mewLife} %` : <span className="deadBadge">Mort</span>;

    return (
        <div className={classes.container}>
            <img src={MewPic} alt="Mew" />
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
}

export default countHits(Mew, 23);
