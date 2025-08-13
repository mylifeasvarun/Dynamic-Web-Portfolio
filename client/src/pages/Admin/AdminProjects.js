import { Form, message, Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axiosInstance from "../../axiosConfig.js";

function AdminProjects() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { projects } = portfolioData;
  const [showAddEditModal, setshowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      const temptechnologies = values.technologies.split(",");
      values.technologies = temptechnologies;
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axiosInstance.post("/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axiosInstance.post("/portfolio/add-project", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setshowAddEditModal(false);
        setSelectedItemForEdit(null);
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

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
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
      <div className="flex justify-end mb-3">
        <button
          className="bg-primary px-5 py-2 text-white rounded"
          onClick={() => {
            setSelectedItemForEdit(null);
            setshowAddEditModal(true);
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
        {projects.map((project) => (
          <div className="shadow border p-5 border-gray-300 flex flex-col items-center">
            <img src={project.image} alt="" className="h-30 w-40 rounded" />
            <hr />
            <h1 className="text-3xl my-3">{project.title}</h1>
            <h1 className="text-center">{project.technologies}</h1>
            <h1 className="text-center">{project.description}</h1>
            <div className="flex justify-start gap-2 mt-2">
              <button
                className="px-2 py-2 bg-primary text-white rounded"
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setshowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
              <button
                className="px-2 py-2 bg-secondary text-white rounded"
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit project" : "Add project"}
          footer={null}
          onCancel={() => {
            setshowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              ...selectedItemForEdit,
              technologies: selectedItemForEdit?.technologies.join(" , "),
            }}
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title"></input>
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <input placeholder="Image URL"></input>
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies"></input>
            </Form.Item>
            <Form.Item name="link" label="Demo Link">
              <input placeholder="Link"></input>
            </Form.Item>
            <Form.Item name="description" label="Description">
              <textarea placeholder="Description"></textarea>
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

export default AdminProjects;
