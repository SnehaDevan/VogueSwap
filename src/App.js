import logo from './logo.svg';
import './App.css';
import './Pages/HomePage/HomePage';
import LoginPag from './Pages/LoginPag/LoginPag';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import AccountCreate from './Pages/AccountCreate/AccountCreate';
import { DonateCl, HomePage } from './Pages';
import Options from './Pages/Options/options';
import Addclothes from './Pages/Addclothes/addclothes';
import Success from './Pages/Success/success';
import Display from './Pages/Display/display';
import MainPage from './Pages/MainPage/MainPage';
import Signup from './Pages/Signup/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<MainPage/>}/>
         
       <Route path='/user-signup' element={<Signup/>}/>
         <Route path='/user-login' element={<LoginPag/>}/>
         <Route path='/acc-create' element={<AccountCreate/>}/>
         <Route path='/home' element={<HomePage/>}/>
         <Route path='/donate-cl' element={<DonateCl/>}/>
         <Route path='/option-button' element={<Options/>}/>
         <Route path='/add-clothes' element={<Addclothes/>}/>
         <Route path='/success-page' element={<Success/>}/>
         <Route path='/displaycloth' element={<Display/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
