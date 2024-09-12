import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { zones } from '../utils/constants'

const CarState = ({ onClose }) => {
  const [selectedArea, setSelectedArea] = useState('')
  const modalRef = useRef(null)

  const handleRadioChange = (e) => {
    setSelectedArea(e.target.value)
    onClose()
  }

  const handleClickOutside = (e) => {
    if(modalRef.current && !modalRef.current.contains(e.target)){
        onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return()=> {
        document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <div className='content' ref={modalRef}>
        <h4>Corregir el Estado</h4>
        <ul className='zones'>
          <li className='zone'>
            <label>
              <input
                type='radio'
                value='Fuera'
                checked={selectedArea === 'Fuera'}
                onChange={handleRadioChange}
              />
              Fuera
            </label>
          </li>
          {zones.map((zone) => {
            const { id, name } = zone
            return (
              <li key={id} className='zone'>
                <label>
                  <input
                    type='radio'
                    value={name}
                    checked={selectedArea === name}
                    onChange={handleRadioChange}
                  />
                  {name}
                </label>
              </li>
            )
          })}
        </ul>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </Wrapper>
  )
}
export default CarState

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .content {
    background: var(--backgroundColor);
    padding: 1.5rem;
    border: var(--border);
    border-radius: 25px;
    text-align: left;
    max-width: 500px;
    width: 80%;
  }

  h4 {
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  input[type='radio'] {
    margin-right: 0.5rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`
