import HomePage from './composants/HomePage';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import SignUp from './composants/signUp';
import SignIn from './composants/signIn';
import Profil from './composants/profil';


function App(){
    return(
        <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Profil' element={<Profil/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;