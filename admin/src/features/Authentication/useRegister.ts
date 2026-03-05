/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useToast } from "@/components/ui/use-toast";
import { toast } from "@/components/ui/use-toast";
import { registerUserService } from "@/services/auth";
import { useMutation, useQueryClient } from "react-query";
// import { useNavigate } from "react-router-dom";

interface registerProps {
	name: string;
	email: string;
	password: string;
	phone_number: number;
	club_name: string;
	role: string;
}

const useRegister = () => {
	//   const navigate = useNavigate();
	const queryClient = useQueryClient();

	//   const { toast } = useToast();
	const { mutate: registerStaff, isLoading:staffRegisterLoading } = useMutation({
		mutationKey: ["staff"],
	
		mutationFn: async ({
			name,
			email,
			password,
			phone_number,
			club_name,
			role
		}: registerProps) =>
			await registerUserService({
				name,
				email,
				password,
				phone_number,
				club_name,
				role
			}),
		onSuccess: (userData) => {
			if (userData?.success && userData?.message_code === "REGISTER_SUCCESS") {
				toast({
					variant: "success",
					title: "Success",
					description: userData.message,
				});
				queryClient.invalidateQueries({
					queryKey: [`staffs`],
				});
			} else {
				toast({
					variant: "error",
					title: "Error",
					description: userData.message,
				});
			}
		},

		onError: (error: any) => {
			console.error(error);
		},
	});

	return { registerStaff, staffRegisterLoading};
};

export default useRegister;
