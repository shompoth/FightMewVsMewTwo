import "./App.css";

// Composants
import Mew from "./Components/Mew/Mew";
import MewTwo from "./Components/MewTwo/MewTwo";
import Separator from "./Components/Separator/Separator";

function App() {
    return (
        <div className="App">
            <div className="containerApp">
                <h1>Mew vs MewTwo</h1>
                <h2>Qui est le plus fort ?</h2>
                <Separator />
                <div className="divPokemon">
                    <Mew oppenentName="Mewtwo" />
                    <MewTwo oppenentName="Mew" />
                </div>
            </div>
        </div>
    );
}

export default App;
