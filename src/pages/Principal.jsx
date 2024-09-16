import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

const Principal = () => {
  return (
    <Wrapper>
      <img src={logo} className='img' />
      <div className='section-center'>
        <div className='info'>
          <h1>TINPark</h1>
          <h4>
            Control de acceso y ocupación de parking por identificación de
            matrículas
          </h4>
          <Link to='/registro' className='register-link'>
            <button className='button'>Registrarse</button>
          </Link>
          <Link to='/login' className='button'>
            <button className='button'>Entrar</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Principal

const Wrapper = styled.div`
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
