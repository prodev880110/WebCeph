import { Breadcrumb, Layout} from 'antd';
import React , { useState }  from "react";
import { connect } from "react-redux";
import "./index.css";
import {Link} from 'react-router-dom';
import * as Service from "../../api";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;


class XRay extends React.Component{
    constructor() {
        super();
        this.state = {
          x_ray: ""
        };
    }
    componentDidMount() {
      // Service.get_xray(this.props.case_id).then((response) => {
      Service.get_xray(1).then((response) => {
        this.setState({
          x_ray: response.data,
        });
        
      });
    }
    render() {
      const {x_ray} = this.state;
        return (
            <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
              <Breadcrumb className="font-size-18">
                <Breadcrumb.Item>X Ray adjustments</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container p-t-20">
                <div className='col-md-12 row'>
                  <div className='col-md-3'></div>
                  <div className='col-md-6 edit-image-panel'>
                    <canvas className='image-editor-canvas' style={{ "background-image": "url("+(process.env.PUBLIC_URL+x_ray)+")" }}></canvas>
                  </div>
                  <div className='col-md-3'></div>
                </div>
                
                <div className="col-md-12 text-right p-b-20">
                  <button type="button" className="btn btn-info color-white"> Save </button> 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/lower_stl"> 
                    <button type="button" className="btn btn-info color-white"> Go To Next </button> 
                  </Link>
                </div>
              </div>
            </Content>
        )
    }
}


const mapStateToProps = state => ({
  case_id : state.FileUpload.case_id
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(XRay);