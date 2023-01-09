import { Breadcrumb, Layout} from 'antd';
import React , { useState }  from "react";
import "./index.css";
import {Link} from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;


export default class WrapContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
              <Breadcrumb className="font-size-18">
                <Breadcrumb.Item>Upper stl</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container">
                Upper stl Image
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
