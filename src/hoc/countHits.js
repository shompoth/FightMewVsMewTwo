import React, { useState, useEffect } from "react";

const countHits = WrappedComponent => {
    const CountHits = props => {
        // State
        const [hits, setHits] = useState(0);
        const [powerHit, setPowerHit] = useState(0);

        //useEffect
        useEffect(() => {
            setPowerHit(Math.floor(Math.random() * 40) + 5);
        }, []);

        // Fonction
        const handleHit = () => {
            setHits(prevState => prevState + 1);
            console.log(WrappedComponent.name);
            props.handleHitAction(WrappedComponent.name, powerHit);
        };

        return (
            <WrappedComponent
                hocStateHits={hits}
                handleHit={handleHit}
                powerHit={powerHit}
                {...props}
            />
        );
    };

    return CountHits;
};

export default countHits;
