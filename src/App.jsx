
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import Header from './components/header'
import AdminPage from './pages/adminPage'

function App() {
  return (
  <BrowserRouter>
      <div>
        
          <Routes path = "/*">
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/admin/*' element = {<AdminPage />}/>
            <Route path='/*' element= {<h1>Not Found</h1>} />
          </Routes>
          
      </div>
   </BrowserRouter>
  )

  
}

export default App
