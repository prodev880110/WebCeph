import * as ACTION_TYPE from "../../action/types";

const initialState = {
  lower_png : "",
  points : []
};

export default function LowerStl(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.GET_LOWER:
      if(action.payload.data.status)
        return { 
          ...state, 
          lower_png: action.payload.data.image,
          points: action.payload.data.points,
        };
      else
        return { ...state };
    case ACTION_TYPE.SAVE_LOWER:
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
