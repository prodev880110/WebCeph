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


class UpperStl extends React.Component{
    constructor() {
        super();
        this.state = {
          upper_png: ""
        };
    }
    
    componentDidMount() {
      // Service.get_upper_png(this.props.case_id).then((response) => {
      Service.get_upper_png(1).then((response) => {
        this.setState({
          upper_png: response.data,
        });
        
      });
    }
    render() {
      const {upper_png} = this.state;
        return (
            <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
              <Breadcrumb className="font-size-18">
                <Breadcrumb.Item>Upper stl</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container p-t-20">
                <div className='col-md-12 row'>
                  <div className='col-md-3'></div>
                  <div className='col-md-6 edit-image-panel'>
                    <canvas className='image-editor-canvas' style={{ "background-image": "url("+(process.env.PUBLIC_URL+upper_png)+")" }}></canvas>
                  </div>
                  <div className='col-md-3'></div>
                </div>
                <div className="col-lg-12 row p-b-20">
                  <div className="col-md-6 p-b-20">
                    <Link to="/lower_stl"> 
                      <button type="button" className="btn btn-info color-white"> Go To Prev </button> 
                    </Link>
                  </div>
                  <div className="col-md-6 text-right p-b-20">
                    <button type="button" className="btn btn-info color-white"> Save </button> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/treatment_plan"> 
                      <button type="button" className="btn btn-info color-white"> Get treatment plan </button> 
                    </Link>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpperStl);
