import { useState, useEffect } from "react"; // 1. Import useEffect
// You will likely need to import the data again if it's not a central state,
// but remember that mutating this imported array is generally bad practice in React.
import users from "../assets/data.js"; 

// Define constants for role/status options if they are used in selects
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

const EditUserComponent = ({ userId, onSwitchToList, onSwitchToAdd }) => {
  // 2. Initialize formData state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "", // Will be loaded from user data
    phone: "",
    role: "",
    status: "",
    password: "",
    confirmPassword: "",
    lastLogin: new Date().toLocaleDateString(),
    action: "edit or delete",
  });
  
  // 3. Use useEffect to load user data when the component mounts or userId changes
  useEffect(() => {
    // Find the user object based on the userId prop
    // Use find() for O(1) or O(n) search on the sorted array
    const userToEdit = users.find((u) => u.id === userId);

    if (userToEdit) {
      // Populate the form data with the existing user's details
      setFormData({
        firstName: userToEdit.firstName || "",
        lastName: userToEdit.lastName || "",
        email: userToEdit.email || "user@example.com",
        phone: userToEdit.phone || "",
        role: userToEdit.role || "",
        status: userToEdit.status ? UserStatus.ACTIVE : UserStatus.INACTIVE, // Convert boolean status to string
        // We typically don't load the existing password into the form for security
        password: "", 
        confirmPassword: "",
        lastLogin: userToEdit.lastLogin || new Date().toLocaleDateString(),
        action: userToEdit.action || "edit or delete",
      });
    } else {
        // Handle case where user ID is not found (optional)
        console.error(`User with ID ${userId} not found.`);
        // Redirect back to list
        onSwitchToList(); 
    }
  }, [userId, onSwitchToList]); // Rerun if userId changes

  // 4. Universal Change Handler (remains the same)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 5. Corrected Submit Handler for EDITING
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      alert("Error: Passwords do not match.");
      return;
    }
    
    // Find the index of the user to update
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex !== -1) {
        // Create the updated user object
        const updatedUser = {
            ...users[userIndex], // Keep existing properties (like id)
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            role: formData.role,
            status: formData.status === UserStatus.ACTIVE, // Convert status string back to boolean
            // Password logic needs to be handled carefully: only update if new password is provided
            // ... (Add password update logic here if required)
            lastLogin: formData.lastLogin, // Keep existing lastLogin or update it
        };

        // ⚠️ MUTATING THE ARRAY (Bad practice, but necessary to match your setup)
        users[userIndex] = updatedUser;

        console.log(`User ID ${userId} updated!`, updatedUser);
        alert(`The user "${updatedUser.firstName}" has been updated successfully!`);

        // Navigate back to the list view
        onSwitchToList();
    } else {
        alert("Error: Could not find user to update.");
    }
  };

  // ... (navigator function remains the same)

//   function navigator() {
//     const navBar = document.getElementById("navbar");
//     if (navBar) navBar.classList.toggle("hidden");
//     else alert("Error: Element with ID 'navbar' not found.");
//   }


  // If the data hasn't loaded yet, show a loading message
  if (!formData.email && userId) {
      return <div>Loading user details...</div>;
  }
  
  return (
    <div className="p-6 bg-white shadow-xl rounded-xl w-full max-w-md mx-auto transition-all duration-300 transform scale-100">
      {/* ... (Your header/navigation JSX remains the same) ... */}
      
        <div style={{ width: "-webkit-fill-available" }}>
        
            {/* ... (Navigation/Header content) ... */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            <div>
              <b>Edit User (ID: {userId})</b>
            </div>
            <div id="buttons">
              {/* ... (List/Grid buttons) ... */}
              <button
                type="button"
                style={{
                  backgroundColor: "blueviolet",
                  color: "white",
                  borderRadius: "11%",
                }}
                onClick={onSwitchToAdd}
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
                    <td><label>First Name</label></td>
                    <td>
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        name="firstName"
                        value={formData.firstName} // Use formData state
                        onChange={handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td><label>Last Name</label></td>
                    <td>
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        name="lastName"
                        value={formData.lastName} // Use formData state
                        onChange={handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td><label>Email Address</label></td>
                    <td>
                      <input
                        type="email"
                        placeholder="user@example.com"
                        name="email"
                        value={formData.email} // Use formData state
                        required
                        // Readonly status removed for demonstration, but you can add it back
                        onChange={handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td><label>Phone</label></td>
                    <td>
                      <input
                        type="text"
                        placeholder="Phone"
                        required
                        name="phone"
                        value={formData.phone} // Use formData state
                        onChange={handleChange}
                        pattern="\d{10}"
                        maxLength="10"
                        title="Please enter exactly 10 digits"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="role-select">Role</label></td>
                    <td>
                      <select
                        id="role-select"
                        required
                        name="role"
                        value={formData.role} // Use formData state
                        onChange={handleChange}
                      >
                         <option value="" disabled>-- Select a role --</option>
                        {ROLE_OPTIONS.map((role) => (
                          <option key={role} value={role}>
                            {role.toUpperCase().replace('_', ' ')}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="status-select">Status</label></td>
                    <td>
                      <select
                        id="status-select"
                        required
                        name="status"
                        value={formData.status} // Use formData state
                        onChange={handleChange}
                      >
                          <option value="" disabled>-- Select Status --</option>
                          {STATUS_OPTIONS.map((status) => (
                              <option key={status} value={status}>
                                  {status.charAt(0).toUpperCase() + status.slice(1)}
                              </option>
                          ))}
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td><label>Password</label></td>
                    <td>
                      <input
                        type="password"
                        placeholder="Enter new password (optional)"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  
                  <tr>
                    <td><label>Confirm Password</label></td>
                    <td>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <button type="submit">Update User Details</button>
            </form>
          </div>
        </div>
      </div>
  );   
};

export default EditUserComponent;