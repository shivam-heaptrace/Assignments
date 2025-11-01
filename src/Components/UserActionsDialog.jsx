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
          // onClose();
        }}
        style={{ cursor: 'pointer', padding: '5px' }}
      >
        Edit User
      </div>
      <div
        onClick={() => {
          onDelete(user.id);
          // onClose();
        }}
        style={{ cursor: 'pointer', padding: '5px', color: 'red' }}
      >
        Delete User
      </div>
      <button onClick={onClose} style={{ marginTop: '10px' }}>
        Close
      </button>
    </div>
  );
};

export default UserActionsDialog;