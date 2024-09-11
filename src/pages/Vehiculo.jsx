import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavbarBottom } from '../components'

const Vehiculo = () => {
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
      <NavbarBottom />
    </Wrapper>
  )
}
export default Vehiculo

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
