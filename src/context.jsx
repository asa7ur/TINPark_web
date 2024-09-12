import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './reducer'
import {
  SHOW_CAR_STATE,
  HIDE_CAR_STATE,
  SET_VEHICLE,
  TOGGLE_VIEWPORT_HEIGHT,
} from './actions'

// Initial state setup
const initialState = {
  vehicles: [], // Assuming vehicles will be loaded somewhere
  vehicle: null,
  showCarState: false,
  viewportHeight: window.innerHeight,
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Adjust viewport height on window resize
  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: TOGGLE_VIEWPORT_HEIGHT, payload: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const showCarState = () => {
    dispatch({ type: SHOW_CAR_STATE })
  }

  const hideCarState = () => {
    dispatch({ type: HIDE_CAR_STATE })
  }

  const setVehicle = (id, vehicles) => {
    dispatch({ type: SET_VEHICLE, payload: { id, vehicles } })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        showCarState,
        hideCarState,
        setVehicle,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
