/* eslint-disable @typescript-eslint/no-explicit-any */
import { getEventByUserApi, registerForEventApi, unregisterForEventApi } from "@/APIs/users";
import { IRegisterForEvent } from "@/Interface/events";
import axios from "axios";

export const registerForEventService = async (reqObj: IRegisterForEvent) => {
	try {
		const config = {
			method: "post",
			maxBodyLength: Infinity,
			url: registerForEventApi,
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
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
		const config = {
			method: "delete",
			maxBodyLength: Infinity,
			url: unregisterForEventApi,
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
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
		const config = {
			method: "get",
			maxBodyLength: Infinity,
			url: `${getEventByUserApi}/${user_id}`,
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
			},
		};

		const result = await axios.request(config);
		return result.data;
	} catch (error: any) {
		return error.response.data;
	}
};
