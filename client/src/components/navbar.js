import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
    const [setDarkMode] = useDarkMode();


    return (
        <nav className="navbar">
            <h1>Womens World Cup</h1>
            <div>
                <button onClick={setDarkMode}>Dark</button>
            </div>
            <h2>Players: </h2>
        </nav>
    );
};

export default Navbar;