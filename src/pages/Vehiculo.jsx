import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFilterContext } from '../context'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import styled from 'styled-components'
import { inside, outside, vehicles } from './constants'
import CarState from './CarState'

const Vehiculo = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    vehicle,
    setVehicle,
    showCarState,
    hideCarState,
    viewportHeight,
    showCarState: showState,
  } = useFilterContext()

  useEffect(() => {
    const vehicleData = vehicles.find((v) => v.id === parseInt(id))
    setVehicle(vehicleData)
  }, [id, setVehicle])

  if (!vehicle) {
    return <div>Loading...</div>
  }

  const { name, plate, parked, icon, alt_name } = vehicle
  const options = parked ? inside : outside

  const handleAction = (action) => {
    switch (action) {
      case 'showCarState':
        showState()
        break
      case 'exitMain':
        // Logic for exiting through the main gate
        break
      case 'exitAlley':
        // Logic for exiting through the alley
        break
      case 'enterMain':
        // Logic for entering through the main gate
        break
      case 'authorizePlate':
        // Logic for authorizing another plate
        break
      default:
        break
    }
  }

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <div className='section-center'>
        <div className='return' onClick={() => navigate('/')}>
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
        {options.map(({ id, icon: IconComponent, text, action }) => (
          <button
            key={id}
            className='option'
            onClick={() => handleAction(action)}
          >
            <IconComponent className='icon' />
            <h5>{text}</h5>
          </button>
        ))}
      </div>
      {showCarState && <CarState onClose={hideCarState} />}{' '}
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
  position: relative;

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