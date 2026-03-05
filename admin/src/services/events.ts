/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  activateEventApi,
  createEventApi,
  deleteEventApi,
  getEventsApi,
  updateMaxCapacityApi,
} from "@/API/api";
import axios from "axios";
interface IEventReqObj {
  name: string;
  event_code: string;
  is_group_event: boolean;
  club_name: string;
  event_scope: string;
  max_group_size: number;
  mode: string;
}

export const getEventService = async () => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: getEventsApi,
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
export const deleteEventService = async (code: string) => {
  try {
    const config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${deleteEventApi}/${code}`,
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
export const createEventService = async (reqObj: IEventReqObj) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: createEventApi,
      data: reqObj,
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
export const activateEventService = async (event_code: string) => {
  try {
    const config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${activateEventApi}/${event_code}/activate`,
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
export const deactivateEventService = async (event_code: string) => {
  try {
    const config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${activateEventApi}/${event_code}/deactivate`,
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
export const updateMaxCapService = async (event_code: string,new_cap:string) => {
  try {
    const config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${updateMaxCapacityApi}/${event_code}/${new_cap}`,
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


