import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/staff-verification": "Staff Verification",
  "/register-staff": "Register Staff",
  "/event-list": "Event List",
  "/create-event": "Create Event",
  "/booking-detail": "Booking Details",
  "/handle-user": "Handle User",
};

function Header() {
  const location = useLocation();
  const title = pageTitles[location.pathname] ?? "Dashboard";

  return (
    <header className="fixed top-0 left-60 right-0 h-16 bg-[#161920] border-b border-white/5 flex items-center px-8 z-40">
      <h1 className="text-white font-bold text-lg">{title}</h1>
      <div className="ml-auto flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-white/40 text-xs">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="w-px h-6 bg-white/10" />
        <div className="w-8 h-8 rounded-full bg-nPink flex items-center justify-center">
          <span className="text-white text-xs font-bold">M</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
