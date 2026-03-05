import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DashBoard from "./pages/DashBoard";
import Register from "./pages/Register";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import EventContainer from "./components/Event/EventContainer";
import MusicEventPage from "./components/Event/individualEvents/MusicEventPage";
import DanceEventPage from "./components/Event/individualEvents/DanceEventPage";
import FashionEventPage from "./components/Event/individualEvents/FashionEventPage";
import MoviesEventPage from "./components/Event/individualEvents/MoviesEventPage";
import LiteraryEventPage from "./components/Event/individualEvents/LiteraryEventPage";
import CreativeartsEventPage from "./components/Event/individualEvents/CreativeartsEventPage";
import QuizEventPage from "./components/Event/individualEvents/QuizEventPage";
import GamingEventPage from "./components/Event/individualEvents/GamingEventPage";
import SelfdefenceEventPage from "./components/Event/individualEvents/SelfdefenceEventPage";
import AstrophiliaEventPage from "./components/Event/individualEvents/AstrophiliaEventPage";
import SportsEventPage from "./components/Event/individualEvents/SportsEventPage";
import PhotographyEventPage from "./components/Event/individualEvents/PhotographyEventPage";
import RotaractEventPage from "./components/Event/individualEvents/RotaractEventPage";
import SocialEventPage from "./components/Event/individualEvents/SocialEventPage";
import WomenEventPage from "./components/Event/individualEvents/WomenEventPage";
import RubiksEventPage from "./components/Event/individualEvents/RubiksEventPage";
import Header from "./components/Header/Header";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
			<Header/>
					<div className="App">
						<Routes>
							
								<Route path="/" element={<Home />} />
							<Route path="/event" element={<Event />} />
							<Route path="/register" element={<Register />} />
							<Route path="/event/:name" element={<EventContainer />} />
							<Route path="/event/music/:id" element={<MusicEventPage />} />
							<Route path="/event/dance/:id" element={<DanceEventPage />} />
							<Route path="/event/fashion/:id" element={<FashionEventPage />} />
							<Route path="/event/moviesanddramatics/:id" element={<MoviesEventPage />} />
							<Route path="/event/literary/:id" element={<LiteraryEventPage />} />
							<Route path="/event/creativearts/:id" element={<CreativeartsEventPage />} />
							<Route path="/event/quiz/:id" element={<QuizEventPage />} />
							<Route path="/event/gaming/:id" element={<GamingEventPage />} />
							<Route path="/event/selfdefence/:id" element={<SelfdefenceEventPage />} />
							<Route path="/event/astrophilia/:id" element={<AstrophiliaEventPage />} />
							<Route path="/event/sports/:id" element={<SportsEventPage />} />
							<Route path="/event/photography/:id" element={<PhotographyEventPage />} />
							<Route path="/event/rotaract/:id" element={<RotaractEventPage />} />
							<Route path="/event/social/:id" element={<SocialEventPage />} />
							<Route path="/event/womenempowerment/:id" element={<WomenEventPage />} />
							<Route path="/event/rubiks/:id" element={<RubiksEventPage />} />
						</Routes>
					</div>
			</BrowserRouter>
			<Toaster />
		</QueryClientProvider>
	);
}

export default App;
