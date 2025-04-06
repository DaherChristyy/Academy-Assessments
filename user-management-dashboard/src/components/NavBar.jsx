import { Moon } from "lucide-react";

const NavBar = () => (
  <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-medium">User Management</h1>
    <div className="flex items-center gap-4">
      <button className="bg-white text-primary px-5 py-2 rounded text-base">Create User</button>
      <button className="bg-red-500 text-white px-5 py-2 rounded text-base">Logout</button>
      <button className="ml-2 p-2 rounded hover:bg-white hover:text-primary">
        <Moon size={20} />
      </button>
    </div>
  </nav>
);

export default NavBar;
