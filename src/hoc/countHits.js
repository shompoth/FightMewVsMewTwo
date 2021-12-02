import React, { useState } from "react";

const countHits = (WrappedComponent, powerHit) => {
    const CountHits = props => {
        // State
        const [hits, setHits] = useState(0);

        // Fonction
        const handleHit = () => {
            setHits(prevState => prevState + 1);
            if (WrappedComponent.name === "Mew") {
                props.handleLife("MewTwo", powerHit);
            } else {
                props.handleLife("Mew", powerHit);
            }
        };

        return <WrappedComponent hocStateHits={hits} handleHit={handleHit} {...props} />;
    };

    return CountHits;
};

export default countHits;
