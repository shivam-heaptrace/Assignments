import { useState } from 'react';

// NOTE: You would define or import this Dialog component in a separate file.
// For this example, we'll assume it exists and handles the logic for opening/closing/actions.
const UserActionsDialog = ({ isOpen, onClose, user, onEdit, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '10px',
        zIndex: 10,
        right: '10px',
        top: '20px',
        width: '88px',
      }}
    >
      <div
        onClick={() => {
          onEdit(user.id);
          onClose();
        }}
        style={{ cursor: 'pointer', padding: '5px' }}
      >
        {/* ✏️ Edit User */}
        Edit User
      </div>
      <div
        onClick={() => {
          onDelete(user.id);
          // onClose();
        }}
        style={{ cursor: 'pointer', padding: '5px', color: 'red' }}
      >
        {/* 🗑️ Delete User */}
        Delete User
      </div>
      <button onClick={onClose} style={{ marginTop: '10px' }}>
        Close
      </button>
    </div>
  );
};

let UserListComponent = ({ users, onEditUser, onDeleteUser }) => {
  // State to track which user's dialog is open. Stores the user ID or null.
  const [openDialogId, setOpenDialogId] = useState(null);

  const toggleDialog = (userId) => {
    // If the clicked user's dialog is already open, close it (set to null).
    // Otherwise, open it for the clicked user.
    setOpenDialogId(openDialogId === userId ? null : userId);
  };

  return (
    <>
      {users.map((user) => (
        // Key style change: Add 'position: relative' to the list item container
        // so the absolute-positioned dialog stays within its bounds.
        <div
          key={user.id}
          style={{
            height: '5em',
            width: '15em',
            backgroundColor: '#d3cdcd',
            border: 'rgb(185, 182, 182) solid',
            margin: '10px',
            position: 'relative', // IMPORTANT for dialog positioning
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '8px',
              width: '100%',
            }}
          >
            {/* 1. Profile Image Container (Left side) */}
            {/* ... (Image code remains the same) ... */}
            <div
              style={{
                backgroundColor: 'black',
                borderRadius: '50%',
                overflow: 'hidden',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
                alt='Women-face'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>

            {/* 2. User Details & Ellipsis Container (Right side) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
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

              {/* Vertical Ellipsis Icon and Dialog */}
              <div
                style={{ marginRight: '10px', cursor: 'pointer', position: 'relative' }}
                onClick={(e) => {
                  e.stopPropagation(); // Stop the click from triggering the parent's onItemClick
                  toggleDialog(user.id);
                }}
              >
                <i className='fa-solid fa-ellipsis-vertical'></i>

                {/* The Dialog Component */}
                <UserActionsDialog
                  isOpen={openDialogId === user.id}
                  onClose={() => setOpenDialogId(null)}
                  user={user}
                  onEdit={() => onEditUser(user.id)}
                  onDelete={onDeleteUser}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserListComponent;
