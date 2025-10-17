// Mock data structure for the user details
const mockUser = {
  id: 1,
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  status: "Active",
  photoUrl: "https://www.shutterstock.com/image-photo/latin-adult-man-his-40s-balding-2663718005"
};

/**
 * Renders the status badge (Active or Inactive).
 * @param {string} status - The status string ("Active" or "Inactive").
 */
const StatusBadge = ({ status }) => {
  const isActive = status === 'Active';
  const colorClass = isActive
    ? 'bg-green-100 text-green-700 ring-green-600/20'
    : 'bg-red-100 text-red-700 ring-red-600/20';

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${colorClass} transition duration-150`}>
      {status}
    </span>
  );
};

/**
 * The main component displaying user details in a responsive widget card.
 * It adapts its layout for mobile and desktop screens.
 */
const UserWidgetComponent = ({ user }) => {

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="p-4 sm:p-6 w-full max-w-sm sm:max-w-3xl mx-auto">
      <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100 transition duration-300 hover:shadow-2xl">
        {/*
          -- DESKTOP LAYOUT (sm: and up) --
          Uses flex to lay out content horizontally.
          -- MOBILE LAYOUT (default) --
          Elements stack vertically and center-aligned.
        */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 sm:gap-6">

          {/* 1. Photo and Name (Central/Left-aligned) */}
          <div className="flex flex-col items-center sm:items-start sm:w-1/3">
            <img
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover shadow-md transition transform hover:scale-105"
              src={user.photoUrl}
              alt={fullName}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = "https://placehold.co/100x100/3b82f6/ffffff?text=U"; // Fallback placeholder
              }}
            />
            <div className="mt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
                {fullName}
              </h2>
            </div>
          </div>

          {/* 2. Details (Email and Status) - Organized vertically in the flex container */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 sm:w-2/3 mt-4 sm:mt-0 items-center sm:items-start justify-between">

            {/* Email Section */}
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                Email Address
              </p>
              <p className="text-base text-gray-700 font-medium break-all">
                {user.email}
              </p>
            </div>

            {/* Status Section */}
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-1">
                Status
              </p>
              <StatusBadge status={user.status} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const mockUserInactive = {
    id: 2,
    firstName: "Michael",
    lastName: "Scott",
    email: "m.scott@dundermifflin.com",
    status: "Inactive",
    photoUrl: "https://placehold.co/100x100/f59e0b/ffffff?text=MS"
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans antialiased">      
      <div className="space-y-6">
        <UserWidgetComponent user={mockUser} />
        <UserWidgetComponent user={mockUserInactive} />        
      </div>
    </div>
  );
};

// export default App;