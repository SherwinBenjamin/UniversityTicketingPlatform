import useRegister from "@/features/authentication/useRegister";
import React from "react";

export default function Register() {
	const { isLoading, register } = useRegister();

	const [isSrmStudent, setIsSrmStudent] = React.useState(false);
	const [collegeName, setCollegeName] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [registerNumber, setRegisterNumber] = React.useState("");

	function handleGoogleLogin() {
		window.open(
			`${import.meta.env.VITE_AUTH_URL}/users/auth/google`,
			"_self",
			"width-500, height=600"
		);
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			is_srm_ktr: isSrmStudent,
			college_name: collegeName,
			phone_number: Number(phoneNumber),
			reg_number: registerNumber,
		};

		register(data);
	};

	return (
		<div className=" w-full h-full flex flex-col justify-center items-center">
			<h1 className=" text-[5rem] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
				MILAN
			</h1>
			<h1 className="font-bold text-[3rem] mb-[3rem]">Signup Form</h1>
			<form
				className=" flex flex-col gap-5 items-center"
				onSubmit={handleSubmit}
			>
				<input
					disabled={isLoading}
					type="text"
					placeholder="Register Number"
					value={registerNumber}
					onChange={(e) => {
						setRegisterNumber(e.target.value);
					}}
				/>
				<input
					disabled={isLoading}
					type="text"
					placeholder="Phone Number"
					value={phoneNumber}
					onChange={(e) => {
						setPhoneNumber(e.target.value);
					}}
				/>
				<input
					disabled={isLoading}
					type="text"
					placeholder="College Name"
					value={collegeName}
					onChange={(e) => {
						setCollegeName(e.target.value);
					}}
				/>
				<div className="flex justify-center">
					<h1 className="flex-1">S.R.M student ?</h1>
					<input
						disabled={isLoading}
						type="checkbox"
						checked={isSrmStudent}
						onChange={(e) => {
							setIsSrmStudent(e.target.checked);
						}}
					/>
				</div>
				<button
					disabled={isLoading}
					className=" px-4 py-2 w-[10rem] mt-[2rem] shadow-md shadow-emerald-300  font-semibold transition-all duration-500 active:bg-green-400"
				>
					{isLoading ? "Loading..." : "Register"}
				</button>
			</form>
			<button
				className="mt-4 bg-sky-600 text-white"
				onClick={handleGoogleLogin}
			>
				Google Again
			</button>
		</div>
	);
}

// reg_number: string;
// phone_number: string;
// is_srm_student: boolean;
// college_name: string;
