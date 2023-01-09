import { Breadcrumb, Layout} from 'antd';
import React , { useState }  from "react";
import "./index.css";
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
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
                Bill is a cat.
              </div>
            </Content>
        )
    }
}
