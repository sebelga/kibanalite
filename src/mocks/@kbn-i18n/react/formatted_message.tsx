import React from "react";

import { parser } from "../parser";

interface Props {
  id: string;
  defaultMessage: string;
  description?: string;
  values?: { [key: string]: any };
}

export const FormattedMessage = ({ defaultMessage, values }: Props) => {
  return <span>{parser(defaultMessage, values)}</span>;
};
