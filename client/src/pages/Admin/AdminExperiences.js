import { Form, message, Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminExperiences() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { experiences } = portfolioData;
  const [showAddEditModal, setshowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setshowAddEditModal(false);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
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
      <div className="flex justify-start mb-3">
        <button
          className="bg-primary px-5 py-2 text-white rounded"
          onClick={() => {
            setSelectedItemForEdit(null);
            setshowAddEditModal(true);
          }}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience) => (
          <div className="shadow border p-5 border-gray-300">
            <h1 className="text-primary text-xl">{experience.period}</h1>
            <hr />
            <h1>Role: {experience.title}</h1>
            <h1>Company: {experience.company}</h1>
            <h1>{experience.description}</h1>
            <div className="flex justify-start gap-2 mt-2">
              <button className="px-2 py-2 bg-primary text-white rounded" onClick={()=>{
                setSelectedItemForEdit(experience);
                setshowAddEditModal(true);
              }}>
                Edit
              </button>
              <button className="px-2 py-2 bg-secondary text-white rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => setshowAddEditModal(false)}
      >
        <Form layout="vertical" onFinish={onFinish} initialValues={selectedItemForEdit}>
          <Form.Item name="period" label="Period">
            <input placeholder="Period"></input>
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input placeholder="Company"></input>
          </Form.Item>
          <Form.Item name="title" label="Title">
            <input placeholder="Title"></input>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input placeholder="Description"></input>
          </Form.Item>
          <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => {
                setshowAddEditModal(false);
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
    </div>
  );
}

export default AdminExperiences;
