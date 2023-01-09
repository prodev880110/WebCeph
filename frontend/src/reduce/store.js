import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import FileUploadReducer from "../reduce/FileUpload";
import LowerStlReducer from "../reduce/LowerStl";
import TreatmentPlanReducer from "../reduce/TreatmentPlan";
import UpperStlReducer from "../reduce/UpperStl";
import XRayReducer from "../reduce/XRay";
import saga from "./sagas";

const reducer = combineReducers({
  FileUpload: FileUploadReducer,
  LowerStl: LowerStlReducer,
  TreatmentPlan: TreatmentPlanReducer,
  UpperStl: UpperStlReducer,
  XRay: XRayReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
