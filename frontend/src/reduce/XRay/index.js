import * as ACTION_TYPE from "../../action/types";

const initialState = {
  xray : "",
  points : []
};

export default function XRay(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.GET_XRAY:
      if(action.payload.data.status)
        return { 
          ...state, 
          xray: action.payload.data.image,
          points: action.payload.data.points,
        };
      else
        return { ...state };
    case ACTION_TYPE.SAVE_XRAY:
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
