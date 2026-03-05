import { registerUser } from "@/services/apiUsers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export interface UserRegisterProps {
	name: string;
	email: string;
	password: string;
	gender: string;
	reg_number: string;
	phone_number: number;
	is_srm_ktr: boolean;
	college_name: string;
}

const useRegister = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { isPending, mutate, data: mutationData, error } = useMutation({
		mutationKey: ["register"],
		mutationFn: (newUser: UserRegisterProps) => registerUser(newUser),
		onSuccess: (data) => {
			if (data?.success === false) return;
			queryClient.setQueryData(["user"], data);
			navigate("/", { replace: true });
		},
	});

	const serverError = mutationData?.success === false
		? (mutationData?.message || "Registration failed. Please try again.")
		: null;
	const networkError = error ? (error as Error).message : null;

	return {
		isLoading: isPending,
		register: mutate,
		errorMsg: serverError || networkError,
	};
};

export default useRegister;
