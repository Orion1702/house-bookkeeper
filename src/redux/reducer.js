import { defaultState } from "./defaultState"

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA':
        return {...state, data: action.payload}
        
      case 'UPDATE_ISLOADING':
        return {...state, isLoading: action.payload}
  
      case 'UPDATE_FILTEREDDATA':
        return {...state, filteredData: action.payload}

      case 'UPDATE_TOTALSPEND':
          return {...state, totalSpend: action.payload}
  
      default:
        return state;
    }
}