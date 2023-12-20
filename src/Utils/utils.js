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
}

// Helper  function to get a cookie by name
export function getCookie(name = "JwtToken") {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
