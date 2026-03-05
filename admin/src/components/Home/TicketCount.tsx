import { Activity } from "lucide-react";

const TicketCount = () => {
  return (
    <div className="bg-[#1e2433] border border-white/10 rounded-xl p-5 space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center">
          <Activity size={16} className="text-purple-400" />
        </div>
        <p className="text-white/60 text-sm font-medium">Ticket Count</p>
      </div>
      <div>
        <p className="text-white/20 text-sm italic">PayMeNow integration</p>
        <p className="text-white/10 text-xs mt-1">External data source</p>
      </div>
    </div>
  );
};

export default TicketCount;
