// const API_VAR = "https://api.srmmilan.org";
// const API_VAR = "http://localhost:5000";
const API_VAR = import.meta.env.VITE_API_VAR;
// /auth
export const loginUserApi = `${API_VAR}/api/staff/login`;

// staffs
export const registerStaffApi = `${API_VAR}/api/staff/register`;
export const getCurrentStaffApi = `${API_VAR}/api/staff/current`;
export const getStaffsApi = `${API_VAR}/api/staff`;
export const verifyStaffApi = `${API_VAR}/api/staff/verify`;
export const denyStaffApi = `${API_VAR}/api/staff/deny`;
export const deleteStaffApi = `${API_VAR}/api/staff/deleteStaff`;
export const logoutStaffApi = `${API_VAR}/api/staff/logout`;

//events
export const getEventsApi = `${API_VAR}/api/events`;
export const deleteEventApi = `${API_VAR}/api/events`;
export const createEventApi = `${API_VAR}/api/events/event`;
export const activateEventApi = `${API_VAR}/api/events/activateEvent`;
export const updateMaxCapacityApi = `${API_VAR}/api/events/updateMaxCap`;

// ticket
export const ticketCountApi = `${API_VAR}/api/staff/getTotalTicketsSold`;
export const offlineTicketIssuedApi = `${API_VAR}/api/staff/getOfflineTicketsIssued`;
export const totalRegistrationsApi = `${API_VAR}/api/staff/getTotalRegistrations`;
export const payMeNowTicketCountApi =
	"https://paymenow.co.in/Admin/api/ticketCount";

//bookings
export const bookingsByEmailApi = `${API_VAR}/api/staff/getBookingByEmail`;
export const useridByEmailApi = `${API_VAR}/api/staff/getUserIdByEmail`;
export const deleteUserApi = `${API_VAR}/api/staff/deleteUser`;
