import { Breadcrumb, Layout} from 'antd';
import React  from "react";
import { connect } from "react-redux";
import "./index.css";
import {Link} from 'react-router-dom';
import * as Service from "../../api";
const { Content } = Layout;


class LowerStl extends React.Component{
    constructor() {
        super();
        this.state = {
          lower_png: "",
          scale_point: 0.5,
          message : "",
          message_type : "",
          _1_distal_x : 0,
          _1_distal_y : 0,
          _1_mesial_x : 0,
          _1_mesial_y : 0,
          _2_distal_x : 0,
          _2_distal_y : 0,
          _2_mesial_x : 0,
          _2_mesial_y : 0,
          _3_distal_x : 0,
          _3_distal_y : 0,
          _3_mesial_x : 0,
          _3_mesial_y : 0,
          _4_distal_x : 0,
          _4_distal_y : 0,
          _4_mesial_x : 0,
          _4_mesial_y : 0,
          _5_distal_x : 0,
          _5_distal_y : 0,
          _5_mesial_x : 0,
          _5_mesial_y : 0,
          _6_distal_x : 0,
          _6_distal_y : 0,
          _6_mesial_x : 0,
          _6_mesial_y : 0,
          _7_distal_x : 0,
          _7_distal_y : 0,
          _7_mesial_x : 0,
          _7_mesial_y : 0,
          _8_distal_x : 0,
          _8_distal_y : 0,
          _8_mesial_x : 0,
          _8_mesial_y : 0,
          _9_distal_x : 0,
          _9_distal_y : 0,
          _9_mesial_x : 0,
          _9_mesial_y : 0,
          _10_distal_x : 0,
          _10_distal_y : 0,
          _10_mesial_x : 0,
          _10_mesial_y : 0,
          _11_distal_x : 0,
          _11_distal_y : 0,
          _11_mesial_x : 0,
          _11_mesial_y : 0,
          _12_distal_x : 0,
          _12_distal_y : 0,
          _12_mesial_x : 0,
          _12_mesial_y : 0,
          _13_distal_x : 0,
          _13_distal_y : 0,
          _13_mesial_x : 0,
          _13_mesial_y : 0,
          _14_distal_x : 0,
          _14_distal_y : 0,
          _14_mesial_x : 0,
          _14_mesial_y : 0,
          _6L_x : 0,
          _6L_y : 0,
          _5L_x : 0,
          _5L_y : 0,
          _4L_x : 0,
          _4L_y : 0,
        };
    }
    onDrag = (evt, id) => {
      evt.preventDefault();
      let div_x = document.getElementById("image-editor-canvas-lower").offsetLeft;
      let div_y = document.getElementById("image-editor-canvas-lower").offsetTop;
      let p_x = evt.pageX - div_x;
      let p_y = evt.pageY - div_y;
      if(p_x < 0) p_x = 0;
      else if(p_x > 952) p_x = 952;
      if(p_y < 0) p_y = 0;
      else if(p_y > 540) p_y = 540;
      if(evt.pageX > 0 && evt.pageY > 0)
      {
        switch (id) {
          case "_1_distal":
            this.setState({
              _1_distal_x: p_x / this.state.scale_point,
              _1_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_1_mesial":
            this.setState({
              _1_mesial_x: p_x / this.state.scale_point,
              _1_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_2_distal":
            this.setState({
              _2_distal_x: p_x / this.state.scale_point,
              _2_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_2_mesial":
            this.setState({
              _2_mesial_x: p_x / this.state.scale_point,
              _2_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_3_distal":
            this.setState({
              _3_distal_x: p_x / this.state.scale_point,
              _3_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_3_mesial":
            this.setState({
              _3_mesial_x: p_x / this.state.scale_point,
              _3_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_4_distal":
            this.setState({
              _4_distal_x: p_x / this.state.scale_point,
              _4_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_4_mesial":
            this.setState({
              _4_mesial_x: p_x / this.state.scale_point,
              _4_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_5_distal":
            this.setState({
              _5_distal_x: p_x / this.state.scale_point,
              _5_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_5_mesial":
            this.setState({
              _5_mesial_x: p_x / this.state.scale_point,
              _5_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_6_distal":
            this.setState({
              _6_distal_x: p_x / this.state.scale_point,
              _6_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_6_mesial":
            this.setState({
              _6_mesial_x: p_x / this.state.scale_point,
              _6_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_7_distal":
            this.setState({
              _7_distal_x: p_x / this.state.scale_point,
              _7_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_7_mesial":
            this.setState({
              _7_mesial_x: p_x / this.state.scale_point,
              _7_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_8_distal":
            this.setState({
              _8_distal_x: p_x / this.state.scale_point,
              _8_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_8_mesial":
            this.setState({
              _8_mesial_x: p_x / this.state.scale_point,
              _8_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_9_distal":
            this.setState({
              _9_distal_x: p_x / this.state.scale_point,
              _9_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_9_mesial":
            this.setState({
              _9_mesial_x: p_x / this.state.scale_point,
              _9_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_10_distal":
            this.setState({
              _10_distal_x: p_x / this.state.scale_point,
              _10_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_10_mesial":
            this.setState({
              _10_mesial_x: p_x / this.state.scale_point,
              _10_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_11_distal":
            this.setState({
              _11_distal_x: p_x / this.state.scale_point,
              _11_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_11_mesial":
            this.setState({
              _11_mesial_x: p_x / this.state.scale_point,
              _11_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_12_distal":
            this.setState({
              _12_distal_x: p_x / this.state.scale_point,
              _12_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_12_mesial":
            this.setState({
              _12_mesial_x: p_x / this.state.scale_point,
              _12_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_13_distal":
            this.setState({
              _13_distal_x: p_x / this.state.scale_point,
              _13_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_13_mesial":
            this.setState({
              _13_mesial_x: p_x / this.state.scale_point,
              _13_mesial_y: p_y / this.state.scale_point,
            });
            break;
          case "_14_distal":
            this.setState({
              _14_distal_x: p_x / this.state.scale_point,
              _14_distal_y: p_y / this.state.scale_point,
            });
            break;
          case "_14_mesial":
            this.setState({
              _14_mesial_x: p_x / this.state.scale_point,
              _14_mesial_y: p_y / this.state.scale_point,
            });
            break;
            
          case "_6L":
            this.setState({
              _6L_x: p_x / this.state.scale_point,
              _6L_y: p_y / this.state.scale_point,
            });
            break;
          case "_5L":
            this.setState({
              _5L_x: p_x / this.state.scale_point,
              _5L_y: p_y / this.state.scale_point,
            });
            break;
          case "_4L":
            this.setState({
              _4L_x: p_x / this.state.scale_point,
              _4L_y: p_y / this.state.scale_point,
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
        id : this.props.case_id,
        _1_distal_x : this.state._1_distal_x,
        _1_distal_y : this.state._1_distal_y,
        _1_mesial_x : this.state._1_mesial_x,
        _1_mesial_y : this.state._1_mesial_y,
        _2_distal_x : this.state._2_distal_x,
        _2_distal_y : this.state._2_distal_y,
        _2_mesial_x : this.state._2_mesial_x,
        _2_mesial_y : this.state._2_mesial_y,
        _3_distal_x : this.state._3_distal_x,
        _3_distal_y : this.state._3_distal_y,
        _3_mesial_x : this.state._3_mesial_x,
        _3_mesial_y : this.state._3_mesial_y,
        _4_distal_x : this.state._4_distal_x,
        _4_distal_y : this.state._4_distal_y,
        _4_mesial_x : this.state._4_mesial_x,
        _4_mesial_y : this.state._4_mesial_y,
        _5_distal_x : this.state._5_distal_x,
        _5_distal_y : this.state._5_distal_y,
        _5_mesial_x : this.state._5_mesial_x,
        _5_mesial_y : this.state._5_mesial_y,
        _6_distal_x : this.state._6_distal_x,
        _6_distal_y : this.state._6_distal_y,
        _6_mesial_x : this.state._6_mesial_x,
        _6_mesial_y : this.state._6_mesial_y,
        _7_distal_x : this.state._7_distal_x,
        _7_distal_y : this.state._7_distal_y,
        _7_mesial_x : this.state._7_mesial_x,
        _7_mesial_y : this.state._7_mesial_y,
        _8_distal_x : this.state._8_distal_x,
        _8_distal_y : this.state._8_distal_y,
        _8_mesial_x : this.state._8_mesial_x,
        _8_mesial_y : this.state._8_mesial_y,
        _9_distal_x : this.state._9_distal_x,
        _9_distal_y : this.state._9_distal_y,
        _9_mesial_x : this.state._9_mesial_x,
        _9_mesial_y : this.state._9_mesial_y,
        _10_distal_x : this.state._10_distal_x,
        _10_distal_y : this.state._10_distal_y,
        _10_mesial_x : this.state._10_mesial_x,
        _10_mesial_y : this.state._10_mesial_y,
        _11_distal_x : this.state._11_distal_x,
        _11_distal_y : this.state._11_distal_y,
        _11_mesial_x : this.state._11_mesial_x,
        _11_mesial_y : this.state._11_mesial_y,
        _12_distal_x : this.state._12_distal_x,
        _12_distal_y : this.state._12_distal_y,
        _12_mesial_x : this.state._12_mesial_x,
        _12_mesial_y : this.state._12_mesial_y,
        _13_distal_x : this.state._13_distal_x,
        _13_distal_y : this.state._13_distal_y,
        _13_mesial_x : this.state._13_mesial_x,
        _13_mesial_y : this.state._13_mesial_y,
        _14_distal_x : this.state._14_distal_x,
        _14_distal_y : this.state._14_distal_y,
        _14_mesial_x : this.state._14_mesial_x,
        _14_mesial_y : this.state._14_mesial_y,
        _6L_x : this.state._6L_x,
        _6L_y : this.state._6L_y,
        _5L_x : this.state._5L_x,
        _5L_y : this.state._5L_y,
        _4L_x : this.state._4L_x,
        _4L_y : this.state._4L_y,
        
      };
      Service.save_lower_points(data).then((response) => {
        let res = response.data;
        this.setState({
          message : res.msg,
          message_type : res.msg_type
        });
      });
    }
    componentDidMount() {
      Service.get_lower_png(this.props.case_id).then((response) => {
      // Service.get_lower_png(1).then((response) => {
        let res = response.data;
        this.setState({
          lower_png: res.lower_png,
          _1_distal_x : res._1_distal_x,
          _1_distal_y : res._1_distal_y,
          _1_mesial_x : res._1_mesial_x,
          _1_mesial_y : res._1_mesial_y,
          _2_distal_x : res._2_distal_x,
          _2_distal_y : res._2_distal_y,
          _2_mesial_x : res._2_mesial_x,
          _2_mesial_y : res._2_mesial_y,
          _3_distal_x : res._3_distal_x,
          _3_distal_y : res._3_distal_y,
          _3_mesial_x : res._3_mesial_x,
          _3_mesial_y : res._3_mesial_y,
          _4_distal_x : res._4_distal_x,
          _4_distal_y : res._4_distal_y,
          _4_mesial_x : res._4_mesial_x,
          _4_mesial_y : res._4_mesial_y,
          _5_distal_x : res._5_distal_x,
          _5_distal_y : res._5_distal_y,
          _5_mesial_x : res._5_mesial_x,
          _5_mesial_y : res._5_mesial_y,
          _6_distal_x : res._6_distal_x,
          _6_distal_y : res._6_distal_y,
          _6_mesial_x : res._6_mesial_x,
          _6_mesial_y : res._6_mesial_y,
          _7_distal_x : res._7_distal_x,
          _7_distal_y : res._7_distal_y,
          _7_mesial_x : res._7_mesial_x,
          _7_mesial_y : res._7_mesial_y,
          _8_distal_x : res._8_distal_x,
          _8_distal_y : res._8_distal_y,
          _8_mesial_x : res._8_mesial_x,
          _8_mesial_y : res._8_mesial_y,
          _9_distal_x : res._9_distal_x,
          _9_distal_y : res._9_distal_y,
          _9_mesial_x : res._9_mesial_x,
          _9_mesial_y : res._9_mesial_y,
          _10_distal_x : res._10_distal_x,
          _10_distal_y : res._10_distal_y,
          _10_mesial_x : res._10_mesial_x,
          _10_mesial_y : res._10_mesial_y,
          _11_distal_x : res._11_distal_x,
          _11_distal_y : res._11_distal_y,
          _11_mesial_x : res._11_mesial_x,
          _11_mesial_y : res._11_mesial_y,
          _12_distal_x : res._12_distal_x,
          _12_distal_y : res._12_distal_y,
          _12_mesial_x : res._12_mesial_x,
          _12_mesial_y : res._12_mesial_y,
          _13_distal_x : res._13_distal_x,
          _13_distal_y : res._13_distal_y,
          _13_mesial_x : res._13_mesial_x,
          _13_mesial_y : res._13_mesial_y,
          _14_distal_x : res._14_distal_x,
          _14_distal_y : res._14_distal_y,
          _14_mesial_x : res._14_mesial_x,
          _14_mesial_y : res._14_mesial_y,
          _6L_x : res._6L_x,
          _6L_y : res._6L_y,
          _5L_x : res._5L_x,
          _5L_y : res._5L_y,
          _4L_x : res._4L_x,
          _4L_y : res._4L_y,

        });
        
        
      });
    }
    render() {
      const {message_type, message, scale_point, lower_png, _1_distal_x, _1_distal_y, _1_mesial_x, _1_mesial_y, _2_distal_x, _2_distal_y, _2_mesial_x, _2_mesial_y, _3_distal_x, _3_distal_y, _3_mesial_x, _3_mesial_y, _4_distal_x, _4_distal_y, _4_mesial_x, _4_mesial_y, _5_distal_x, _5_distal_y, _5_mesial_x, _5_mesial_y, _6_distal_x, _6_distal_y, _6_mesial_x, _6_mesial_y, _7_distal_x, _7_distal_y, _7_mesial_x, _7_mesial_y, _8_distal_x, _8_distal_y, _8_mesial_x, _8_mesial_y, _9_distal_x, _9_distal_y, _9_mesial_x, _9_mesial_y, _10_distal_x, _10_distal_y, _10_mesial_x, _10_mesial_y, _11_distal_x, _11_distal_y, _11_mesial_x, _11_mesial_y, _12_distal_x, _12_distal_y, _12_mesial_x, _12_mesial_y, _13_distal_x, _13_distal_y, _13_mesial_x, _13_mesial_y, _14_distal_x, _14_distal_y, _14_mesial_x, _14_mesial_y} = this.state;
        return (
            <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
              <Breadcrumb className="font-size-18">
                <Breadcrumb.Item>Lower stl</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container p-t-20">
                <div className='col-md-12 row'>
                  <div className='col-md-3'></div>
                  <div className='col-md-6 edit-image-panel-lower'>
                    <div id='image-editor-canvas-lower' className='image-editor-canvas-lower' style={{ "background-image": "url("+(process.env.PUBLIC_URL+lower_png)+")" }}>
                      <img alt="" style={{left: _1_distal_x * scale_point, top: _1_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_1_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _1_mesial_x * scale_point, top: _1_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_1_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _2_distal_x * scale_point, top: _2_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_2_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _2_mesial_x * scale_point, top: _2_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_2_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _3_distal_x * scale_point, top: _3_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_3_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _3_mesial_x * scale_point, top: _3_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_3_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _4_distal_x * scale_point, top: _4_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_4_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _4_mesial_x * scale_point, top: _4_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_4_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _5_distal_x * scale_point, top: _5_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_5_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _5_mesial_x * scale_point, top: _5_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_5_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _6_distal_x * scale_point, top: _6_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_6_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _6_mesial_x * scale_point, top: _6_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_6_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _7_distal_x * scale_point, top: _7_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_7_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _7_mesial_x * scale_point, top: _7_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_7_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _8_distal_x * scale_point, top: _8_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_8_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _8_mesial_x * scale_point, top: _8_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_8_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _9_distal_x * scale_point, top: _9_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_9_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _9_mesial_x * scale_point, top: _9_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_9_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _10_distal_x * scale_point, top: _10_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_10_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _10_mesial_x * scale_point, top: _10_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_10_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _11_distal_x * scale_point, top: _11_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_11_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _11_mesial_x * scale_point, top: _11_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_11_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _12_distal_x * scale_point, top: _12_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_12_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _12_mesial_x * scale_point, top: _12_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_12_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _13_distal_x * scale_point, top: _13_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_13_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _13_mesial_x * scale_point, top: _13_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_13_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _14_distal_x * scale_point, top: _14_distal_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_14_distal")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      <img alt="" style={{left: _14_mesial_x * scale_point, top: _14_mesial_y * scale_point}} className='point' onDrag={e => this.onDrag(e, "_14_mesial")} src={process.env.PUBLIC_URL+"point_normal.svg"}/>
                      
                    </div>
                  </div>
                  <div className='col-md-3'></div>
                </div>
                <div className="col-lg-12 row p-b-20 p-t-20">
                  <div className={"alert "+message_type} role="alert">
                    {message}
                  </div>
                  <div className="col-md-6">
                    <Link to="/x_ray_adjustments"> 
                      <button type="button" className="btn btn-info color-white"> Go To Prev </button> 
                    </Link>
                  </div>
                  <div className="col-md-6 text-right">
                    <button type="button" className="btn btn-info color-white" onClick={e => this.savePositions()}> Save </button> 
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

const mapStateToProps = state => ({
  case_id : state.FileUpload.case_id
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(LowerStl);