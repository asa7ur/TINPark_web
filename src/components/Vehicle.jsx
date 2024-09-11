import styled from 'styled-components'
import { cars } from '../utils/constants'

const Vehicle = () => {
  return (
    <Wrapper>
      {cars.map((car) => {
        const { name, plate, parked, icon, alt_name } = car
        return (
          <div className='info'>
            <div className='text'>
              <h3>{name}</h3>
              <h4>Matrícula: {plate}</h4>
              <p>
                {parked ? 'En ' : 'Fuera'}
                {parked && <span className='highlighted'>{parked}</span>}
              </p>
            </div>
            <div className='icon'>
              <img src={icon} alt={alt_name} className='img' />
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}
export default Vehicle

const Wrapper = styled.div`
  .info {
    margin-top: 2rem;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 25px;
    border: var(--border);
    background: var(--backgroundColorAlt);
    box-shadow: var(--shadow-4);
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-bottom: 0.25rem;
    font-weight: 400;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .icon {
    width: 75px;
    height: 75px;
  }
`
