import React, { useReducer, useContext, useEffect, useCallback } from 'react'
import allReducer from './reducer'
import {
  SELECT_ZONE,
  TOGGLE_MODAL,
  SET_VEHICLE,
  SET_VIEWPORT_HEIGHT,
} from './actions'

const initialState = {
  selectedZone: null,
  isModalOpen: false,
  viewportHeight: window.innerHeight,
  vehicle: null,
  modalType: null,
}

const AllContext = React.createContext()

export const AllProvider = ({ children }) => {
  const [state, dispatch] = useReducer(allReducer, initialState)

  const selectZone = (zone) => {
    dispatch({ type: SELECT_ZONE, payload: zone })
  }

  const toggleModal = (modalType = null) => {
    dispatch({ type: TOGGLE_MODAL, payload: modalType })
  }

  const handleResize = useCallback(() => {
    dispatch({ type: SET_VIEWPORT_HEIGHT, payload: window.innerHeight })
  }, [])

  const setVehicle = (vehicle) => {
    dispatch({ type: SET_VEHICLE, payload: vehicle })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <AllContext.Provider
      value={{
        ...state,
        selectZone,
        toggleModal,
        setViewportHeight: (height) =>
          dispatch({ type: SET_VIEWPORT_HEIGHT, payload: height }),
        setVehicle,
      }}
    >
      {children}
    </AllContext.Provider>
  )
}

export const useAllContext = () => {
  return useContext(AllContext)
}
