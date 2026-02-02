import React, { useState } from "react";
import { BarChart2, FileText, ShoppingBag, Map, Menu, X, HardHat, Camera } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: BarChart2, text: "Charts", path: "/admin-dashboard/charts" },
    { icon: FileText, text: "Reports", path: "/admin-dashboard/reports" },
    { icon: ShoppingBag, text: "Marketplace", path: "/admin-dashboard/marketplace" },
    { icon: Map, text: "Purchase History", path: "/admin-dashboard/history" },
    { icon: HardHat, text: "Workers", path: "/admin-dashboard/workers" },
    { icon: Camera, text: "Camera", path: "/admin-dashboard/camera" }
  ];

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 m-2 bg-gray-800 text-white rounded-lg focus:outline-none"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-black border-r border-gray-700 shadow-lg p-4 transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 w-64 md:relative md:block h-screen`}
      >
        {/* Close Button */}
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 p-2 text-red-500 hover:text-red-700"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        <nav>
          <ul className="space-y-4 mt-8">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  to={item.path}
                  onClick={handleItemClick}
                  className="flex items-center space-x-4 p-3 w-full text-left rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-gray-400 hover:text-white" />
                  <span className="text-lg">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const AdminDashboard = () => {
  return (
    <div className="bg-black flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-black">
        <main className="flex-1 bg-black text-white px-8 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
