import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import { Link } from 'react-router-dom'

import './options.css'

const App = () => {
  return (
	<MainLayout>
    <div className ="buttons">

		     <div className="text_op">
			<h4>Start shopping Now!!</h4>
		    </div>
            <div className="buttons2">

            <Link to='/'><button className="but1" type="submit" style={{ width: "150px", height: "80px",}} >Barter</button></Link>

            <Link to='/add-clothes'> <button className="but2" type="submit" style={{ width: "150px", height: "80px",}}>Add clothes</button></Link>

            <Link to='/donate-cl'> <button className="but3" type="submit" style={{ width: "150px", height: "80px",}}>Donate</button></Link>

		    </div>
        </div>
        </MainLayout>
  );
}

export default App;