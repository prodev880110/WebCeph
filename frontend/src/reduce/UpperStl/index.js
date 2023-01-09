import * as ACTION_TYPE from "../../action/types";

const initialState = {
  upper_png : "",
  points : []
};

export default function UpperStl(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.GET_UPPER:
      if(action.payload.data.status)
        return { 
          ...state, 
          upper_png: action.payload.data.image,
          points: action.payload.data.points,
        };
      else
        return { ...state };
    case ACTION_TYPE.SAVE_UPPER:
      if(action.payload.data.status)
        return { 
          ...state, 
          
        };
      else
        return { ...state };
    
    default:
      return state;
  }
}
