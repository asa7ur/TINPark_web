import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MisVehiculos, Areas, Vehiculo } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MisVehiculos />} />
        <Route path='/areas' element={<Areas />} />
        <Route path='/misvehiculos/:id' element={<Vehiculo />} />
      </Routes>
    </Router>
  )
}
export default App
