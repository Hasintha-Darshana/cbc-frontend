
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/register'

function App() {
  return (
  <BrowserRouter>
      <div>
        <Toaster position='top-right' />
          <Routes path = "/*">
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = '/signup' element ={<RegisterPage/>}/>
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/admin/*' element = {<AdminPage />}/>
            <Route path ='/testing' element ={<TestPage/>}/>
            <Route path='/*' element= {<h1>Not Found</h1>} />
          </Routes>
          
      </div>
   </BrowserRouter>
  )

  
}

export default App

