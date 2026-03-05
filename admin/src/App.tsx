import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import StaffVerification from "./pages/staffs/StaffVerification";
import { ProtectedRoutes } from "./features/Authentication/ProtectedRoutes";
import EventList from "./pages/events/EventList";
import CreateEvent from "./pages/events/CreateEvent";
import RegisterStaff from "./pages/staffs/RegisterStaff";
import BookingDetails from "./pages/Users/BookingDetails";
import HandleUser from "./pages/Users/HandleUser";
import Layout from "./components/Layout/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <div className="h-full w-full">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/staff-verification" element={<StaffVerification />} />
              <Route path="/event-list" element={<EventList />} />
              <Route path="/create-event" element={<CreateEvent />} />
              <Route path="/register-staff" element={<RegisterStaff />} />
              <Route path="/booking-detail" element={<BookingDetails />} />
              <Route path="/handle-user" element={<HandleUser />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
