import './App.css'
import Add from './components/add'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'

function App() {
return(
  <>

 <Router>
  <Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/signin" element={<Auth />}/>
  <Route path="/users" element={<Add/>}/>
  <Route path="/shop" element={<h1>Shop</h1>}/>
  </Routes>
 </Router>
 </>
)
}

export default App
