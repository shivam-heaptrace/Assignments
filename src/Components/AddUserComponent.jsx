import { useState } from "react";
import users  from "../assets/data.js";

const AddUserComponent = ({ onSwitchToList }) => {
    function User(id, firstName, lastName, email, phone, lastLogin, role, status, action ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.lastLogin = lastLogin;
        this.role = role;
        this.status = status;
        this.action = action;
    }

    const [count, setCount] = useState(1);
    const [user, setUser] = useState(new User());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New User Form Submitted!" + user);
    // users.push({id : count, firstName : 'Rowam', lastName : 'Torres', email : 'rowan.torres@gmail.com', phone : '+1-235-473', lastLogin : '0205', role : 'user', status : true, action : 'edit or delete'})
    users.push(user)
    setCount(count + 1)
    onSwitchToList();
  };

  function navigator() {
    const navBar = document.getElementById("navbar");

    if (navBar) navBar.classList.toggle("hidden");
    else alert("Error: Element with ID 'navbar' not found.");
  }

  return (
    <div className="p-6 bg-white shadow-xl rounded-xl w-full max-w-md mx-auto transition-all duration-300 transform scale-100">
      <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%",}}>
        <div style={{ display: "flex", flexDirection: "column" }} id="navbar">
          <h1 style={{ marginTop: "0%" }}>
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

          <div style={{ border: "1px", borderColor: "black", borderStyle: "solid", height: "80vh", width: "95%",}}>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>First Name</label>    
                            </td>                        
                            <td>
                                <input type="text" placeholder="First Name" required />
                            </td>                            
                        </tr>


                        <tr>
                            <td>
                                <label>Last Name</label>
                            </td>                        
                            <td>
                                <input type="text" placeholder="Last Name" required />
                            </td>                            
                        </tr>


                        <tr>
                            <td>
                                <label>Email Address</label>
                            </td>                        
                            <td>
                                <input type="email" placeholder="user@example.com" value={"user@example.com"} required />
                            </td>                            
                        </tr>

                        <tr>
                            <td>
                                <label>Phone</label>
                            </td>                        
                            <td>
                                <input type="text" placeholder="Phone" required />
                            </td>                            
                        </tr>

                        <tr>
                            <td>
                                <label>Role</label>
                            </td>                        
                            <td>
                                <input type="text" placeholder="Select Role" required />
                            </td>                            
                        </tr>

                        <tr>
                            <td>
                                <label>Status</label>                
                            </td>                        
                            <td>
                                <input type="text" placeholder="Select Status" required/>
                            </td>                            
                        </tr>

                        <tr>
                            <td>
                                <label>Password</label>                
                            </td>                        
                            <td>
                                <input type="text" placeholder="Password" required />
                            </td>                            
                        </tr>

                        <tr>
                            <td>
                                <label>Confirm Password</label>                
                            </td>                        
                            <td>
                                <input type="text" placeholder="Confirm Password" required />
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
