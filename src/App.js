import React, { useState } from "react";
import "./App.css";

// Composants
import Mew from "./Components/Mew/Mew";
import MewTwo from "./Components/MewTwo/MewTwo";
import Separator from "./Components/Separator/Separator";

function App() {
    // State
    const [mewLife, setMewLife] = useState(100);
    const [mewTwoLife, setMewTwoLife] = useState(100);

    // Fonction
    const handleLife = (pokemon, powerHit) => {
        if (pokemon === "Mew") {
            if (mewTwoLife >= 0 && !(mewTwoLife <= powerHit)) {
                setMewTwoLife(prevState => prevState - powerHit);
            } else {
                setMewTwoLife(0);
            }
        } else {
            if (mewLife >= 0 && !(mewLife <= powerHit)) {
                setMewLife(prevState => prevState - powerHit);
            } else {
                setMewLife(0);
            }
        }
    };

    return (
        <div className="App">
            <div className="containerApp">
                <h1>Mew vs MewTwo</h1>
                <h2>Qui est le plus fort ?</h2>
                <Separator />
                <div className="divPokemon">
                    <Mew
                        oppenentName="Mewtwo"
                        mewLife={mewLife}
                        handleLife={handleLife}
                    />
                    <MewTwo
                        oppenentName="Mew"
                        mewTwoLife={mewTwoLife}
                        handleLife={handleLife}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
