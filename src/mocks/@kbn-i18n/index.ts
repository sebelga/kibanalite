import { parser } from "./parser";

export const i18n = {
  translate(
    id: string,
    {
      defaultMessage,
      values,
    }: {
      defaultMessage: string;
      values?: { [key: string]: any };
      description?: string;
    }
  ) {
    return parser(defaultMessage, values);
  },
};
