import styled from 'styled-components'
import { areas } from '../utils/constants'

const Area = () => {
  return (
    <Wrapper>
      {areas.map((area) => {
        const { name, car, free_space, map } = area
        return (
          <div className='info' key={name}>
            <div className='text'>
              <h3>{name}</h3>
              <h4>
                <span className={car ? 'highlighted' : ''}>
                  {car ? car : 'Ningún vehículo'}
                </span>{' '}
                está aparcado aquí
              </h4>
              <p>
                Hay <span className='highlighted'>{free_space}</span> sitios
                libres
              </p>
            </div>
            <div className='map'>
              <iframe
                src={map}
                width='100%'
                height='150'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Area

const Wrapper = styled.div`
  .info {
    margin-top: 2rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: var(--border);
    background: var(--backgroundColorAlt);
    box-shadow: var(--shadow-4);
  }

  h3 {
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  h4 {
    margin-bottom: 0.25rem;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    text-transform: none;
  }

  .map {
    padding-top: 0.5rem;
  }
`
