import Header from "@/components/Header/Header";
import "./Home.css";
import TicketSold from "@/components/Home/TicketSold";
import OfflineTicketIssued from "@/components/Home/OfflineTicketIssued";
import TotalRegistrations from "@/components/Home/TotalRegistrations";

function Home() {
	return (
		<div className=" relative bg-[#1A1A1B]">
			<Header />

			<main>
				<section>
					<div className="homeHero flex justify-center items-center h-56 bg-[#de2449] border-2">
						<div className="text-center">
							<h1 className="text-3xl font-bold text-white drop-shadow-lg ">
								Welcome to the Dashboard
							</h1>
							<p className="text-white">
								You can manage your events and staffs here
							</p>
						</div>
					</div>
				</section>

				<section className="flex justify-start items-start wrap border-2  flex-col md:flex-row ">
					<TicketSold />
					<OfflineTicketIssued />
					<TotalRegistrations />
				</section>
			</main>
		</div>
	);
}

export default Home;
