import React from "react";
import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axiosInstance from "../../axiosConfig.js";

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
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
        initialValues={portfolioData.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="Intro"></input>
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input placeholder="First Name"></input>
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name"></input>
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption"></input>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description" />
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

export default AdminIntro;
