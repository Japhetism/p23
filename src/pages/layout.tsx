import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64">
        <Sidebar open={true} onClose={() => {}} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="w-64">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 lg:px-14 lg:py-8">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
