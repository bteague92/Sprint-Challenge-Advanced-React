import { useState, useEffect } from "react";

export const useAddVote = (key) => {

    const [vote, setVote] = useState(0);

    const addVote = e => {
        setVote(vote + 1)
    };

    return [addVote, vote];

};