export const fetcher = async ({ method, net, token = null, body = null }) => {
  const options = {};
  options.method = method;
  options.headers = { "Content-Type": "application/json" };
  options.credentials = "include";
  if (token) options.headers.authorization = token;
  if (body) options.body = JSON.stringify(body);

  try {
    const fetching = await fetch(net, options);
    return await fetching.json();
  } catch (error) {
    return { success: false, message: `Server Error: Fetcher => ${error}` };
  }
};

const refresh_token = async () => {
  const net = "http://localhost:3000/api/v1/auth/refresh-token";
  try {
    const get_token = await fetcher({ method: "POST", net });
    return get_token;
  } catch (error) {
    return { success: false, message: "Server Error: refresh_token" };
  }
};

export const hit_api = async ({ method, net, body = null }) => {
  try {
    const get_token = await refresh_token();
    if (get_token.success) {
      const fetching = await fetcher({ method, net, token: get_token.results, body });
      return fetching;
    } else {
      return get_token;
    }
  } catch (error) {
    return { success: false, message: "Server Error: hit_api" };
  }
};
