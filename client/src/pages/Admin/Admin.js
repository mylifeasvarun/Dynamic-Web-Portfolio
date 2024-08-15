import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";

const items = [
  {
    key: "1",
    label: "Intro",
    children: <AdminIntro />,
  },
  {
    key: "2",
    label: "About",
    children: <AdminAbout />,
  },
  {
    key: "3",
    label: "Experiences",
    children: <AdminExperiences />,
  },
];

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="p-5 mt-5">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      )}
    </div>
  );
}

export default Admin;
