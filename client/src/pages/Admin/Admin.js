import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";
import AdminEducation from "./AdminEducation";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";

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
    label: "Education",
    children: <AdminEducation />,
  },
  {
    key: "4",
    label: "Experiences",
    children: <AdminExperiences />,
  },
  {
    key: "5",
    label: "Projects",
    children: <AdminProjects />,
  },
  {
    key: "6",
    label: "Contact",
    children: <AdminContact />,
  },
];

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  });

  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <h1 className="text-3xl text-primary px-5 mt-2">Portfolio Admin</h1>
        <h1
          className="px-5 py-2 underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>

      {portfolioData && (
        <div className="p-5">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      )}
    </div>
  );
}

export default Admin;
