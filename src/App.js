import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import Quote from './components/Quote';
function App() {  
  const [quote, setQuote] = useState({});
  const fetchQuotes = async () => {
    const data = await axios('https://api.quotable.io/random'); 
    setQuote(data.data); 
  }
  
  const newQuote = () => {
    fetchQuotes();
  }

  return (
    <React.Fragment>
      <Quote quote={quote}  />
      <button onClick={newQuote}>Click</button>
    </React.Fragment>
  );
}

export default App;
