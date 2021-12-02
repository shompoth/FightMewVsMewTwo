import React from "react";
import classes from "./MewTwo.module.css";

// Composant
import Separator from "../Separator/Separator";

// HOC
import countHits from "../../hoc/countHits";

// Image
import MewTwoPic from "../../assets/mewtwo.png";

const MewTwo = props => {
    const { oppenentName, hocStateHits, handleHit, mewTwoLife } = props;

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
                    <td>{mewTwoLife}</td>
                </tr>
            </table>
        </div>
    );
};

export default countHits(MewTwo, 15);
