import Introduction from './pages/Introduction';
import Login from './pages/Login'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MultiStepForm from './pages/MultiStepForm';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Introduction />}/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/home' element={<Home />} />
        <Route path='/investigations' element={<MultiStepForm />} />
        <Route path='/investigations/:caseNumber' element={<MultiStepForm />} />
      </Routes>
    </div>
  )
}

export default App