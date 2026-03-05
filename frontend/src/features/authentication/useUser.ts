import { getCurrentUser } from "@/services/apiUsers";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useUser = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { isLoading, data } = useQuery({
		queryKey: ["user"],
		queryFn: () => getCurrentUser(),
	});

	let isAuthenticated = false;
	let redirectUrl = "/";

	if (!data) {
		redirectUrl = "/auth";
	} else {
		if (data.success === false) {
			if (data.message_code === "GOOGLE_LOGIN_REQUIRED") {
				navigate("/auth")
			} else if (data.message_code === "USER_NOT_FOUND") {
				navigate("/register")
			}
		} else {
			queryClient.setQueryData(["user"], data);
			isAuthenticated = true;
		}
	}

	return {
		isLoading,
		user: data?.data?.user,
		isAuthenticated,
		redirectUrl,
	};
};

export default useUser;
