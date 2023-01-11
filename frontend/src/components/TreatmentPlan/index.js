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


class TreatmentPlan extends React.Component{
    constructor() {
        super();
        this.state = {
          scale_point: 0.5,
          message : "",
          message_type : "",
          x_ray: "",
          lower: "",
          upper: "",
          note: "",
        }
    }
    onChangeNote(evt) {
      this.setState({
        note: evt.target.value
      });
    }
    saveNote() {
      Service.save_note(this.props.case_id, this.state.note).then((response) => {
        let res = response.data;
        this.setState({
          message : res.msg,
          message_type : res.msg_type
        });
      });
    }
    componentDidMount() {
      Service.get_treatment(this.props.case_id).then((response) => {
        let res = response.data;
        this.setState({
          x_ray: res.x_ray,
          lower: res.lower,
          upper: res.upper,
          note: res.note
        });
        
      });
    }
    render() {
      const {x_ray, lower, upper, message, message_type, note} = this.state
        return (
            <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
              <Breadcrumb className="font-size-18">
                <Breadcrumb.Item>Treatment plan</Breadcrumb.Item>
              </Breadcrumb>
              <div className="row main-container p-t-20">
                
                <div className='col-4 treatmentplan-image'>
                  <img src={process.env.PUBLIC_URL+x_ray}/>
                </div>
                <div className='col-4 treatmentplan-image'>
                  <img src={process.env.PUBLIC_URL+lower}/>
                </div>
                <div className='col-4 treatmentplan-image'>
                  <img src={process.env.PUBLIC_URL+upper}/>
                </div>
                <div className='col-md-12 row p-t-20'>
                  <div className='col-md-3'></div>
                  <div className='col-md-6'>
                    <h4>Note: {note}</h4>
                  </div>
                  <div className='col-md-3'></div>
                </div>
                <div className="col-md-12 row p-b-20 p-t-20">
                  <div className='col-md-6'>
                    <Link to="/upper_stl"> 
                      <button type="button" className="btn btn-info color-white"> Go To Prev </button> 
                    </Link>
                  </div>
                  
                  <div className="col-md-6 text-right">
                    <textarea rows={4} cols={70} onChange={e => this.onChangeNote(e)} value={note}></textarea>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-info color-white" onClick={e => this.saveNote()}> Save Note</button> 
                    
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

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentPlan);