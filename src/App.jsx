import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MisVehiculos, Zonas, Vehiculo } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MisVehiculos />} />
        <Route path='/zonas' element={<Zonas />} />
        <Route path='/misvehiculos/:id' element={<Vehiculo />} />
      </Routes>
    </Router>
  )
}
export default App
