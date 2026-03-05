/* eslint-disable @typescript-eslint/no-explicit-any */
import { bookingsByEmailApi, deleteUserApi, useridByEmailApi } from "@/API/api";
import axios from "axios";

export const bookingsByEmailService = async (email: string) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: bookingsByEmailApi,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
      },
      withCredentials: true,
    };

    const result = await axios.request(config);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const userByEmailService = async (email: string) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: useridByEmailApi,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
      },
      withCredentials: true,
    };

    const result = await axios.request(config);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const deleteUserService = async (user_id: string) => {
  try {
    const config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${deleteUserApi}/${user_id}`,
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
