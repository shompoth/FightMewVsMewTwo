import React, { useState } from "react";

const countHits = WrappedComponent => {
    const CountHits = props => {
        // State
        const [hits, setHits] = useState(0);

        // Fonction
        const actionHit = () => {
            setHits(prevState => prevState + 1);
        };
        return <WrappedComponent hocStateHits={hits} actionHit={actionHit} {...props} />;
    };

    return CountHits;
};

export default countHits;
