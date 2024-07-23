import './App.css'
import Add from './components/add'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

function App() {
return(
  <>

 <Router>
  <Routes>
  <Route path="/" element={<Add/>}/>
  <Route path="/shop" element={<h1>Shop</h1>}/>
  </Routes>
 </Router>
 </>
)
}

export default App
