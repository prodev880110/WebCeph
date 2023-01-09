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
                <Breadcrumb.Item>Lower stl</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container">
                Lower stl
                <div className="col-lg-12 row p-b-20">
                  <div className="col-md-6">
                    <Link to="/x_ray_adjustments"> 
                      <button type="button" className="btn btn-info color-white"> Go To Prev </button> 
                    </Link>
                  </div>
                  <div className="col-md-6 text-right">
                    <button type="button" className="btn btn-info color-white"> Save </button> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/upper_stl"> 
                      <button type="button" className="btn btn-info color-white"> Go To Next </button> 
                    </Link>
                  </div>
                </div>
                
              </div>
            </Content>
        )
    }
}
