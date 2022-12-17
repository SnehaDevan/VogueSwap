import logo from './logo.svg';
import './App.css';
import './Pages/HomePage/HomePage';
import LoginPag from './Pages/LoginPag/LoginPag';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import AccountCreate from './Pages/AccountCreate/AccountCreate';
import { DonateCl, HomePage } from './Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/user-login' element={<LoginPag/>}/>
         <Route path='/acc-create' element={<AccountCreate/>}/>
         <Route path='/home' element={<HomePage/>}/>
         <Route path='/donate-cl' element={<DonateCl/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
