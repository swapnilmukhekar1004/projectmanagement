import React from "react";

import Sidebar from "./common/sidebar";

import { Outlet} from "react-router-dom";
import Header from "./common/header";

export default function Layout() {
  
  return (
    <>
      <div className="Layout">
        <div className="container-fluid ps-0 pe-0 overflow-hidden">
          <div className="row">
            <div>
              <Sidebar />
            </div>
            <div className="OutletSection">
              <div className="CommonPageLayout">
                <div className="container-fluid">
                  <Header/>

                  <Outlet/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
