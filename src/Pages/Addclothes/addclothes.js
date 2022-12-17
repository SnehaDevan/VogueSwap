import React from 'react';
import './addclothes.css';




const App = () => {
    return (
      
      <div className ="main">

      <div className="text">
        <h1>START BY ADDING CLOTHES!!</h1>
      </div>

      <div className="addimage">
        
          <h2>Image:</h2>
          <button  type="submit"  className="but1" style={{ width: "150px", height: "50px",}}>Choose File</button>
          

          
          <button  type="submit"  className="but2" style={{ width: "150px", height: "50px",}} >Add Category</button>
          

        
          <button  type="submit"  className="but2" style={{ width: "150px", height: "50px",}}>Add Size</button>
     
      </div> 
    
      
     
     
   </div>
          
    );
  }

  export default App;
  