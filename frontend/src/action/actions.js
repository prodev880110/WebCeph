import * as ACTION_TYPE from "./types";
import * as API from "../api"

export function getCaseId(data) {
  return { type: ACTION_TYPE.GET_CASE_ID, payload: data };
}
