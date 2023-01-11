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


export const save_xray_points = (points) => {
  
  let data = {
    id : points.id,
    upper_jaw_1x : points.upper_jaw_1x,
    upper_jaw_1y : points.upper_jaw_1y,
    upper_jaw_2x : points.upper_jaw_2x,
    upper_jaw_2y : points.upper_jaw_2y,
    upper_teeth_1x : points.upper_teeth_1x,
    upper_teeth_1y : points.upper_teeth_1y,
    upper_teeth_2x : points.upper_teeth_2x,
    upper_teeth_2y : points.upper_teeth_2y,
    lower_jaw_1x : points.lower_jaw_1x,
    lower_jaw_1y : points.lower_jaw_1y,
    lower_jaw_2x : points.lower_jaw_2x,
    lower_jaw_2y : points.lower_jaw_2y,
    lower_teeth_1x : points.lower_teeth_1x,
    lower_teeth_1y : points.lower_teeth_1y,
    lower_teeth_2x : points.lower_teeth_2x,
    lower_teeth_2y : points.lower_teeth_2y,
  };
  return http.post("/api/save_xray_points", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}

export const get_lower_png = (case_id) => {
  let data = new FormData();
  data.append("case_id", case_id);
  return http.post("/api/get_lower_png", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}
export const save_lower_points = (points) => {
  let data = {
    id : points.id,
    _1_distal_x : points._1_distal_x,
    _1_distal_y : points._1_distal_y,
    _1_mesial_x : points._1_mesial_x,
    _1_mesial_y : points._1_mesial_y,
    _2_distal_x : points._2_distal_x,
    _2_distal_y : points._2_distal_y,
    _2_mesial_x : points._2_mesial_x,
    _2_mesial_y : points._2_mesial_y,
    _3_distal_x : points._3_distal_x,
    _3_distal_y : points._3_distal_y,
    _3_mesial_x : points._3_mesial_x,
    _3_mesial_y : points._3_mesial_y,
    _4_distal_x : points._4_distal_x,
    _4_distal_y : points._4_distal_y,
    _4_mesial_x : points._4_mesial_x,
    _4_mesial_y : points._4_mesial_y,
    _5_distal_x : points._5_distal_x,
    _5_distal_y : points._5_distal_y,
    _5_mesial_x : points._5_mesial_x,
    _5_mesial_y : points._5_mesial_y,
    _6_distal_x : points._6_distal_x,
    _6_distal_y : points._6_distal_y,
    _6_mesial_x : points._6_mesial_x,
    _6_mesial_y : points._6_mesial_y,
    _7_distal_x : points._7_distal_x,
    _7_distal_y : points._7_distal_y,
    _7_mesial_x : points._7_mesial_x,
    _7_mesial_y : points._7_mesial_y,
    _8_distal_x : points._8_distal_x,
    _8_distal_y : points._8_distal_y,
    _8_mesial_x : points._8_mesial_x,
    _8_mesial_y : points._8_mesial_y,
    _9_distal_x : points._9_distal_x,
    _9_distal_y : points._9_distal_y,
    _9_mesial_x : points._9_mesial_x,
    _9_mesial_y : points._9_mesial_y,
    _10_distal_x : points._10_distal_x,
    _10_distal_y : points._10_distal_y,
    _10_mesial_x : points._10_mesial_x,
    _10_mesial_y : points._10_mesial_y,
    _11_distal_x : points._11_distal_x,
    _11_distal_y : points._11_distal_y,
    _11_mesial_x : points._11_mesial_x,
    _11_mesial_y : points._11_mesial_y,
    _12_distal_x : points._12_distal_x,
    _12_distal_y : points._12_distal_y,
    _12_mesial_x : points._12_mesial_x,
    _12_mesial_y : points._12_mesial_y,
    _13_distal_x : points._13_distal_x,
    _13_distal_y : points._13_distal_y,
    _13_mesial_x : points._13_mesial_x,
    _13_mesial_y : points._13_mesial_y,
    _14_distal_x : points._14_distal_x,
    _14_distal_y : points._14_distal_y,
    _14_mesial_x : points._14_mesial_x,
    _14_mesial_y : points._14_mesial_y,
    _6L_x : points._6L_x,
    _6L_y : points._6L_y,
    _5L_x : points._5L_x,
    _5L_y : points._5L_y,
    _4L_x : points._4L_x,
    _4L_y : points._4L_y,
    
  };
  return http.post("/api/save_lower_points", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}

export const get_upper_png = (case_id) => {
  let data = new FormData();
  data.append("case_id", case_id);
  return http.post("/api/get_upper_png", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}

export const save_upper_points = (points) => {
  let data = {
    id : points.id,
    _1_distal_x : points._1_distal_x,
    _1_distal_y : points._1_distal_y,
    _1_mesial_x : points._1_mesial_x,
    _1_mesial_y : points._1_mesial_y,
    _2_distal_x : points._2_distal_x,
    _2_distal_y : points._2_distal_y,
    _2_mesial_x : points._2_mesial_x,
    _2_mesial_y : points._2_mesial_y,
    _3_distal_x : points._3_distal_x,
    _3_distal_y : points._3_distal_y,
    _3_mesial_x : points._3_mesial_x,
    _3_mesial_y : points._3_mesial_y,
    _4_distal_x : points._4_distal_x,
    _4_distal_y : points._4_distal_y,
    _4_mesial_x : points._4_mesial_x,
    _4_mesial_y : points._4_mesial_y,
    _5_distal_x : points._5_distal_x,
    _5_distal_y : points._5_distal_y,
    _5_mesial_x : points._5_mesial_x,
    _5_mesial_y : points._5_mesial_y,
    _6_distal_x : points._6_distal_x,
    _6_distal_y : points._6_distal_y,
    _6_mesial_x : points._6_mesial_x,
    _6_mesial_y : points._6_mesial_y,
    _7_distal_x : points._7_distal_x,
    _7_distal_y : points._7_distal_y,
    _7_mesial_x : points._7_mesial_x,
    _7_mesial_y : points._7_mesial_y,
    _8_distal_x : points._8_distal_x,
    _8_distal_y : points._8_distal_y,
    _8_mesial_x : points._8_mesial_x,
    _8_mesial_y : points._8_mesial_y,
    _9_distal_x : points._9_distal_x,
    _9_distal_y : points._9_distal_y,
    _9_mesial_x : points._9_mesial_x,
    _9_mesial_y : points._9_mesial_y,
    _10_distal_x : points._10_distal_x,
    _10_distal_y : points._10_distal_y,
    _10_mesial_x : points._10_mesial_x,
    _10_mesial_y : points._10_mesial_y,
    _11_distal_x : points._11_distal_x,
    _11_distal_y : points._11_distal_y,
    _11_mesial_x : points._11_mesial_x,
    _11_mesial_y : points._11_mesial_y,
    _12_distal_x : points._12_distal_x,
    _12_distal_y : points._12_distal_y,
    _12_mesial_x : points._12_mesial_x,
    _12_mesial_y : points._12_mesial_y,
    _13_distal_x : points._13_distal_x,
    _13_distal_y : points._13_distal_y,
    _13_mesial_x : points._13_mesial_x,
    _13_mesial_y : points._13_mesial_y,
    _14_distal_x : points._14_distal_x,
    _14_distal_y : points._14_distal_y,
    _14_mesial_x : points._14_mesial_x,
    _14_mesial_y : points._14_mesial_y,
    _6L_x : points._6L_x,
    _6L_y : points._6L_y,
    _5L_x : points._5L_x,
    _5L_y : points._5L_y,
    _4L_x : points._4L_x,
    _4L_y : points._4L_y,
    
  };
  return http.post("/api/save_upper_points", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}


export const get_treatment = (case_id) => {
  let data = new FormData();
  data.append("case_id", case_id);
  return http.post("/api/get_treatment", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}

export const save_note = (case_id, note) => {
  let data = new FormData();
  data.append("case_id", case_id);
  data.append("note", note);
  return http.post("/api/save_note", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}