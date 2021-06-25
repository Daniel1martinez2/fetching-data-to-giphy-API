import React, {useEffect, useState} from 'react';
import axios from 'axios' ; 
import './App.css';

function App() {
  const [testGif, setTestGif] = useState('')
  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'ESsAUgFexxjz2hL91zLmYdIUo2w6w8Fa',
        }
      }); 
      //console.log(response.data.data);
      setTestGif(response.data.data); 
    }
    fetchData(); 
  },[]); 
  return (
    <React.Fragment>
      {testGif.length > 0 && testGif.map(elem => {
        return (
          <div key={elem.id}>
            <img src={elem.images.downsized.url} alt="this slowpoke moves"  width="250" />
          </div>
        ); 
      }) }
      
    </React.Fragment>
  );
}

export default App;
