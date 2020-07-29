import React from 'react';

interface Props {
  id: string;
  defaultMessage: string;
  description?: string;
  values?: { [key: string]: any };
}

export const FormattedMessage = ({ defaultMessage }: Props) => {
    return <span>{defaultMessage}</span>;
}