import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UserCheck,
  UserPlus,
  CalendarDays,
  CalendarPlus,
  BookOpen,
  UserCog,
  LogOut,
} from "lucide-react";
import useLogout from "@/features/Authentication/useLogout";
import useStaff from "@/features/Staffs/useStaff";

const navItems = [
  {
    section: null,
    items: [{ label: "Dashboard", path: "/", icon: LayoutDashboard }],
  },
  {
    section: "Staffs",
    items: [
      { label: "Verification", path: "/staff-verification", icon: UserCheck },
      { label: "Register Staff", path: "/register-staff", icon: UserPlus },
    ],
  },
  {
    section: "Events",
    items: [
      { label: "Event List", path: "/event-list", icon: CalendarDays },
      { label: "Create Event", path: "/create-event", icon: CalendarPlus },
    ],
  },
  {
    section: "Users",
    items: [
      { label: "Booking Details", path: "/booking-detail", icon: BookOpen },
      { label: "Handle User", path: "/handle-user", icon: UserCog },
    ],
  },
];

function Sidebar() {
  const location = useLocation();
  const { logoutUser, isLoading } = useLogout();
  const { staffData } = useStaff();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed left-0 top-0 h-screen w-60 flex flex-col bg-[#111318] border-r border-white/5 z-50">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-nPink flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-sm">M</span>
          </div>
          <div>
            <p className="text-white font-bold text-base leading-tight">Milan 2024</p>
            <p className="text-white/40 text-xs">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navItems.map((group, i) => (
          <div key={i}>
            {group.section && (
              <p className="text-white/30 uppercase text-[10px] font-bold tracking-widest px-3 mb-2">
                {group.section}
              </p>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon size={16} className={active ? "text-blue-400" : "text-white/40"} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="px-3 py-4 border-t border-white/5 space-y-1">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">
              {staffData?.data?.user?.name?.charAt(0)?.toUpperCase() ?? "A"}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-white text-xs font-semibold truncate">
              {staffData?.data?.user?.name ?? "Admin"}
            </p>
            <p className="text-white/40 text-[10px] capitalize">
              {staffData?.data?.user?.role ?? "staff"}
            </p>
          </div>
        </div>
        <button
          disabled={isLoading}
          onClick={() => logoutUser()}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
        >
          <LogOut size={16} className="text-white/40" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
