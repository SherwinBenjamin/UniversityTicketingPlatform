import useTicket from "@/features/Tickets/useTicket";
import { RefreshCw, Ticket } from "lucide-react";

function TicketSold() {
  const { ticketSoldData, ticketSoldLoading, ticketSoldRefetch } = useTicket();
  const counts = ticketSoldData?.data?.ticket_counts;

  return (
    <div className="bg-[#1e2433] border border-white/10 rounded-xl p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
            <Ticket size={16} className="text-blue-400" />
          </div>
          <p className="text-white/60 text-sm font-medium">Tickets Sold</p>
        </div>
        <button
          disabled={ticketSoldLoading}
          onClick={() => ticketSoldRefetch()}
          className="text-white/30 hover:text-white/70 transition-colors disabled:opacity-50"
        >
          <RefreshCw size={14} className={ticketSoldLoading ? "animate-spin" : ""} />
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

export default TicketSold;
