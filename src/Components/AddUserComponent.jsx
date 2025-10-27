import React, { useState } from "react";
import users from "../assets/data.js";

const UserRole = Object.freeze({
  USER: "user",
  ADMIN: "admin",
  SUPER_ADMIN: "super admin",
});

const ROLE_OPTIONS = Object.values(UserRole);

const UserStatus = Object.freeze({
  ACTIVE: "active",
  INACTIVE: "inactive",
});

const STATUS_OPTIONS = Object.values(UserStatus);

const AddUserComponent = ({ onSwitchToList }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "user@example.com",
    phone: "",
    role: "",
    status: "",
    password: "",
    confirmPassword: "",
    lastLogin: new Date().toLocaleDateString(),
    action: "edit or delete",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Error: Passwords do not match.");
      return;
    }

    const nextId = users.length > 0 ? users[users.length - 1].id + 1 : 101;

    const newUser = {
      id: nextId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      status: formData.status === UserStatus.ACTIVE,
      lastLogin: formData.lastLogin,
      action: formData.action,
    };

    users.push(newUser);

    console.log("New User Form Submitted!", newUser);
    alert(
      `The user "${newUser.firstName}" has been added successfully with ID ${newUser.id}`
    );

    onSwitchToList();
  };

  function navigator() {
    const navBar = document.getElementById("navbar");
    if (navBar) navBar.classList.toggle("hidden");
    else alert("Error: Element with ID 'navbar' not found.");
  }

  return (
    <div className="p-6 bg-white shadow-xl rounded-xl w-full max-w-md mx-auto transition-all duration-300 transform scale-100">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }} id="navbar">
          <h1 style={{ marginTop: "0%" }} onClick={onSwitchToList}>
            <span style={{ color: "pink" }}>M</span>ultiKart
          </h1>
          <h3 style={{ width: "100%" }}>Main Menu</h3>
          <nav>
            <ul>
              <li style={{ padding: "10px 0" }}>
                <i className="fa-solid fa-gauge-high"></i> DashBoard
              </li>
              <li style={{ padding: "10px 0" }}>
                <i className="fa-solid fa-user-plus"></i> Users
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ width: "-webkit-fill-available" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span onClick={navigator}>
              <i className="fa-solid fa-bars"></i>
            </span>
            <div
              style={{
                height: "5em",
                width: "15em",
                backgroundColor: "#d3cdcd",
              }}
            >
              <div style={{ marginTop: "8px", display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <img
                    src="https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                    alt="Man-face"
                    style={{ borderRadius: "50%", height: "50%", width: "50%" }}
                  ></img>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Franklin Jr.</label>
                  <sub>Super Admin</sub>
                </div>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            <div>
              <b>Users</b>
            </div>
            <div id="buttons">
              <span>
                <button
                  type="button"
                  style={{
                    backgroundColor: "white",
                    color: "blueviolet",
                    borderRadius: "11%",
                  }}
                >
                  <i className="fa-solid fa-list"></i>
                </button>
                <button
                  type="button"
                  style={{
                    backgroundColor: "blueviolet",
                    color: "white",
                    borderRadius: "11%",
                  }}
                >
                  <i className="fa-solid fa-grip"></i>
                </button>
              </span>
              <button
                type="button"
                style={{
                  backgroundColor: "blueviolet",
                  color: "white",
                  borderRadius: "11%",
                }}
              >
                + Add User
              </button>
            </div>
          </div>

          <div
            style={{
              border: "1px",
              borderColor: "black",
              borderStyle: "solid",
              height: "80vh",
              width: "95%",
            }}
          >
            <form onSubmit={handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>First Name</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>Last Name</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>Email Address</label>
                    </td>
                    <td>
                      <input
                        type="email"
                        placeholder="user@example.com"
                        name="email"
                        value={formData.email}
                        required
                        // readOnly
                        onChange={handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>Phone</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Phone"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="\d{10}"
                        maxLength="10"
                        title="Please enter exactly 10 digits"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="role-select">Role</label>
                    </td>
                    <td>
                      <select
                        id="role-select"
                        required
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          -- Select a role --
                        </option>
                        {ROLE_OPTIONS.map((role) => (
                          <option key={role} value={role}>
                            {role
                              .split(" ")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join(" ")}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="status-select">Status</label>
                    </td>
                    <td>
                      <select
                        id="status-select"
                        required
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          -- Select Status --
                        </option>
                        {STATUS_OPTIONS.map((status) => (
                          <option key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>Password</label>
                    </td>
                    <td>
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>Confirm Password</label>
                    </td>
                    <td>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <button type="submit">Save User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserComponent;
