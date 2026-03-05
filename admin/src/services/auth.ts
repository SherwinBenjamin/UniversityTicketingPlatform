/* eslint-disable @typescript-eslint/no-explicit-any */

import { loginUserApi, logoutStaffApi, registerStaffApi } from "@/API/api";
import axios from "axios";
import Cookies from "js-cookie";
interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  phone_number: number;
  club_name: string;
  role: string;
}

interface ILoginUser {
  email: string;
  password: string;
}
const enviroment :boolean= import.meta.env.PROD;
export const registerUserService = async (reqObj: IRegisterUser) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: registerStaffApi,
      data: reqObj,
    };

    const result = await axios.request(config);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const loginUserService = async (reqObj: ILoginUser) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: loginUserApi,
      headers: {
        "Content-Type": "application/json",
      },
      data: reqObj,
      withCredentials: true,
    };

    const result = await axios.request(config);
    if (!enviroment) {
      Cookies.set("token", result.data.data.token);
    }
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const logoutUserService = async () => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: logoutStaffApi,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const result = await axios.request(config);
    if (!enviroment) {
      Cookies.remove("token");
    }
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};
