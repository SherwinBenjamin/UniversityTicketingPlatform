import { loginUser } from "@/services/apiUsers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { isPending, mutate, error } = useMutation({
		mutationKey: ["login"],
		mutationFn: (credentials: { email: string; password: string }) =>
			loginUser(credentials),
		onSuccess: (data) => {
			if (data?.success === false) {
				if (data?.message_code === "USER_NOT_FOUND") {
					navigate("/register");
				}
				return;
			}
			queryClient.setQueryData(["user"], data);
			navigate("/", { replace: true });
		},
	});

	return {
		isLoading: isPending,
		login: mutate,
		error,
	};
};

export default useLogin;
