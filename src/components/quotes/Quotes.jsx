import React, { useState, useEffect } from 'react';
import quotesData from '../../json/quotes.json'


export default function Quotes() {
     const [currentQuote, setCurrentQuote] = useState('');
     const [currentAuthor, setCurrentAuthor] = useState('');

     useEffect(() => {
        //Load quotes
        const quotes = quotesData.quotes;
        const randomIndex = Math.floor(Math.random()* quotes.length);
        setCurrentQuote(quotes[randomIndex].quote);
        setCurrentAuthor(quotes[randomIndex].author);
     }, []);

  return (
    <div>
        <p className='quote'>{currentQuote}</p>
        <p className='author'>{currentAuthor}</p>
    </div>
  )
}
