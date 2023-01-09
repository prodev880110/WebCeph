import * as ACTION_TYPE from "../../action/types";

const initialState = {
  case_id : 0,
  
};

export default function FileUpload(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.GET_CASE_ID:
      
      return { 
        ...state, 
        case_id: action.payload.data
      };
      
    
    default:
      return state;
  }
}
