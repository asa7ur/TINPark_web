import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MisVehiculos, Zonas, Vehiculo } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MisVehiculos />,
  },
  {
    path: '/zonas',
    element: <Zonas />,
  },
  {
    path: '/misvehiculos/:id',
    element: <Vehiculo />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
