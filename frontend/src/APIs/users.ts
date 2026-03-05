const VAR = import.meta.env.VITE_API_URL;

export const getCurrentUserApi = `${VAR}/api/users/current`;

export const registerUserApi = `${VAR}/api/users/register`;

export const loginUserApi = `${VAR}/api/users/login`;

export const logoutUserApi = `${VAR}/api/users/logout`;

// events api

export const registerForEventApi = `${VAR}/api/events/register`;
export const unregisterForEventApi = `${VAR}/api/events/unregister`;
export const getEventByUserApi = `${VAR}/api/events/getEvent`;
