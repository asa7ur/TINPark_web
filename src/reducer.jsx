import {
  SELECT_ZONE,
  TOGGLE_MODAL,
  SET_VEHICLE,
  SET_VIEWPORT_HEIGHT,
} from './actions'

const allReducer = (state, action) => {
  switch (action.type) {
    case SELECT_ZONE:
      return {
        ...state,
        selectedZone: action.payload,
        isModalOpen: false,
        modalType: null,
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        modalType: action.payload,
      }
    case SET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
      }
    case SET_VIEWPORT_HEIGHT:
      return {
        ...state,
        viewportHeight: action.payload,
      }
    default:
      throw new Error(`No matching "${action.type}" - action type`)
  }
}

export default allReducer
