import styled from 'styled-components'
import { NavbarTop, Vehicles, NavbarBottom } from '../components'

const MisVehiculos = () => {
  return (
    <Wrapper>
      <NavbarTop />
      <div className='section-center'>
        <h2>Tus Vehículos</h2>
        <Vehicles/>
      </div>
      <NavbarBottom/>
    </Wrapper>
  )
}

export default MisVehiculos

const Wrapper = styled.main`
  height: 100vh;
  overflow-y: auto;
  h2 {
    padding-top: 1rem;
  }
`
