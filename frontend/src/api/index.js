import http from "./http-common";

export  const upload = (file, case_id, url, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);
  formData.append("case_id", case_id);

  return http.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

export const getCaseId = () => {
  return http.get("/api/get_case_id");
}

export const get_xray = (case_id) => {
  let data = new FormData();
  data.append("case_id", case_id);
  return http.post("/api/get_xray", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}

