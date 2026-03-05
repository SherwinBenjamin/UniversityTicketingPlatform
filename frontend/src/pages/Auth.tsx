import useLogin from "@/features/authentication/useLogin";
import React from "react";

export default function Auth() {
	const { isLoading, login } = useLogin();

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [errorMsg, setErrorMsg] = React.useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMsg("");
		login(
			{ email, password },
			{
				onSuccess: (data) => {
					if (data?.success === false) {
						setErrorMsg(data?.message || "Login failed. Please try again.");
					}
				},
			}
		);
	};

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<h1 className="text-[5rem] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
				MILAN
			</h1>
			<h1 className="font-bold text-[3rem] mb-[3rem]">Login</h1>
			<form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit}>
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
				{errorMsg && (
					<p className="text-red-500 text-sm">{errorMsg}</p>
				)}
				<button
					disabled={isLoading}
					className="px-4 py-2 w-[10rem] mt-[2rem] shadow-md shadow-emerald-300 font-semibold transition-all duration-500 active:bg-green-400"
				>
					{isLoading ? "Loading..." : "Login"}
				</button>
			</form>
			<p className="mt-4 text-sm text-gray-400">
				New here?{" "}
				<a href="/register" className="text-indigo-400 underline">
					Register
				</a>
			</p>
		</div>
	);
}
