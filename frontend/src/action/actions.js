import * as ACTION_TYPE from "./types";

export function getCaseId(data) {
  return { type: ACTION_TYPE.GET_CASE_ID, payload: data };
}
