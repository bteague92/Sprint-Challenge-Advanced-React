import { useState, useEffect } from "react";

export const useDarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = e => {
        e.preventDefault();
        if (darkMode === false) {
            setDarkMode(true);
            document.body.classList.add("darkMode");
        }
        if (darkMode === true) {
            setDarkMode(false)
            document.body.classList.remove("darkMode");
        }
    };

    return [toggleMode];

};
