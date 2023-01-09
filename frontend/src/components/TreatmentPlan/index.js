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
                <Breadcrumb.Item>Treatment plan</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container">
                Treatment plan
                
                <div className="col-md-12 p-b-20">
                  <Link to="/upper_stl"> 
                    <button type="button" className="btn btn-info color-white"> Go To Prev </button> 
                  </Link>
                </div>
              </div>
            </Content>
        )
    }
}
