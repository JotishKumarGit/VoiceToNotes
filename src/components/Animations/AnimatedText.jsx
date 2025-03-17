import React, { useState, useEffect } from "react";

const colors = ["red", "blue", "purple", "white", "green"];

const AnimatedText = ({ text }) => {
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prev) => (prev + 1) % colors.length);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <h1 style={{ color: colors[colorIndex], transition: "color 2s ease" }}>
            {text}
        </h1>
    );
};

export default AnimatedText;
