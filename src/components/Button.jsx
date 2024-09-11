import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

const Button = ({ icon: Icon, url }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const isActive = location.pathname === url

  const handleClick = () => {
    navigate(url)
  }

  return (
    <Wrapper onClick={handleClick} className={isActive ? 'highlighted' : ''}>
      <div className='btn'>
        <Icon className='icon' />
      </div>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.div`
  cursor: pointer;

  .icon {
    font-size: 1.25rem;
  }

  

`
