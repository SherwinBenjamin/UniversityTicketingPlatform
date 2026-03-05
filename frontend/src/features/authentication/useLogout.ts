import { logoutUser } from "@/services/apiUsers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate: logout, isPending: logoutLoading } = useMutation({
		mutationFn: logoutUser,
		onSuccess: () => {
			console.log("Logged out");
			queryClient.setQueryData(["user"], null);
			navigate("/", { replace: true });
		},
		onError: (error: Error) => {
			queryClient.setQueryData(["user"], null);
			navigate("/", { replace: true });
			console.error(error);
		},
	});

	return {
		logout,
		logoutLoading,
	};
};

export default useLogout;
