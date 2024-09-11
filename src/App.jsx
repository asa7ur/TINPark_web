import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MisVehiculos, Areas } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MisVehiculos />} />
        <Route path='/areas' element={<Areas />} />
      </Routes>
    </Router>
  )
}
export default App
