import React from "react";
import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
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
        initialValues={portfolioData.contact}
      >
        <Form.Item name="name" label="Full Name">
          <input placeholder="Full Name"></input>
        </Form.Item>
        <Form.Item name="email" label="E-Mail">
          <input placeholder="E-Mail"></input>
        </Form.Item>
        <Form.Item name="mobile" label="Mobile Number">
          <textarea placeholder="DescriMobile Numberption" />
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

export default AdminContact;
