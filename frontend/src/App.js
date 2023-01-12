import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Layout} from 'antd';
import FileUpload from "./components/FileUpload";
import LowerStl from "./components/LowerStl";
import UpperStl from "./components/UpperStl";
import XRay from "./components/XRay";
import TreatmentPlan from "./components/TreatmentPlan";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
          <Header/>
            <Layout>
                
                <Layout className="site-layout">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" children={<FileUpload/>}/>
                        <Route path="/file_upload" children={<FileUpload/>} />
                        <Route path="/x_ray_adjustments" children={<XRay/>} />
                        <Route path="/lower_stl" children={<LowerStl/>} />
                        <Route path="/upper_stl" children={<UpperStl/>} />
                        <Route path="/treatment_plan" children={<TreatmentPlan/>} />
                    </Switch>
                </BrowserRouter>
                  
                </Layout>
            </Layout>
            
    </div>
  );
}

export default App;
