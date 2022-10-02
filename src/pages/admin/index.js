import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import AdminAbout from "./AdminAbout";
import AdminIntro from "./AdminIntro";
function Admin() {
  // @ts-ignore
  const { portfolioData } = useSelector((rootState) => rootState.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="px-3">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Intro" key="1">
              <AdminIntro portfolioData={portfolioData}/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="About" key="2">
              <AdminAbout />
            </Tabs.TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
