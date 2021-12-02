import React, { useState } from "react";
import classes from "./MewTwo.module.css";

// Composant
import Separator from "../Separator/Separator";

// HOC
import countHits from "../../hoc/countHits";

// Image
import MewTwoPic from "../../assets/mewtwo.png";

const MewTwo = props => {
    const { oppenentName, hocStateHits, actionHit } = props;

    return (
        <div className={classes.container}>
            <img src={MewTwoPic} alt="Mew" />
            <button onClick={actionHit}>Frapper {oppenentName}</button>
            <hr class="rounded" />

            <table>
                <tr>
                    <th>Coups</th>
                    <th>Vie</th>
                </tr>
                <tr>
                    <td>{hocStateHits}</td>
                    <td>100</td>
                </tr>
            </table>
        </div>
    );
};

export default countHits(MewTwo);
