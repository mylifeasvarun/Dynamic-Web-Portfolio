import React from "react";
import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axiosInstance from "../../axiosConfig.js";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(" , "),
        }}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL"></input>
        </Form.Item>
        <Form.Item name="description1" label="Description 1">
          <input placeholder="Caption"></input>
        </Form.Item>
        <Form.Item name="description2" label="Description 2">
          <textarea placeholder="Description 2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-center">
          <button
            className="px-5 py-2 bg-primary text-white rounded"
            type="submit"
          >
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
