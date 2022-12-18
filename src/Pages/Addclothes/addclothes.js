import React from 'react';
import './addclothes.css';


import { Link } from 'react-router-dom'
import MainLayout from '../../components/MainLayout/MainLayout';

const App = () => {
    return (
      <MainLayout>
      <div className ="main_add">

      <div className="text_main">
        <h4>START BY ADDING CLOTHES!!</h4>
      </div>

      <div className="addimage">
        
          <h2>Image:</h2>
          </div>
         <Link to='/'><button  type="submit"  className="but1" style={{ width: "150px", height: "50px",}}>Add File</button></Link>
          

          
         <Link to='/'> <button  type="submit"  className="but2" style={{ width: "150px", height: "50px",}} >Add Category</button></Link>
          

        
         <Link to='/'><button  type="submit"  className="but2" style={{ width: "150px", height: "50px",}}>Add Size</button></Link>
     
      </div> 
    
      
     
     
      </MainLayout>
          
    );
  }

  export default App;
  