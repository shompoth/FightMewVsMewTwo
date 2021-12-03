import React, { useState, useEffect } from "react";
import "./App.css";

// Composants
import Mew from "./Components/Mew/Mew";
import MewTwo from "./Components/MewTwo/MewTwo";
import Separator from "./Components/Separator/Separator";

function App() {
    // State
    const [mewLife, setMewLife] = useState(100);
    const [mewTwoLife, setMewTwoLife] = useState(100);
    const [isButtonNotAvaible, setIsButtonNotAvaible] = useState(false);

    const [buttonInGameNotAvaibleMew, setButtonInGameNotAvaibleMew] = useState(0);
    const [buttonInGameNotAvaibleMewTwo, setButtonInGameNotAvaibleMewTwo] = useState(0);

    //useEffect
    useEffect(() => {
        const numberZeroOrOne = Math.round(Math.random());

        if (numberZeroOrOne === 0) {
            setButtonInGameNotAvaibleMewTwo(true);
            setButtonInGameNotAvaibleMew(false);
        } else {
            setButtonInGameNotAvaibleMew(true);
            setButtonInGameNotAvaibleMewTwo(false);
        }
    }, []);

    // Fonction
    const handleHitAction = (pokemon, powerHit) => {
        if (pokemon === "MewTwo") {
            if (mewLife >= 0 && !(mewLife <= powerHit)) {
                // Decrease Life of Mew
                setMewLife(prevState => prevState - powerHit);

                // Switch Hit to Mew
                setButtonInGameNotAvaibleMewTwo(true);
                setButtonInGameNotAvaibleMew(false);
            } else {
                setMewLife(0);
                setIsButtonNotAvaible(true);
            }
        } else {
            if (mewTwoLife >= 0 && !(mewTwoLife <= powerHit)) {
                // Decrease Life of Mewtwo
                setMewTwoLife(prevState => prevState - powerHit);

                // Switch Hit to MewTwo
                setButtonInGameNotAvaibleMew(true);
                setButtonInGameNotAvaibleMewTwo(false);
            } else {
                setMewTwoLife(0);
                setIsButtonNotAvaible(true);
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
                        handleHitAction={handleHitAction}
                        isButtonNotAvaible={isButtonNotAvaible}
                        buttonInGameNotAvaibleMew={buttonInGameNotAvaibleMew}
                    />
                    <MewTwo
                        oppenentName="Mew"
                        mewTwoLife={mewTwoLife}
                        handleHitAction={handleHitAction}
                        isButtonNotAvaible={isButtonNotAvaible}
                        buttonInGameNotAvaibleMewTwo={buttonInGameNotAvaibleMewTwo}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
