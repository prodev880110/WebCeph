import React from "react";
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import FileUpload from "./components/FileUpload";
import LowerStl from "./components/LowerStl";
import UpperStl from "./components/UpperStl";
import XRay from "./components/XRay";
import TreatmentPlan from "./components/TreatmentPlan";
import Settings from "./components/Settings";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const { Footer, Sider } = Layout;
function App() {
  return (
    <>
          <Header/>
            <Layout>
                
                <Layout className="site-layout">
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={FileUpload}/>
                        <Route path="/file_upload" component={FileUpload} />
                        <Route path="/x_ray_adjustments" component={XRay} />
                        <Route path="/lower_stl" component={LowerStl} />
                        <Route path="/upper_stl" component={UpperStl} />
                        <Route path="/treatment_plan" component={TreatmentPlan} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </HashRouter>
                  {/* <Footer style={{ textAlign: 'center' }}>---------------- Webceph ----------------</Footer> */}
                </Layout>
            </Layout>
            
    </>
  );
}

export default App;
