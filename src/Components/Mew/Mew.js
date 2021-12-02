import React, { useState } from "react";
import classes from "./Mew.module.css";

// Composant
import Separator from "../Separator/Separator";

// HOC
import countHits from "../../hoc/countHits";

// Image
import MewPic from "../../assets/mew.png";

function Mew(props) {
    const { oppenentName, hocStateHits, actionHit } = props;
    // const [hits, setHits] = useState(0);

    // const actionHit = () => {
    //     setHits(prevState => prevState + 1);
    // };

    return (
        <div className={classes.container}>
            <img src={MewPic} alt="Mew" />
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
}

export default countHits(Mew);
