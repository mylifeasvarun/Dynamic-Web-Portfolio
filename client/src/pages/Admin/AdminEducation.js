import { Form, message, Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axiosInstance from "../../axiosConfig.js";

function AdminEducation() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { educations } = portfolioData;
  const [showAddEditModal, setshowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axiosInstance.post("/portfolio/update-education", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axiosInstance.post("/portfolio/add-education", values);
      }

      if (response.data.success) {
        message.success(response.data.message);
        setshowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      dispatch(HideLoading());
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/portfolio/delete-education", {
        _id: item._id,
      });

      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      dispatch(HideLoading());
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-3">
        <button
          className="bg-primary px-5 py-2 text-white rounded"
          onClick={() => {
            setSelectedItemForEdit(null);
            setshowAddEditModal(true);
          }}
        >
          Add Education
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
        {educations.map((education) => (
          <div
            className="shadow border p-5 border-gray-300"
            key={education._id}
          >
            <h1 className="text-primary text-xl">{education.period}</h1>
            <hr />
            <h1>Degree: {education.title}</h1>
            <h1>Institution: {education.institution}</h1>
            {education.coursework && (
              <h1>Coursework: {education.coursework}</h1>
            )}
            <div className="flex justify-start gap-2 mt-2">
              <button
                className="px-2 py-2 bg-primary text-white rounded"
                onClick={() => {
                  setSelectedItemForEdit(education);
                  setshowAddEditModal(true);
                }}
              >
                Edit
              </button>
              <button
                className="px-2 py-2 bg-secondary text-white rounded"
                onClick={() => {
                  onDelete(education);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddEditModal && (
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Education" : "Add Education"}
          footer={null}
          onCancel={() => {
            setshowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit}
          >
            <Form.Item name="period" label="Period">
              <input placeholder="Period (e.g., 2020-2024)"></input>
            </Form.Item>
            <Form.Item name="title" label="Degree/Title">
              <input placeholder="Degree or Certification Title"></input>
            </Form.Item>
            <Form.Item name="institution" label="Institution">
              <input placeholder="School/University Name"></input>
            </Form.Item>
            <Form.Item name="coursework" label="Coursework (Optional)">
              <input placeholder="Relevant Coursework"></input>
            </Form.Item>
            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setshowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminEducation;
