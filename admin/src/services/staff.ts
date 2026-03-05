/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  deleteStaffApi,
  denyStaffApi,
  getCurrentStaffApi,
  getStaffsApi,
  verifyStaffApi,
} from "@/API/api";
import axios from "axios";

export const getStaffByCategory = async (type: string) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${getStaffsApi}?type=${type}`,
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
export const verifyStaffService = async (id: string) => {
  try {
    const data = JSON.stringify({
      user_id: id,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: verifyStaffApi,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      data: data,
      withCredentials: true,
    };

    const result = await axios.request(config);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const denyStaffService = async (id: string) => {
  try {
    const data = JSON.stringify({
      user_id: id,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: denyStaffApi,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      data: data,
      withCredentials: true,
    };

    const result = await axios.request(config);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getCurrentStaff = async () => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: getCurrentStaffApi,
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

export const deleteStaffService = async (id: string) => {
  try {
 
      const config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${deleteStaffApi}/${id}`,

        withCredentials: true,
      };
   
    console.log(config);
    const result = await axios.request(config);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};
