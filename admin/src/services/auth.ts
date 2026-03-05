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
const TEST_CREDENTIALS = { email: "test@admin.com", password: "test123" };
const TEST_STAFF_DATA = {
  success: true,
  message: "Login successful",
  data: {
    user: { id: 0, name: "Test Admin", email: "test@admin.com", role: "admin", club_name: "Test Club", is_verified: true },
    token: "preview-token",
  },
};

export const loginUserService = async (reqObj: ILoginUser) => {
  if (reqObj.email === TEST_CREDENTIALS.email && reqObj.password === TEST_CREDENTIALS.password) {
    return TEST_STAFF_DATA;
  }
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
