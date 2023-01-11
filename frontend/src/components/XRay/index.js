import { Breadcrumb, Layout} from 'antd';
import React , { useRef, useState }  from "react";
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
          scale_point: 0.5,
          message : "",
          message_type : "",
          x_ray: "",
          upper_jaw_1x : 0,
          upper_jaw_1y : 0,
          upper_jaw_2x : 0,
          upper_jaw_2y : 0,
          upper_teeth_1x : 0,
          upper_teeth_1y : 0,
          upper_teeth_2x : 0,
          upper_teeth_2y : 0,
          lower_jaw_1x : 0,
          lower_jaw_1y : 0,
          lower_jaw_2x : 0,
          lower_jaw_2y : 0,
          lower_teeth_1x : 0,
          lower_teeth_1y : 0,
          lower_teeth_2x : 0,
          lower_teeth_2y : 0,
        };
        
    }
    
    onDrag = (evt, id) => {
      evt.preventDefault();
      let element = evt.currentTarget;
      let div_x = document.getElementById("image-editor-canvas-xray").offsetLeft;
      let div_y = document.getElementById("image-editor-canvas-xray").offsetTop;
      let p_x = evt.pageX - div_x;
      let p_y = evt.pageY - div_y;
      if(p_x < 0) p_x = 0;
      else if(p_x > 656) p_x = 656;
      if(p_y < 0) p_y = 0;
      else if(p_y > 650) p_y = 650;
      if(evt.pageX > 0 && evt.pageY > 0)
      {
        switch (id) {
          case "upper_jaw_1":
            this.setState({
              upper_jaw_1x: p_x / this.state.scale_point,
              upper_jaw_1y: p_y / this.state.scale_point,
            });
            break;
          case "upper_jaw_2":
            this.setState({
              upper_jaw_2x: p_x / this.state.scale_point,
              upper_jaw_2y: p_y / this.state.scale_point,
            });
            break;
          case "upper_teeth_1":
            this.setState({
              upper_teeth_1x: p_x / this.state.scale_point,
              upper_teeth_1y: p_y / this.state.scale_point,
            });
            break;
          case "upper_teeth_2":
            this.setState({
              upper_teeth_2x: p_x / this.state.scale_point,
              upper_teeth_2y: p_y / this.state.scale_point,
            });
            break;
          case "lower_jaw_1":
            this.setState({
              lower_jaw_1x: p_x / this.state.scale_point,
              lower_jaw_1y: p_y / this.state.scale_point,
            });
            break;
          case "lower_jaw_2":
            this.setState({
              lower_jaw_2x: p_x / this.state.scale_point,
              lower_jaw_2y: p_y / this.state.scale_point,
            });
            break;
          case "lower_teeth_1":
            this.setState({
              lower_teeth_1x: p_x / this.state.scale_point,
              lower_teeth_1y: p_y / this.state.scale_point,
            });
            break;
          case "lower_teeth_2":
            this.setState({
              lower_teeth_2x: p_x / this.state.scale_point,
              lower_teeth_2y: p_y / this.state.scale_point,
            });
            break;
        
          default:
            break;
        }
      }
      this.setState({
        message : "",
        message_type : ""
      });
    }
    savePositions() {
      let data = {
        // id : this.props.case_id,
        id : 1,
        upper_jaw_1x : this.state.upper_jaw_1x,
        upper_jaw_1y : this.state.upper_jaw_1y,
        upper_jaw_2x : this.state.upper_jaw_2x,
        upper_jaw_2y : this.state.upper_jaw_2y,
        upper_teeth_1x : this.state.upper_teeth_1x,
        upper_teeth_1y : this.state.upper_teeth_1y,
        upper_teeth_2x : this.state.upper_teeth_2x,
        upper_teeth_2y : this.state.upper_teeth_2y,
        lower_jaw_1x : this.state.lower_jaw_1x,
        lower_jaw_1y : this.state.lower_jaw_1y,
        lower_jaw_2x : this.state.lower_jaw_2x,
        lower_jaw_2y : this.state.lower_jaw_2y,
        lower_teeth_1x : this.state.lower_teeth_1x,
        lower_teeth_1y : this.state.lower_teeth_1y,
        lower_teeth_2x : this.state.lower_teeth_2x,
        lower_teeth_2y : this.state.lower_teeth_2y,
      };
      Service.save_xray_points(data).then((response) => {
        let res = response.data;
        this.setState({
          message : res.msg,
          message_type : res.msg_type
        });
      });
    }
    componentDidMount() {
      Service.get_xray(this.props.case_id).then((response) => {
      // Service.get_xray(1).then((response) => {
        let res = response.data;
        this.setState({
          x_ray: res.x_ray,
          upper_jaw_1x : res.upper_jaw_1x,
          upper_jaw_1y : res.upper_jaw_1y,
          upper_jaw_2x : res.upper_jaw_2x,
          upper_jaw_2y : res.upper_jaw_2y,
          upper_teeth_1x : res.upper_teeth_1x,
          upper_teeth_1y : res.upper_teeth_1y,
          upper_teeth_2x : res.upper_teeth_2x,
          upper_teeth_2y : res.upper_teeth_2y,
          lower_jaw_1x : res.lower_jaw_1x,
          lower_jaw_1y : res.lower_jaw_1y,
          lower_jaw_2x : res.lower_jaw_2x,
          lower_jaw_2y : res.lower_jaw_2y,
          lower_teeth_1x : res.lower_teeth_1x,
          lower_teeth_1y : res.lower_teeth_1y,
          lower_teeth_2x : res.lower_teeth_2x,
          lower_teeth_2y : res.lower_teeth_2y,
          
        });
        
      });
    }
    render() {
      const {message_type, message, scale_point, x_ray, upper_jaw_1x, upper_jaw_1y, upper_jaw_2x, upper_jaw_2y, upper_teeth_1x, upper_teeth_1y, upper_teeth_2x, upper_teeth_2y, lower_jaw_1x, lower_jaw_1y, lower_jaw_2x, lower_jaw_2y, lower_teeth_1x, lower_teeth_1y, lower_teeth_2x, lower_teeth_2y} = this.state;
      
        return (
            <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
              <Breadcrumb className="font-size-18">
                <Breadcrumb.Item>X Ray adjustments</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container p-t-20">
                <div className='col-md-12 row'>
                  <div className='col-md-3'></div>
                  <div className='col-md-6 edit-image-panel-xray'>
                    <div id='image-editor-canvas-xray' className='image-editor-canvas-xray' style={{ "background-image": "url("+(process.env.PUBLIC_URL+x_ray)+")" }}>
                      <img style={{left: upper_jaw_1x * scale_point, top: upper_jaw_1y * scale_point}} className='point' onDrag={e => this.onDrag(e, "upper_jaw_1")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img style={{left: upper_jaw_2x * scale_point, top: upper_jaw_2y * scale_point}} className='point' onDrag={e => this.onDrag(e, "upper_jaw_2")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img style={{left: upper_teeth_1x * scale_point, top: upper_teeth_1y * scale_point}} className='point' onDrag={e => this.onDrag(e, "upper_teeth_1")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img style={{left: upper_teeth_2x * scale_point, top: upper_teeth_2y * scale_point}} className='point' onDrag={e => this.onDrag(e, "upper_teeth_2")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img style={{left: lower_jaw_1x * scale_point, top: lower_jaw_1y * scale_point}} className='point' onDrag={e => this.onDrag(e, "lower_jaw_1")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img style={{left: lower_jaw_2x * scale_point, top: lower_jaw_2y * scale_point}} className='point' onDrag={e => this.onDrag(e, "lower_jaw_2")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img style={{left: lower_teeth_1x * scale_point, top: lower_teeth_1y * scale_point}} className='point' onDrag={e => this.onDrag(e, "lower_teeth_1")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img style={{left: lower_teeth_2x * scale_point, top: lower_teeth_2y * scale_point}} className='point' onDrag={e => this.onDrag(e, "lower_teeth_2")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      
                    </div>
                  </div>
                  <div className='col-md-3'></div>
                </div>
                
                <div className="col-md-12 text-right p-b-20 p-t-20">
                  <div className={"text-left alert "+message_type} role="alert">
                    {message}
                  </div>
                  <button type="button" className="btn btn-info color-white" onClick={e => this.savePositions()}> Save </button> 
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