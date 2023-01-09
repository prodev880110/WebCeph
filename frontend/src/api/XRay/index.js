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

  
}

export default new UploadFilesService();
