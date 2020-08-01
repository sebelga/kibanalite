export const notifications = {
  toasts: {
    addSuccess(message: string) {
      console.log(`[Toast Success] ${message}`);
    },
    addDanger(message: string) {
      console.log(`[Toast Danger] ${message}`);
    }
  },
};
