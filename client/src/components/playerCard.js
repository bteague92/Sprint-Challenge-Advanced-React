import React, { useState } from 'react';
import styled from "styled-components";
import { useAddVote } from "../hooks/useAddVote";

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 45%;
padding: 5px;
border: 1px solid black;
margin: 5px;
`;

export const PlayerCard = (props) => {

    const [addVote, vote, addFVote, fVote, addMVote, mVote] = useAddVote();



    return (
        <Card>
            <h2>{props.name}</h2>
            <h3>Country: {props.country}</h3>
            <h3>Searches: {props.searches}</h3>
            <h3>Total Votes: {fVote + mVote}</h3>
            <h3>Female Votes: {fVote}</h3>
            <button onClick={addFVote}>Add Vote</button>
            <h3>Female Votes: {mVote}</h3>
            <button onClick={addMVote}>Add Vote</button>
        </Card>
    )
}