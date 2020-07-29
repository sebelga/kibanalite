export const i18n = {
  translate(
    id: string,
    {
      defaultMessage,
    }: { defaultMessage: string; values?: { [key: string]: any }, description?: string }
  ) {
    return defaultMessage;
  },
};
