import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { NavbarBottom } from '../components'
import { cars } from '../utils/constants'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { RxGear } from 'react-icons/rx'
import { RxExit } from 'react-icons/rx'

const Vehiculo = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
  const [vehicle, setVehicle] = useState(null)

  const handleClick = () => {
    navigate('/')
  }

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const selectedVehicle = cars.find((car) => car.id === parseInt(id))
    setVehicle(selectedVehicle)
  }, [id])

  if (!vehicle) {
    return <div>Loading...</div>
  }

  const { name, plate, parked, icon, alt_name } = vehicle

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <div className='section-center'>
        <div className='return' onClick={() => handleClick()}>
          <FaLongArrowAltLeft />
          <p>Volver</p>
        </div>
        <div className='vehicle-info'>
          <div className='icon'>
            <img src={icon} alt={alt_name} className='img' />
          </div>
          <h1>{name}</h1>
          <h3>Matrícula: {plate}</h3>
          <h4>{parked ? `En ${parked}` : 'Fuera'}</h4>
        </div>
      </div>
      <div className='options'>
        <div className='option'>
          <RxGear className='icon' />
          <h5>Corregir el estado</h5>
        </div>
        <div className='option'>
          <RxExit className='icon' />
          <h5>Salir por Principal</h5>
        </div>
        <div className='option'>
          <RxExit className='icon' />
          <h5>Salir por Callejón</h5>
        </div>
      </div>
      <NavbarBottom />
    </Wrapper>
  )
}
export default Vehiculo

const Wrapper = styled.main`
  background: linear-gradient(
    180deg,
    var(--primary-500) 0%,
    var(--primary-950) 100%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .return {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  .vehicle-info {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;

    .icon {
      width: 125px;
      height: 125px;
    }

    h1 {
      margin: 0.5rem 0;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    h4 {
      margin-bottom: 0.25rem;
      font-weight: 400;
      text-transform: none;
    }
  }

  .options {
    position: fixed;
    bottom: 3rem;
    height: 35vh;
    width: 100%;
    background: var(--backgroundColor);
    border-radius: 25px 25px 0 0;
    border-top: var(--border);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 90vw;
    background: var(--backgroundColorAlt);
    margin-bottom: 1.5rem;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: var(--border);
    cursor: pointer;
    .icon {
      font-size: 1.2rem;
    }
    h5 {
      text-transform: none;
    }
  }
`
