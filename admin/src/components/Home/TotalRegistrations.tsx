import useTicket from "@/features/Tickets/useTicket";
import { RefreshCw, Users } from "lucide-react";

function TotalRegistrations() {
  const { totalRegistrationsData, totalRegistrationsLoading, totalRegistrationsRefetch } = useTicket();

  return (
    <div className="bg-[#1e2433] border border-white/10 rounded-xl p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center">
            <Users size={16} className="text-green-400" />
          </div>
          <p className="text-white/60 text-sm font-medium">Registrations</p>
        </div>
        <button
          disabled={totalRegistrationsLoading}
          onClick={() => totalRegistrationsRefetch()}
          className="text-white/30 hover:text-white/70 transition-colors disabled:opacity-50"
        >
          <RefreshCw size={14} className={totalRegistrationsLoading ? "animate-spin" : ""} />
        </button>
      </div>
      <div>
        <p className="text-3xl font-bold text-white">
          {totalRegistrationsData?.data?.count ?? "—"}
        </p>
        <p className="text-white/30 text-xs mt-1">Total users registered</p>
      </div>
    </div>
  );
}

export default TotalRegistrations;
