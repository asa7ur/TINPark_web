import {
  SHOW_CAR_STATE,
  HIDE_CAR_STATE,
  SET_VEHICLE,
  TOGGLE_VIEWPORT_HEIGHT,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_CAR_STATE:
      return {
        ...state,
        showCarState: true,
      }

    case HIDE_CAR_STATE:
      return {
        ...state,
        showCarState: false,
      }

    case SET_VEHICLE:
      const selectedVehicle = action.payload.vehicles.find(
        (vehicle) => vehicle.id === parseInt(action.payload.id)
      )
      return {
        ...state,
        vehicle: selectedVehicle || null,
      }

    case TOGGLE_VIEWPORT_HEIGHT:
      return {
        ...state,
        viewportHeight: action.payload,
      }

    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default reducer
