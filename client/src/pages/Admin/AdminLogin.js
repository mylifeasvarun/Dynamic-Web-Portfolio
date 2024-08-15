import { message } from "antd";
import axios from "axios";
import React from "react";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import { useDispatch } from "react-redux";

function AdminLogin() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const login = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/admin-login", user);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 flex flex-col gap-5 p-5 shadow border border-gray-400 bg-white">
        <h1 className="text-3xl text-center">Admin Login</h1>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button className="bg-primary text-white p-2 rounded" onClick={login}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
