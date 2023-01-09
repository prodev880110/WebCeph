
import React , { useState }  from "react";
import { connect } from "react-redux";
import { Breadcrumb, Layout, message} from 'antd';
import * as UploadService from "../../api";
import {Link} from 'react-router-dom';
import "./index.css";
import * as ACTION_TYPE from "../../action/types";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;


class FileUpload extends React.Component{
    
    constructor(props) {
      super(props);
      
      this.selectFile_xray = this.selectFile_xray.bind(this);
      this.upload_xray = this.upload_xray.bind(this);
      this.selectFile_lower = this.selectFile_lower.bind(this);
      this.upload_lower = this.upload_lower.bind(this);
      this.selectFile_upper = this.selectFile_upper.bind(this);
      this.upload_upper = this.upload_upper.bind(this);
  
      this.state = {
        case_id: 0,

        selectedFiles_xray: undefined,
        selectedFiles_preview_xray: undefined,
        currentFile_xray: undefined,
        progress_xray: 0,
        message_xray: "",
        fileInfos_xray: [],
        state_xray: false,
        
        selectedFiles_lower: undefined,
        selectedFiles_preview_lower: undefined,
        currentFile_lower: undefined,
        progress_lower: 0,
        message_lower: "",
        fileInfos_lower: [],
        state_lower: false,
        
        selectedFiles_upper: undefined,
        selectedFiles_preview_upper: undefined,
        currentFile_upper: undefined,
        progress_upper: 0,
        message_upper: "",
        fileInfos_upper: [],
        state_upper: false,
      };

      this.props.GetCaseId()
    }

    

    componentDidMount() {
      UploadService.getCaseId().then((response) => {
        this.setState({
          case_id: response.data,
        });
        this.props.GetCaseId(response.data);
      });
    }
  
    //////    x-ray
    selectFile_xray(event) {
      this.setState({
        selectedFiles_xray: event.target.files,
      });
      var file = event.target.files[0];
      var reader = new FileReader();
      if(file) reader.readAsDataURL(file);
      else this.setState({
        selectedFiles_preview_xray: ""
      })
      reader.onloadend = function (e) {
          this.setState({
              selectedFiles_preview_xray: [reader.result]
          })
        }.bind(this);
    }
  
    upload_xray() {
      let currentFile = this.state.selectedFiles_xray[0];
  
      this.setState({
        progress_xray: 0,
        currentFile_xray: currentFile,
      });
  
      UploadService.upload(currentFile, this.state.case_id, "api/file_upload_xray", (event) => {
        this.setState({
          progress_xray: Math.round((100 * event.loaded) / event.total),
        });
      })
        .then((response) => {
          this.setState({
            message_xray: response.data.message,
          });
        })
        .catch(() => {
          this.setState({
            progress_xray: 0,
            message_xray: "Could not upload the file!",
            currentFile_xray: undefined,
          });
        });
  
      this.setState({
        selectedFiles_xray: undefined,
      });
    }
    /////////   lower
    selectFile_lower(event) {
      this.setState({
        selectedFiles_lower: event.target.files,
      });
      var file = event.target.files[0];
      var reader = new FileReader();
      if(file) reader.readAsDataURL(file);
      else this.setState({
        selectedFiles_preview_lower: ""
      })
      reader.onloadend = function (e) {
          this.setState({
              selectedFiles_preview_lower: [reader.result]
          })
        }.bind(this);
    }
  
    upload_lower() {
      let currentFile = this.state.selectedFiles_lower[0];
  
      this.setState({
        progress_lower: 0,
        currentFile_lower: currentFile,
      });
  
      UploadService.upload(currentFile, this.state.case_id, "api/file_upload_lower", (event) => {
        this.setState({
          progress_lower: Math.round((100 * event.loaded) / event.total),
        });
      })
        .then((response) => {
          this.setState({
            message_lower: response.data.message,
          });
        })
        .catch(() => {
          this.setState({
            progress_lower: 0,
            message_lower: "Could not upload the file!",
            currentFile_lower: undefined,
          });
        });
  
      this.setState({
        selectedFiles_lower: undefined,
      });
    }
    ///////  upper
    selectFile_upper(event) {
      this.setState({
        selectedFiles_upper: event.target.files,
      });
      var file = event.target.files[0];
      var reader = new FileReader();
      if(file) reader.readAsDataURL(file);
      else this.setState({
        selectedFiles_preview_upper: ""
      })
      reader.onloadend = function (e) {
          this.setState({
              selectedFiles_preview_upper: [reader.result]
          })
        }.bind(this);
      }
  
    upload_upper() {
      let currentFile = this.state.selectedFiles_upper[0];
  
      this.setState({
        progress_upper: 0,
        currentFile_upper: currentFile,
      });
  
      UploadService.upload(currentFile, this.state.case_id, "api/file_upload_upper", (event) => {
        this.setState({
          progress_upper: Math.round((100 * event.loaded) / event.total),
        });
      })
        .then((response) => {
          this.setState({
            message_upper: response.data.message,
          });
          
        })
        .catch(() => {
          this.setState({
            progress_upper: 0,
            message_upper: "Could not upload the file!",
            currentFile_upper: undefined,
          });
        });
  
      this.setState({
        selectedFiles_upper: undefined,
      });
    }


    render() {
      const {
        selectedFiles_xray,
        selectedFiles_preview_xray,
        currentFile_xray,
        progress_xray,
        message_xray,
        fileInfos_xray,
        state_xray,
        selectedFiles_lower,
        selectedFiles_preview_lower,
        currentFile_lower,
        progress_lower,
        message_lower,
        fileInfos_lower,
        state_lower,
        selectedFiles_upper,
        selectedFiles_preview_upper,
        currentFile_upper,
        progress_upper,
        message_upper,
        fileInfos_upper,
        state_upper,
      } = this.state;
      
        return (
            <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
              <Breadcrumb className="font-size-18">
                <Breadcrumb.Item>File Upload</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container">
                <div className="col-md-4 p-t-20">
                  {currentFile_xray && (
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={progress_xray}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: progress_xray + "%" }}
                      >
                        {progress_xray}%
                      </div>
                    </div>
                  )}

                  <label className="btn btn-default">
                    <input type="file" onChange={this.selectFile_xray} />
                  </label>
                  <button
                    className="btn btn-success"
                    disabled={!selectedFiles_xray}
                    onClick={this.upload_xray}
                  >
                    X-Ray File Upload
                  </button>

                  <div className="alert alert-light" role="alert">
                    {message_xray}
                  </div>
                  {/* <div className="preview_image_div">
                    {selectedFiles_preview_xray ? (<img alt="previewImage" src={selectedFiles_preview_xray}/>) : (
                      <div className="text-center">
                        
                      </div>
                    )}
                    
                  </div> */}
                  
                </div>
                <div className="col-md-4 p-t-20">
                  {currentFile_lower && (
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={progress_lower}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: progress_lower + "%" }}
                      >
                        {progress_lower}%
                      </div>
                    </div>
                  )}

                  <label className="btn btn-default">
                    <input type="file" onChange={this.selectFile_lower} />
                  </label>
                    
                  <button
                    className="btn btn-success"
                    disabled={!selectedFiles_lower}
                    onClick={this.upload_lower}
                  >
                    Lower File Upload
                  </button>

                  <div className="alert alert-light" role="alert">
                    {message_lower}
                  </div>
                  {/* <div className="preview_image_div">
                    {selectedFiles_preview_lower ? (<img alt="previewImage" src={selectedFiles_preview_lower}/>) : (
                      <div className="text-center">
                        
                      </div>
                    )}
                  </div> */}

                </div>
                <div className="col-md-4 p-t-20">
                  {currentFile_upper && (
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={progress_upper}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: progress_upper + "%" }}
                      >
                        {progress_upper}%
                      </div>
                    </div>
                  )}

                  <label className="btn btn-default">
                    <input type="file" onChange={this.selectFile_upper} />
                  </label>
                    
                  <button
                    className="btn btn-success"
                    disabled={!selectedFiles_upper}
                    onClick={this.upload_upper}
                  >
                    Upper File Upload
                  </button>

                  <div className="alert alert-light" role="alert">
                    {message_upper}
                  </div>
                  {/* <div className="preview_image_div">
                    {selectedFiles_preview_upper ? (<img alt="previewImage" src={selectedFiles_preview_upper}/>) : (
                      <div className="text-center">
                        
                      </div>
                    )}
                    
                  </div> */}
                  
                </div>
                <div className="col-md-12 row text-right p-t-20 p-b-20">
                  <div className="col-md-6">
                    <h3>CASE_ID: {this.state.case_id}</h3>
                  </div>
                  
                  <div className="col-md-6">
                    <Link to="/x_ray_adjustments"> 
                      <button type="button" className="btn btn-info color-white GoNext"> Go To Next </button> 
                    </Link>
                  </div>
                </div>
              </div>
              
            </Content>
        )
    }
}

const mapStateToProps = state => ({
  ...state.FileUpload,
  
});

const mapDispatchToProps = dispatch => ({
  GetCaseId: case_id => dispatch({ type: ACTION_TYPE.GET_CASE_ID, payload: {data: case_id} }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);