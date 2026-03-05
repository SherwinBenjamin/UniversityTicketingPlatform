/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	getCurrentUserApi,
	loginUserApi,
	logoutUserApi,
	registerUserApi,
} from "@/APIs/users";
import { UserRegisterProps } from "@/features/authentication/useRegister";

export async function getCurrentUser() {
	try {
		const response = await fetch(getCurrentUserApi, {
			credentials: "include",
		});
		const data = await response.json();

		return data;
	} catch (error: any) {
		return error.response.data;
	}
}

export async function loginUser(user: { email: string; password: string }) {
	try {
		const response = await fetch(loginUserApi, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await response.json();
		return data;
	} catch (error: any) {
		return error.response.data;
	}
}

export async function logoutUser() {
	try {
		const response = await fetch(logoutUserApi, {
			credentials: "include",
			method: "GET",
		});
		const data = await response.json();

		return data;
	} catch (error: any) {
		return error.response.data;
	}
}

export async function registerUser(user: UserRegisterProps) {
	try {
		const response = await fetch(registerUserApi, {
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(user),
		});
		const data = await response.json();

		return data;
	} catch (error: any) {
		return error.response.data;
	}
}
