import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
    const [setDarkMode] = useDarkMode();


    return (
        <nav>
            <h1>Womens World Cup</h1>
            <div>
                <button onClick={setDarkMode}>Dark</button>
            </div>
        </nav>
    );
};

export default Navbar;