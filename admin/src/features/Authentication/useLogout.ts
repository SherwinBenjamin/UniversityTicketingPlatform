import { toast } from "@/components/ui/use-toast";
import { logoutUserService } from "@/services/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

const useLogout = () => {
	const navigate = useNavigate();

	const { isLoading, mutate: logoutUser } = useMutation({
		mutationFn: logoutUserService,
		mutationKey: ["staff"],
		onSuccess: (userData) => {
			if (userData?.success) {
				localStorage.removeItem("token");
				localStorage.removeItem("is_admin_auth");
				toast({
					variant: "success",
					title: "Success",
					description: userData.message,
				});
				navigate("/login", { replace: true });
			}
		},
	});
	return { isLoading, logoutUser };
};

export default useLogout;
