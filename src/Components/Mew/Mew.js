import React from "react";
import classes from "./Mew.module.css";

// Composant
import Separator from "../Separator/Separator";

// HOC
import countHits from "../../hoc/countHits";

// Image
import MewPic from "../../assets/mew.png";

function Mew(props) {
    const { oppenentName, hocStateHits, handleHit, mewLife } = props;

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
                    <td>{mewLife}</td>
                </tr>
            </table>
        </div>
    );
}

export default countHits(Mew, 20);
