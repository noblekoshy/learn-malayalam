import React from 'react';

const letters = ['\u0d05', '\u0d06', '\u0d07', '\u0d08', '\u0d09', '\u0d10'];

function Alphabet() {
  return (
    <div>
        {letters.map((letter) => (
            <div key={letter}>{letter}</div>
        ))}
    </div>
  );
}

export default Alphabet;
