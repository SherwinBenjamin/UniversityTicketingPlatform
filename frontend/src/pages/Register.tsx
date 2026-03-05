import useRegister from "@/features/authentication/useRegister";
import React from "react";

export default function Register() {
	const { isLoading, register } = useRegister();

	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [gender, setGender] = React.useState("");
	const [isSrmStudent, setIsSrmStudent] = React.useState(false);
	const [collegeName, setCollegeName] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [registerNumber, setRegisterNumber] = React.useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			name,
			email,
			password,
			gender,
			is_srm_ktr: isSrmStudent,
			college_name: collegeName,
			phone_number: Number(phoneNumber),
			reg_number: registerNumber,
		};

		register(data);
	};

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<h1 className="text-[5rem] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
				MILAN
			</h1>
			<h1 className="font-bold text-[3rem] mb-[3rem]">Signup Form</h1>
			<form
				className="flex flex-col gap-5 items-center"
				onSubmit={handleSubmit}
			>
				<input
					disabled={isLoading}
					type="text"
					placeholder="Full Name"
					value={name}
					required
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					disabled={isLoading}
					type="email"
					placeholder="Email"
					value={email}
					required
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					disabled={isLoading}
					type="password"
					placeholder="Password"
					value={password}
					required
					onChange={(e) => setPassword(e.target.value)}
				/>
				<select
					disabled={isLoading}
					value={gender}
					required
					onChange={(e) => setGender(e.target.value)}
					className="bg-transparent border px-3 py-2 w-full"
				>
					<option value="" disabled>Select Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
				<input
					disabled={isLoading}
					type="text"
					placeholder="Register Number"
					value={registerNumber}
					required
					onChange={(e) => setRegisterNumber(e.target.value)}
				/>
				<input
					disabled={isLoading}
					type="text"
					placeholder="Phone Number"
					value={phoneNumber}
					required
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
				<input
					disabled={isLoading}
					type="text"
					placeholder="College Name"
					value={collegeName}
					required
					onChange={(e) => setCollegeName(e.target.value)}
				/>
				<div className="flex justify-center gap-3">
					<h1>S.R.M student?</h1>
					<input
						disabled={isLoading}
						type="checkbox"
						checked={isSrmStudent}
						onChange={(e) => setIsSrmStudent(e.target.checked)}
					/>
				</div>
				<button
					disabled={isLoading}
					className="px-4 py-2 w-[10rem] mt-[2rem] shadow-md shadow-emerald-300 font-semibold transition-all duration-500 active:bg-green-400"
				>
					{isLoading ? "Loading..." : "Register"}
				</button>
			</form>
			<p className="mt-4 text-sm text-gray-400">
				Already registered?{" "}
				<a href="/auth" className="text-indigo-400 underline">
					Login
				</a>
			</p>
		</div>
	);
}
