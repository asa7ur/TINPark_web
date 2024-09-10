import styled from 'styled-components'
import icon_1 from '../assets/MercedesBenz.png'
import icon_2 from '../assets/BMW.png'

const Vehicles = () => {
  return (
    <Wrapper>
      <div className='info'>
        <div className='text'>
          <h3>Coche 1</h3>
          <h4>Matrícula: 1234ABC</h4>
          <p>En Plaza Virgen de Amargura</p>
        </div>
        <div className='icon'>
          <img src={icon_1} alt='' />
        </div>
      </div>
      <div className='info'>
        <div className='text'>
          <h3>Coche 2</h3>
          <h4>Matrícula: SE5678DE</h4>
          <p>Fuera</p>
        </div>
        <div className='icon'>
          <img src={icon_2} alt='' />
        </div>
      </div>
      <div className='info'>
        <div className='text'>
          <h3>Coche 1</h3>
          <h4>Matrícula: 1234ABC</h4>
          <p>En Plaza Virgen de Amargura</p>
        </div>
        <div className='icon'>
          <img src={icon_1} alt='' />
        </div>
      </div>
      <div className='info'>
        <div className='text'>
          <h3>Coche 2</h3>
          <h4>Matrícula: SE5678DE</h4>
          <p>Fuera</p>
        </div>
        <div className='icon'>
          <img src={icon_2} alt='' />
        </div>
      </div>
      <div className='info'>
        <div className='text'>
          <h3>Coche 1</h3>
          <h4>Matrícula: 1234ABC</h4>
          <p>En Plaza Virgen de Amargura</p>
        </div>
        <div className='icon'>
          <img src={icon_1} alt='' />
        </div>
      </div>
      <div className='info'>
        <div className='text'>
          <h3>Coche 2</h3>
          <h4>Matrícula: SE5678DE</h4>
          <p>Fuera</p>
        </div>
        <div className='icon'>
          <img src={icon_2} alt='' />
        </div>
      </div>
    </Wrapper>
  )
}
export default Vehicles

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

  .icon {
    width: 75px;
    height: 75px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
