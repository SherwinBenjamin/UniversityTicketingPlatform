import { registerUser } from "@/services/apiUsers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export interface UserRegisterProps {
	reg_number: string;
	phone_number: number;
	is_srm_ktr: boolean;
	college_name: string;
}

const useRegister = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { isPending, mutate } = useMutation({
		mutationKey: ["register"],
		mutationFn: (newUser: UserRegisterProps) => registerUser(newUser),
		onSuccess: (data) => {
			queryClient.setQueryData(["user"], data);
			navigate("/", { replace: true });
		},
	});

	return {
		isLoading: isPending,
		register: mutate,
	};
};

export default useRegister;
