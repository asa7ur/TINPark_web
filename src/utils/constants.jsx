import { FaUserCircle, FaCar, FaRegMap, FaBars } from 'react-icons/fa'
import icon_1 from '../assets/MercedesBenz.png'
import icon_2 from '../assets/BMW.png'
import icon_3 from '../assets/Peugeot.png'
import icon_4 from '../assets/Audi.png'

export const links = [
  {
    id: 1,
    icon: FaUserCircle,
    text: 'usuario',
    url: '/usuario',
  },
  {
    id: 2,
    icon: FaCar,
    text: 'mis vehiculos',
    url: '/',
  },
  {
    id: 3,
    icon: FaRegMap,
    text: 'areas',
    url: '/areas',
  },
  {
    id: 4,
    icon: FaBars,
    text: 'ajustes',
    url: '/ajustes',
  },
]

export const cars = [
  {
    name: 'Coche 1',
    plate: '1234ABC',
    parked: 'En Plaza Virgen de Amargura',
    icon: icon_1,
    alt_name: 'Mercedes Benz',
  },
  {
    name: 'Coche 2',
    plate: '5678DEF',
    parked: 'Fuera',
    icon: icon_2,
    alt_name: 'BMW',
  },
  {
    name: 'Coche 3',
    plate: '9123GHI',
    parked: 'En Plaza de Armas',
    icon: icon_3,
    alt_name: 'Peugeot',
  },
  {
    name: 'Coche 4',
    plate: '4567JKL',
    parked: 'En Viapol',
    icon: icon_4,
    alt_name: 'Audi',
  },
]