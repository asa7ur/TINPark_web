import styled from 'styled-components'
import { NavbarTop, Vehicles } from '../components'

const MisVehiculos = () => {
  return (
    <Wrapper>
      <NavbarTop />
      <div className='section-center'>
        <h2>Tus Vehículos</h2>
        <Vehicles/>
      </div>
    </Wrapper>
  )
}

export default MisVehiculos

const Wrapper = styled.main`
  background: var(--backgroundColor);
  h2 {
    padding-top: 1rem;
  }
`
