import omit from 'lodash/fp/omit'

const initialState = {
  listings: {},
  byID: [],
}

function listingsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LISTING:
      return {
        ...state,
        listings: {
          ...state.listings,
          [action.payload.listingHash]: action.payload,
        },
      }
    case SET_LISTINGS:
      return {
        ...state,
        listings: {
          ...state.listings,
          ...action.payload.listings,
        },
        byID: [...state.byID, ...action.payload.byID],
      }
    case DELETE_KEY:
      return omit(action.key, state)
    default:
      return state
  }
}

export default listingsReducer