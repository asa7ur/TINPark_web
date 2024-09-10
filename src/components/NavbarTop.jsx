import styled from 'styled-components'
import UserButton from './UserButton'

const NavbarTop = () => {
  return (
    <Wrapper>
      <div className='section'>
        <div className='section-center'>
          <h1>Hola, Garik!</h1>
          <UserButton/>
        </div>
      </div>
    </Wrapper>
  )
}
export default NavbarTop

const Wrapper = styled.div`
  border-bottom: var(--border);

  .section {
    padding-bottom: 0.5rem;
  }

  .section-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
