import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MisVehiculos } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MisVehiculos />} />
      </Routes>
    </Router>
  )
}
export default App
