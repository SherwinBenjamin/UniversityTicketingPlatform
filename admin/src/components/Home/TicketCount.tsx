import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
const TicketCount = () => {
	return (
		<div>
			{" "}
			<div className=" bg-[#1A1A1B] ">
				<div className=" px-4 border-2 bg-[#413d3d]  py-4 m-4 rounded-[0.5rem]  ">
					<div className="flex items-center justify-start gap-x-4">
						<h2 className="text-[1.5rem] text-nowrap font-bold drop-shadow-xl text-blue-600 font-['montserrat'] text-start">
							Ticket Count
						</h2>
						<Button
							disabled
							onClick={() => {}}
							className="bg-blue-600 hover:bg-blue-500  text-white text-[1.2rem] rounded-[0.4rem] "
						>
							<RefreshCw />
						</Button>
					</div>
					<div className="flex  justify-start items-start pl-5 flex-col text-white"></div>
				</div>
			</div>
		</div>
	);
};

export default TicketCount;
