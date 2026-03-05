
import useTicket from "@/features/Tickets/useTicket";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

function TicketSold() {
  const { ticketSoldData, ticketSoldLoading, ticketSoldRefetch } = useTicket();

  return (
    <div> <div className=" bg-[#1A1A1B] ">
    <div className=" px-4 border-2 bg-[#413d3d]  py-4 m-4 rounded-[0.5rem]  ">
      <div className="flex items-center justify-start gap-x-4">
        <h2 className="text-[1.5rem] font-bold drop-shadow-xl text-blue-600 font-['montserrat'] text-start">
          Total Tickets Sold
        </h2>
        <Button
          disabled={ticketSoldLoading}
          onClick={() => {
            ticketSoldRefetch();
          }}
          className="bg-blue-600 hover:bg-blue-500  text-white text-[1.2rem] rounded-[0.4rem] "
        >
          <RefreshCw />
        </Button>
      </div>
      <div className="flex  justify-start items-start pl-5 flex-col text-white">
        <div className="flex gap-x-8">
          <p className="text-[1rem] text-['montserrat'] font-bold  ">
            Ticket 1:{" "}
          </p>
          <p className="text-[1rem] ">
            {ticketSoldData?.data?.ticket_counts?.ticket_1}
          </p>
        </div>
        <div className="flex gap-x-8">
          <p className="text-[1rem] text-['montserrat'] font-bold  ">
            Ticket 2:{" "}
          </p>
          <p className="text-[1rem] ">
            {ticketSoldData?.data?.ticket_counts?.ticket_2}
          </p>
        </div>
        <div className="flex gap-x-8">
          <p className="text-[1rem] text-['montserrat'] font-bold  ">
            Ticket 3:{" "}
          </p>
          <p className="text-[1rem] ">
            {ticketSoldData?.data?.ticket_counts?.ticket_3}
          </p>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default TicketSold