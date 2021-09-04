import { destroyCookie, parseCookies, setCookie } from "nookies";

export const getCookie = (field) => {
  return parseCookies(null)[field];
};

export const updateCookie = (field, value) => {
  setCookie(null, field, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};

export const deleteCookie = (field) => {
  destroyCookie(null, field, { path: "/" });
};
