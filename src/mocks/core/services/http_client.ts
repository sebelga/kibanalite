export const http = {
  async get(url: string, options: any) {
    return window.fetch(url).then((response) => {
      return response.json();
    });
  },
  async put(url: string, { body }: any) {
    return window.fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    }).then((response) => {
      if (response.status >= 300) {
        return response.json().then(error => {
          throw { body: error };
        })
      }
      return response.json();
    });
  },
};
