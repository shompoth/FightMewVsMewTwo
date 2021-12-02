import React, { useState } from "react";

const countHits = (WrappedComponent, powerHit) => {
    const CountHits = props => {
        // State
        const [hits, setHits] = useState(0);

        // Fonction
        const handleHit = () => {
            setHits(prevState => prevState + 1);

            props.handleLife(WrappedComponent.name, powerHit);
        };

        return <WrappedComponent hocStateHits={hits} handleHit={handleHit} {...props} />;
    };

    return CountHits;
};

export default countHits;
