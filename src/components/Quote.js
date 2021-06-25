import React from 'react'; 

const Quote = (props) => {
     
    const {quote} = props;
    return(
      <React.Fragment>
        {quote && 
          <div>
            <h1>{quote.content}</h1>
            <p>{quote.author} <strong>{quote.dateAdded}</strong> </p>
          </div>
        }
      </React.Fragment>
    ); 
  }
 
export default Quote; 