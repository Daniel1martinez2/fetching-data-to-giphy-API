import React, {useEffect, useState} from 'react';  
import axios from 'axios' ; 
//https://developers.giphy.com/docs/api/endpoint#trending
const Giphy = () => {
  const [testGif, setTestGif] = useState(''); 
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(()=>{
    const fetchData = async() => {
      setIsLoaded(true); 
      const response = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'ESsAUgFexxjz2hL91zLmYdIUo2w6w8Fa',
        }
      }); 
      console.log(response.data.data);
      setTestGif(response.data.data); 
      setIsLoaded(false); 
    }
    fetchData(); 
  },[]); 
  return (
  <React.Fragment>
    {isLoaded && <p>Loading...</p>}
      {testGif.length > 0 && testGif.map(elem => {
        return (
          <div key={elem.id} className='gif-container'>
            <img src={elem.images.downsized.url} alt={elem.title}  width="250" />
          </div>
        ); 
      }) }
  </React.Fragment>

  ); 
}
export default Giphy; 