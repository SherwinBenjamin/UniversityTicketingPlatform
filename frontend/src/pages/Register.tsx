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
		<div className="w-full min-h-full flex flex-col justify-center items-center py-10">
			<h1 className="text-[4rem] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
				MILAN
			</h1>
			<p className="text-white/40 text-sm mb-8 tracking-widest uppercase">National Cultural Fest</p>

			<div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
				<h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<div className="grid grid-cols-2 gap-4">
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
					</div>

					<div className="grid grid-cols-2 gap-4">
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
						>
							<option value="" disabled>Gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</div>

					<div className="grid grid-cols-2 gap-4">
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
					</div>

					<input
						disabled={isLoading}
						type="text"
						placeholder="College Name"
						value={collegeName}
						required
						onChange={(e) => setCollegeName(e.target.value)}
						style={{ minWidth: "unset" }}
					/>

					<label className="flex items-center gap-3 text-sm text-white/60 cursor-pointer select-none">
						<input
							disabled={isLoading}
							type="checkbox"
							checked={isSrmStudent}
							onChange={(e) => setIsSrmStudent(e.target.checked)}
							style={{ minWidth: "unset", width: "1rem", height: "1rem" }}
						/>
						SRM KTR student
					</label>

					<button
						disabled={isLoading}
						type="submit"
						className="mt-2 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
					>
						{isLoading ? "Creating account..." : "Register"}
					</button>
				</form>

				<p className="mt-5 text-center text-sm text-white/40">
					Already registered?{" "}
					<a href="/auth" className="text-indigo-400 hover:text-indigo-300 underline">
						Login
					</a>
				</p>
			</div>
		</div>
	);
}
