export function setCookie(value, options = {}, name = "JwtToken") {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  document.cookie = `${name}=${encodeURIComponent(value)}; ${Object.entries(
    options
  )
    .map(([key, val]) => `${key}=${val}`)
    .join("; ")}`;
}

// Helper function to remove a cookie by name
export function removeCookie(name = "JwtToken") {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  sessionStorage.clear()
}

// Helper  function to get a cookie by name
export function getCookie(name = "JwtToken") {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export function setUserSession(userId) {
  sessionStorage.setItem("userId", userId);
}

export function getUserSession() {
  const userId = sessionStorage.getItem("userId");
  if (userId) {
    return userId;
  }
  return null;
}

export const setTestUser = (userData) => {
  sessionStorage.setItem("userData", JSON.stringify(userData));
};

export const getTestUser = () => {
  const userDataObj = sessionStorage.getItem("userData");
  if (userDataObj) {
    return userDataObj;
  }
  return null;
};

export function formateDate(date) {
  const dateObject = new Date(date);
  // Format the date as 'MM/DD/YYYY hh:mm:ss A'
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC", // Specify your desired timezone here
  }).format(dateObject);
  return formattedDate;
}
