/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import { getCurrentStaff, getStaffByCategory } from "@/services/staff";
import { useQuery } from "react-query";

const useStaff = () => {
	const { toast } = useToast();

	const { data: adminData, isLoading: adminLoading } = useQuery({
		queryKey: ["admins"],
		queryFn: async () => await getStaffByCategory("admin"),
		onSuccess: (userData) => {
			if (userData?.success) {
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
				description: "some error occured in staff verification mutation",
			});
			console.error(error);
		},
	});

	const { data: scannerData, isLoading: scannerLoading } = useQuery({
		queryKey: ["scanners"],
		queryFn: async () => await getStaffByCategory("scanner"),
		onSuccess: (userData) => {
			if (userData?.success) {
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
				description: "some error occured in staff verification mutation",
			});
			console.error(error);
		},
	});
	const { data: convenorData, isLoading: convenorLoading } = useQuery({
		queryKey: ["convenors"],
		queryFn: async () => await getStaffByCategory("convenor"),
		onSuccess: (userData) => {
			if (userData?.success) {
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
				description: "some error occured in staff verification mutation",
			});
			console.error(error);
		},
	});
	const { data: viewerData, isLoading: viewerLoading } = useQuery({
		queryKey: ["viewers"],
		queryFn: async () => await getStaffByCategory("viewer"),
		onSuccess: (userData) => {
			if (userData?.success) {
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
				description: "some error occured in staff verification mutation",
			});
			console.error(error);
		},
	});

	const { isLoading, data: staffData } = useQuery({
		queryKey: ["staff"],
		queryFn: getCurrentStaff,
	});

	return {
		isLoading,
		isAuthenticated: staffData?.success,
		staffData,
		adminData,
		adminLoading,
		scannerData,
		scannerLoading,
		convenorData,
		convenorLoading,
		viewerData,
		viewerLoading
	};
};

export default useStaff;
