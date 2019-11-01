import React, { useState } from 'react';
import styled from "styled-components";

const Card = styled.div`
padding: 5px;
border: 1px solid black;
margin: 5px;
`;

export const PlayerCard = (props) => {
    return (
        <Card>
            <h2>Name: {props.name}</h2>
            <h3>Country: {props.country}</h3>
            <h3>Searches: {props.searches}</h3>
        </Card>
    )
}