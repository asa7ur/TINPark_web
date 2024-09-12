import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavbarTop, Zone, NavbarBottom } from '../components'

const Zonas = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <NavbarTop />
      <div className='section-center'>
        <h2>Áreas disponibles</h2>
        <Zone />
      </div>
      <NavbarBottom />
    </Wrapper>
  )
}

export default Zonas

const Wrapper = styled.main`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  h2 {
    padding-top: 1rem;
  }
`