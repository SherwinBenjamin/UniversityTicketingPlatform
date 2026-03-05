import "./Home.css";
import TicketSold from "@/components/Home/TicketSold";
import OfflineTicketIssued from "@/components/Home/OfflineTicketIssued";
import TotalRegistrations from "@/components/Home/TotalRegistrations";
import TicketCount from "@/components/Home/TicketCount";

function Home() {
  return (
    <div className="space-y-6">
      {/* Page intro */}
      <div>
        <h2 className="text-white/40 text-sm font-medium uppercase tracking-widest">Overview</h2>
        <p className="text-white/60 text-sm mt-1">
          Live stats for Milan 2024 — SRM KTR Cultural Fest
        </p>
      </div>

      {/* Stat cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <TicketSold />
        <OfflineTicketIssued />
        <TotalRegistrations />
        <TicketCount />
      </div>
    </div>
  );
}

export default Home;
