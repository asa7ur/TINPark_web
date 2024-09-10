import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

const UserButton = () => {
  return (
    <Wrapper>
      <div className='styled-circle'>
        <FaUserCircle className='icon' />
      </div>
    </Wrapper>
  )
}
export default UserButton

const Wrapper = styled.div`
  .icon {
    font-size: 1.5rem;
  }

  .styled-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #374151, #030712);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25),
      /* Outer shadow */ 0px 0px 20px rgba(0, 0, 0, 0.25); /* Inner shadow */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .styled-circle::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 38% 35%,
      rgba(55, 65, 81, 0.5),
      rgba(3, 7, 18, 0.5)
    );
    border: 1.5px solid rgba(255, 255, 255, 0.5); /* Overlay effect */
    mix-blend-mode: overlay;
    pointer-events: none;
  }
`
