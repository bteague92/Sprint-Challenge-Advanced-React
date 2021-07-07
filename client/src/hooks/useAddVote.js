import { useState, useEffect } from "react";

export const useAddVote = (key) => {

    const [vote, setVote] = useState(0);
    const [fVote, setFVote] = useState(0);
    const [mVote, setMVote] = useState(0);

    const addVote = e => {
        setVote(vote + 1)
    };

    const addFVote = e => {
        setFVote(fVote + 1)
    };

    const addMVote = e => {
        setMVote(mVote + 1)
    };

    return [addVote, vote, addFVote, fVote, addMVote, mVote];

};