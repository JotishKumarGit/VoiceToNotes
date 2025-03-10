import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  // Use the passed prop as the full text.
  const fullText = text;
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  // When the full text changes, reset the animation.
  useEffect(() => {
    setDisplayedText('');
    setCharIndex(0);
  }, [fullText]);

  useEffect(() => {
    const typingDelay = 150; // adjust delay (in ms) as needed

    const timeout = setTimeout(() => {
      // Append next character from fullText
      setDisplayedText(fullText.substring(0, charIndex + 1));

      if (charIndex < fullText.length - 1) {
        setCharIndex(charIndex + 1);
      } else {
        // When complete, reset after a short pause to loop the animation
        setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
        }, 1000);
      }
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [charIndex, fullText]);

  return <h1>{displayedText}</h1>;
};

export default Typewriter;
