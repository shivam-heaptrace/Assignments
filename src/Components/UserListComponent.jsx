let UserListComponent = ({ users, onItemClick }) => {
  return (
    <>
      {users.map((user) => (
        <div style={{height: "5em", width: "15em", backgroundColor: "#d3cdcd", border: "rgb(185, 182, 182) solid", margin:'10px'}} key={user.id} onClick={() => onItemClick(user.id)}>
          <div style={{ marginTop: "8px", display: "flex" }}>
            <div style={{ backgroundColor: "black", borderRadius: "50%", overflow: "hidden", }} >
              {/* <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Women-face" style={{borderRadius: '50%', width: '50%', marginTop: '-6px', marginLeft: '8px'}}></img> */}
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div style={{ display: "flex", flexDirection:'column', marginTop: "8px"}}>
                <label>{user.firstName} {user.lastName}</label>
                <sub>{user.email}</sub>
                <sub>{user.status ? "🔵 active" : "🔴 inactive"}</sub>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserListComponent;

// {
//     users.map((user) => (
//     <p key={user.id}>
//         {user.id} {user.firstName} {user.lastName} {user.email} {user.phone}{" "}
//         {user.lastLogin} {user.role} {user.status} {user.action}
//     </p>
//     ));
// }
