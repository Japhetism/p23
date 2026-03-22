import { Bell, Settings, Menu } from "lucide-react";
import { MockAuthUser } from "@/fixtures";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: DashboardHeaderProps) => (
  <header className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-3">
      <button 
        className="lg:hidden text-foreground p-1 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md" 
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <Menu size={24} aria-hidden="true" />
      </button>
      <h1 className="text-[32px] text-[#34373C] md:text-[32px] font-bold">
        Dashboard
      </h1>
    </div>

    <div className="flex items-center gap-2 sm:gap-4">
      <button 
        className="text-muted-foreground hover:text-foreground transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
        aria-label="View notifications"
      >
        <Bell color="#34373C" size={24} aria-hidden="true" />
      </button>

      <button 
        className="text-muted-foreground hover:text-foreground transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
        aria-label="Account settings"
      >
        <Settings color="#34373C" size={24} aria-hidden="true" />
      </button>

      <div 
        className="flex items-center gap-3 ml-2" 
        role="region" 
        aria-label="User profile"
      >
        <div className="w-[38px] h-[38px] rounded-full bg-[#9099B6] flex items-center justify-center overflow-hidden">
          <img
            src={MockAuthUser.profilePix}
            alt={`Profile picture of ${MockAuthUser.fullName}`}
            className="w-full h-full object-cover rounded-full [image-rendering:auto]"
          />
        </div>
        <div className="hidden sm:block">
          <p className="text-[15px] text-[#34373C] font-bold text-foreground">
            {MockAuthUser.fullName}
          </p>
          <p className="text-[10px] text-[#34373C] text-muted-foreground">
            {MockAuthUser.email}
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;