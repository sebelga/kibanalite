const sendRequest = (
  { url, method }: { url: string; method: string },
  options: any = {}
) => {
  const headers: any = {
    Accept: "application/json",
  };

  if (method !== "DELETE") {
    headers["Content-Type"] = "application/json";
  }

  return window
    .fetch(url, {
      method,
      headers,
      body: options.body,
    })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw { body: error };
        });
      }
      return response.json();
    });
};

export const http = {
  async get(url: string) {
    return sendRequest({ url, method: "GET" });
  },
  async post(url: string, { body }: any) {
    return sendRequest({ url, method: "POST" }, { body });
  },
  async put(url: string, { body }: any) {
    return sendRequest({ url, method: "PUT" }, { body });
  },
  async delete(url: string) {
    return sendRequest({ url, method: "DELETE" });
  },
};
