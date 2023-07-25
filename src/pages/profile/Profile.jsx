import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4  bg-gray-100 p-5">
        <div className="text-center mb-4">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
          <h2 className="text-lg font-semibold mt-2">John Doe</h2>
          <p className="text-gray-600">Software Engineer</p>
        </div>
        <nav className="font-bold">
          <ul>
            <li className="mb-2">
              <a href="#" className="text-blue-600 font-medium">
                Profile
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600">
                Settings
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600">
                Privacy
              </a>
            </li>
            {user && (
              <li className="mb-2">
                <a href="#" className="text-gray-600">
                  Logout
                </a>
              </li>
            )}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 md:p-10">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <section className="bg-white rounded-lg shadow p-6 mb-4">
          <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
          <p className="text-gray-600">
            <strong>Email:</strong> {user?.email}
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> {user?.phoneNumber || 'confidential'}
          </p>
          {/* Add more personal information here */}
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
          <div>
            <p className="text-gray-600 mb-1">
              <strong>Software Engineer</strong>
            </p>
            <p className="text-gray-600 mb-1">Company XYZ</p>
            <p className="text-gray-600 mb-1">Jan 2020 - Present</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Add more work experiences here */}
        </section>
      </main>
    </div>
  );
};

export default Profile;
