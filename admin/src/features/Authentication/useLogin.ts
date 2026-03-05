/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import { loginUserService } from "@/services/auth";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

interface loginProps {
	email: string;
	password: string;
}

const useLogin = () => {
	const queryClient = useQueryClient();

	const navigate = useNavigate();

	const { toast } = useToast();
	const { mutate: loginUser, isLoading } = useMutation({
		mutationFn: async ({ email, password }: loginProps) =>
			await loginUserService({
				email,
				password,
			}),
		mutationKey: ["staff"],
		onSuccess: (userData: any) => {
			queryClient.setQueryData(["staff"], userData);
			if (userData?.success ) {
				toast({
					variant: "success",
					title: "Success",
					description: userData.message,
				});
				navigate("/");
			} else if (
				userData?.success === false &&
				userData?.message_code === "USER_NOT_VERIFIED"
			) {
				toast({
					variant: "error",
					title: "Error",
					description: "You are not verified to log in ,contact admin!!",
				});
				navigate("/login");
			} else {
				toast({
					variant: "error",
					title: "Error",
					description: userData.message,
				});
			}
		},

		onError: (error: any) => {
			toast({
				variant: "error",
				title: "Error",
				description: error.message,
			});
			console.error(error);
		},
	});

	return { loginUser, isLoading };
};

export default useLogin;
