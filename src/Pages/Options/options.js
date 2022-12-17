import React from 'react';


import './options.css'

const App = () => {
  return (
	
    <div className ="buttons">

		     <div className="text">
			<h1>Start shopping Now!!</h1>
		    </div>
            <div className="buttons2">

            <button className="but1" type="submit" style={{ width: "150px", height: "80px",}} >Barter</button>

            <button className="but2" type="submit" style={{ width: "150px", height: "80px",}}>Add clothes</button>

            <button className="but3" type="submit" style={{ width: "150px", height: "80px",}}>Donate</button>

		    </div>
        </div>
		
  );
}

export default App;