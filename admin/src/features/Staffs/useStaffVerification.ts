/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import {
	deleteStaffService,
	denyStaffService,
	verifyStaffService,
} from "@/services/staff";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const useStaffVerification = () => {
	const queryClient = useQueryClient();

	const navigate = useNavigate();

	const { toast } = useToast();
	const { mutate: verifyStaff, isLoading: verifyLoading } = useMutation({
		mutationFn: async (id: string) => await verifyStaffService(id),
		onSuccess: (userData) => {
			if (userData?.success && userData?.message_code === "VERIFY_SUCCESS") {
				toast({
					variant: "success",
					title: "Success",
					description: userData.message,
				});
				queryClient.invalidateQueries({
					queryKey: [`${userData.data.role}s`],
				});
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
			navigate("/login");
			console.error(error);
		},
	});
	const { mutate: denyStaff, isLoading: denyLoading } = useMutation({
		mutationFn: async (id: string) => await denyStaffService(id),
		onSuccess: (userData) => {
			if (userData?.success && userData?.message_code === "DENY_SUCCESS") {
				toast({
					variant: "success",
					title: "Success",
					description: userData.message,
				});
				queryClient.invalidateQueries({
					queryKey: [`${userData.data.role}s`],
				});
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
			navigate("/login");
			console.error(error);
		},
	});
	const { mutate: deleteStaff, isLoading: deleteLoading } = useMutation({
		mutationFn: async (id: string) => await deleteStaffService(id),
		onSuccess: (userData) => {
			if (userData?.success && userData?.message_code === "DELETE_SUCCESS") {
				toast({
					variant: "success",
					title: "Success",
					description: userData.message,
				});
				queryClient.invalidateQueries({
					active: true,
				});
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
			navigate("/login");
			console.error(error);
		},
	});

	return {
		verifyStaff,
		verifyLoading,
		denyStaff,
		denyLoading,
		deleteStaff,
		deleteLoading,
	};
};

export default useStaffVerification;
