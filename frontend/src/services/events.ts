/* eslint-disable @typescript-eslint/no-explicit-any */
import { getEventByUserApi, registerForEventApi } from "@/APIs/users";
import { IRegisterForEvent } from "@/Interface/events";
import axios from "axios";

export const registerForEventService = async (reqObj: IRegisterForEvent) => {
	try {
		// const token: string = localStorage.getItem("token") || "";

		const config = {
			method: "post",
			maxBodyLength: Infinity,
			url: registerForEventApi,
			headers: {
				"Content-Type": "application/json",
				withCredentials: true,
			},
			data: reqObj,
		};

		const result = await axios.request(config);
		return result.data;
	} catch (error: any) {
		return error.response.data;
	}
};

export const unregisterForEventService = async (reqObj: any) => {
	try {
		// const token: string = localStorage.getItem("token") || "";

		const config = {
			method: "post",
			maxBodyLength: Infinity,
			url: registerForEventApi,
			headers: {
				"Content-Type": "application/json",
				withCredentials: true,
			},
			data: reqObj,
		};

		const result = await axios.request(config);
		return result.data;
	} catch (error: any) {
		return error.response.data;
	}
};

export const getEventByUserService = async (user_id: string) => {
	try {
		// const token: string = localStorage.getItem("token") || "";
		const config = {
			method: "get",
			maxBodyLength: Infinity,
			url: `${getEventByUserApi}/${user_id}`,
			headers: {
				"Content-Type": "application/json",
				withCredentials: true,
			},
		};

		const result = await axios.request(config);
		return result.data;
	} catch (error: any) {
		return error.response.data;
	}
};
