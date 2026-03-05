/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	offlineTicketIssuedApi,
	payMeNowTicketCountApi,
	totalRegistrationsApi,
} from "@/API/api";
import axios from "axios";

const Xstatic_Token = import.meta.env.VITE_X_STATIC_TOKEN;

export const ticketCountService = async () => {
	try {
		const config = {
			method: "get",
			maxBodyLength: Infinity,
			url: payMeNowTicketCountApi,
			headers: {
				"Content-Type": "application/json",
				"X-Static-Token": Xstatic_Token,
			},
			withCredentials: true,
		};

		const result = await axios.request(config);
		return result.data;
	} catch (error) {
		return error;
	}
};
export const offlineTicketIssuedService = async () => {
	try {
		const config = {
			method: "get",
			maxBodyLength: Infinity,
			url: offlineTicketIssuedApi,
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		};

		const result = await axios.request(config);
		return result.data;
	} catch (error: any) {
		return error.response.data;
	}
};
export const totalRegistrationsService = async () => {
	try {
		const config = {
			method: "get",
			maxBodyLength: Infinity,
			url: totalRegistrationsApi,
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		};

		const result = await axios.request(config);
		return result.data;
	} catch (error: any) {
		return error.response.data;
	}
};
