import useTicket from "@/features/Tickets/useTicket";
import { RefreshCw, Printer } from "lucide-react";

function OfflineTicketIssued() {
  const { offlineTicketIssuedData, offlineTicketIssuedLoading, offlineTicketIssuedRefetch } = useTicket();
  const counts = offlineTicketIssuedData?.data?.ticket_counts;

  return (
    <div className="bg-[#1e2433] border border-white/10 rounded-xl p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-nPink/20 flex items-center justify-center">
            <Printer size={16} className="text-nPink" />
          </div>
          <p className="text-white/60 text-sm font-medium">Physical Tickets</p>
        </div>
        <button
          disabled={offlineTicketIssuedLoading}
          onClick={() => offlineTicketIssuedRefetch()}
          className="text-white/30 hover:text-white/70 transition-colors disabled:opacity-50"
        >
          <RefreshCw size={14} className={offlineTicketIssuedLoading ? "animate-spin" : ""} />
        </button>
      </div>
      <div className="space-y-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center justify-between">
            <span className="text-white/40 text-xs">Ticket {n}</span>
            <span className="text-white font-semibold text-sm">
              {counts?.[`ticket_${n}` as keyof typeof counts] ?? "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfflineTicketIssued;
