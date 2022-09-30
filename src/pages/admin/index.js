import { Tabs } from "antd";
import React from "react";
import Header from "../../components/Header";
import AdminAbout from "./AdminAbout";
import AdminIntro from "./AdminIntro";
function index() {
  return (
    <div>
      <Header />
      <div className="px-3">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Intro" key="1">
          <AdminIntro/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="About" key="2">
          <AdminAbout/>
        </Tabs.TabPane>
      </Tabs>
      </div>
    </div>
  );
}

export default index;
