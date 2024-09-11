import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavbarTop, Vehicle, NavbarBottom } from '../components'

const MisVehiculos = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <NavbarTop />
      <div className='section-center'>
        <h2>Tus Vehículos</h2>
        <Vehicle />
      </div>
      <NavbarBottom />
    </Wrapper>
  )
}

export default MisVehiculos

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  h2 {
    padding-top: 1rem;
  }
`
