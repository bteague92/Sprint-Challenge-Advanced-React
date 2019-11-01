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

    const [addVote, vote] = useAddVote();


    return (
        <Card>
            <h2>{props.name}</h2>
            <h3>Country: {props.country}</h3>
            <h3>Searches: {props.searches}</h3>
            <h3>Votes: {vote}</h3>
            <button onClick={addVote}>Add Search</button>
        </Card>
    )
}