import { useToast } from "@/components/ui/use-toast";
import {
	offlineTicketIssuedService,
	ticketCountService,
	totalRegistrationsService,
} from "@/services/ticket";

import { useQuery } from "react-query";

function useTicket() {
	const { toast } = useToast();
	const {
		data: ticketSoldData,
		isLoading: ticketSoldLoading,
		refetch: ticketSoldRefetch,
	} = useQuery({
		queryKey: ["ticketSold"],
		queryFn: async () => await ticketCountService(),
		onSuccess: (userData) => {
			if (
				userData?.success &&
				userData?.message_code === "GET_TOTAL_TICKETS_ISSUED_SUCCESS"
			) {
				return userData.data;
			} else {
				toast({
					variant: "error",
					title: "Error",
					description: userData.message,
				});
			}
		},
		onError: (error) => {
			toast({
				variant: "error",
				title: "Error",
				description: "some error occured in fetch event mutation",
			});

			console.error(error);
		},
	});
	const {
		data: offlineTicketIssuedData,
		isLoading: offlineTicketIssuedLoading,
		refetch: offlineTicketIssuedRefetch,
	} = useQuery({
		queryKey: ["offlineTicketIssued"],
		queryFn: async () => await offlineTicketIssuedService(),
		onSuccess: (userData) => {
			if (
				userData?.success &&
				userData?.message_code === "GET_OFFLINE_TICKETS_ISSUED_SUCCESS"
			) {
				return userData.data;
			} else {
				toast({
					variant: "error",
					title: "Error",
					description: userData.message,
				});
			}
		},
		onError: (error) => {
			toast({
				variant: "error",
				title: "Error",
				description: "some error occured in fetch event mutation",
			});

			console.error(error);
		},
	});
	const {
		data: totalRegistrationsData,
		isLoading: totalRegistrationsLoading,
		refetch: totalRegistrationsRefetch,
	} = useQuery({
		queryKey: ["totalRegistrations"],
		queryFn: async () => await totalRegistrationsService(),
		onSuccess: (userData) => {
			if (
				userData?.success &&
				userData?.message_code === "GET_TOTAL_REGISTRATIONS_SUCCESS"
			) {
				return userData.data;
			} else {
				toast({
					variant: "error",
					title: "Error",
					description: userData.message,
				});
			}
		},
		onError: (error) => {
			toast({
				variant: "error",
				title: "Error",
				description: "some error occured in fetch event mutation",
			});

			console.error(error);
		},
	});

	return {
		ticketSoldData,
		ticketSoldLoading,
		ticketSoldRefetch,
		offlineTicketIssuedData,
		offlineTicketIssuedLoading,
		offlineTicketIssuedRefetch,
		totalRegistrationsData,
		totalRegistrationsLoading,
		totalRegistrationsRefetch,
	};
}

export default useTicket;
