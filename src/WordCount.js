import React, { useState } from 'react';
import './WordCount.css';

const WordCounter = () => {
  const [text, setText] = useState('');
  
  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };
  
  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
};

export default WordCounter;
