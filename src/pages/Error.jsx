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
        <h2>Página no encontrada</h2>
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
  
  .section-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
   h2{
    margin-bottom: 1rem;
   }

   button{
    font-size: 1.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
   }
`
