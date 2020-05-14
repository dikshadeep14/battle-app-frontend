const initialState = {
  list: null,
  searchedList: null,
  error: null
}

export default function listReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_SEARCHED_LIST':
      return {
        ...state,
        searchedList: action.payload
      };
    case 'GET_LIST':
      return {
        ...state,
        list: action.payload
      }

    case 'ERROR_API':
      return {
        ...state,
        error: action.error
      }

    default:
      return state;    
  }
}
