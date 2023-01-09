import http from "../http-common";

class UploadFilesService {
  upload(file, case_id, url, onUploadProgress) {
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

  getCaseId() {
    return http.get("/api/get_case_id");
  }
}

export default new UploadFilesService();
