import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="hidden lg:block w-64 h-full border-r">
        <Sidebar open={true} onClose={() => {}} />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="relative z-50 w-64 h-full">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      <main className="flex-1 h-full overflow-y-auto p-4 lg:px-14 lg:py-8">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="mt-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
