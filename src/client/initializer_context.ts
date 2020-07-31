const config = {
  slm_ui: {
    enabled: true,
  },
};

export const initializerContext = {
  config: {
    get() {
      return config;
    },
  },
};
