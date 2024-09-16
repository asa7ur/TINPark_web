import styled from 'styled-components'
import { Link, useRouteError } from 'react-router-dom'
import { useAllContext } from '../context'
import { NavbarBottom } from '../components'

const Error = () => {
  const { viewportHeight } = useAllContext()
  const error = useRouteError()
  console.log(error)

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <div className='section-center'>
        <h1>Página no encontrada</h1>
        <Link to='/'>
          <button>Volver</button>
        </Link>
      </div>
      <NavbarBottom />
    </Wrapper>
  )
}
export default Error

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  h2 {
    padding-top: 3rem;
  }
`
