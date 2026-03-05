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
			<h1 className="text-[4rem] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
				MILAN
			</h1>
			<p className="text-white/40 text-sm mb-8 tracking-widest uppercase">National Cultural Fest</p>

			<div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
				<h2 className="text-2xl font-semibold mb-6 text-center">Welcome Back</h2>

				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<input
						disabled={isLoading}
						type="email"
						placeholder="Email"
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
						style={{ minWidth: "unset" }}
					/>
					<input
						disabled={isLoading}
						type="password"
						placeholder="Password"
						value={password}
						required
						onChange={(e) => setPassword(e.target.value)}
						style={{ minWidth: "unset" }}
					/>

					{errorMsg && (
						<p className="text-red-400 text-sm text-center">{errorMsg}</p>
					)}

					<button
						disabled={isLoading}
						type="submit"
						className="mt-2 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
					>
						{isLoading ? "Logging in..." : "Login"}
					</button>
				</form>

				<p className="mt-5 text-center text-sm text-white/40">
					New here?{" "}
					<a href="/register" className="text-indigo-400 hover:text-indigo-300 underline">
						Register
					</a>
				</p>
			</div>
		</div>
	);
}
