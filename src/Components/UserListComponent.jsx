let UserListComponent = ({ users, onItemClick }) => {
  return (
    <>
      {users.map((user) => (
        <div
          style={{
            height: '5em',
            width: '15em',
            backgroundColor: '#d3cdcd',
            border: 'rgb(185, 182, 182) solid',
            margin: '10px',
          }}
          key={user.id}
          onClick={() => onItemClick(user.id)}
        >
          <div
            style={{
              /* Outer container styles */
              display: 'flex',
              alignItems: 'center' /* Vertically centers content in the row */,
              justifyContent: 'center' /* Horizontally centers the two main divs */,
              marginTop: '8px',
              width: '100%' /* Ensure it spans the full width if needed for centering */,
            }}
          >
            {/* 1. Profile Image Container (Left side) */}
            <div
              style={{
                /* Styles to create the circular container and hide overflow */
                backgroundColor: 'black',
                borderRadius: '50%',
                overflow: 'hidden',
                /* Define a fixed size for the container */
                width: '60px' /* Example size */,
                height: '60px' /* Example size */,
                /* Center the image within this container if needed */
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
                alt='Women-face'
                style={{
                  /* Key fix: Ensure image covers the full container without overflowing */
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' /* This makes sure the image covers the area, cropping if necessary */,
                  borderRadius: '50%' /* Optional: ensures image itself respects the border-radius */,
                }}
              />
            </div>

            {/* 2. User Details Container (Right side) */}
            <div style={{display:"flex"}}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '15px',
                }}
              >
                <label>
                  {user.firstName} {user.lastName}
                </label>
                <sub>{user.email}</sub>
                <sub>{user.status ? '🔵 active' : '🔴 inactive'}</sub>
              </div>
              {/* <span> */}
                <i class="fa-solid fa-ellipsis-vertical"></i>
              {/* </span> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserListComponent;
