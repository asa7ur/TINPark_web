import styled from 'styled-components'
import UserButton from './UserButton'

const NavbarBottom = () => {
  return (
    <Wrapper>
      <div className='navbar'>
        <UserButton />
        <UserButton />
        <UserButton />
      </div>
    </Wrapper>
  )
}
export default NavbarBottom

const Wrapper = styled.nav`
  position: sticky;
  bottom: 0;
  z-index: 1000;
  background-color: #030712;

  .navbar{
    padding: 0.5rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  
`
