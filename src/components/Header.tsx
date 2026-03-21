import { Bell, Settings, Menu } from "lucide-react";
import image61 from "@/assets/images/image61.png";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: DashboardHeaderProps) => (
  <header className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-3">
      <button className="lg:hidden text-foreground" onClick={onMenuClick}>
        <Menu size={24} />
      </button>
      <h1 className="text-[32px] text-[#34373C] md:text-[32px] font-display font-bold text-foreground">
        Dashboard
      </h1>
    </div>
    <div className="flex items-center gap-2 sm:gap-4">
      <button className="text-muted-foreground hover:text-foreground transition-colors">
        <Bell color="#34373C" size={24} />
      </button>
      <button className="text-muted-foreground hover:text-foreground transition-colors">
        <Settings color="#34373C" size={24} />
      </button>
      <div className="flex items-center gap-3 ml-2">
        <div className="w-[38px] h-[38px] rounded-full bg-[#9099B6] flex items-center justify-center overflow-hidden">
          <img
            src={image61}
            alt="image"
            className="w-full h-full object-cover rounded-full [image-rendering:auto]"
          />
        </div>
        <div className="hidden sm:block">
          <p className="text-[15px] text-[#34373C] font-bold text-foreground">
            Full Name
          </p>
          <p className="text-[10px] text-[#34373C] text-muted-foreground">
            username@gmail.com
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
